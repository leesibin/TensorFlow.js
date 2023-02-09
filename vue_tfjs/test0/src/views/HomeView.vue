<template>
  <div>아버지와 아들의 키를 담은 엑셀파일을 넣어주세요.</div>
  <br />
  <div>
    <input type="file" @change="readExcel" /><button
      id="modeling-button"
      @click="modeling"
    >
      분석시작
    </button>
  </div>
  <br />
  <div>
    <input type="text" id="input_data" v-model="newResult" /><button
      @click="prediction"
    >
      예측
    </button>
  </div>
  <div id="predict_section"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      father_height: [],
      son_height: [],
      newResult: ''
    }
  },
  methods: {
    async readExcel(event) {
      console.log(event)
      let input = event.target
      let reader = new FileReader()
      let father_height_dum = []
      let son_height_dum = []
      reader.onload = function (_) {
        let data = reader.result
        let wordBook = XLSX.read(data, { type: 'binary' })
        const x = wordBook.Sheets.train
        for (let j = 2; j < 757; j++) {
          father_height_dum.push(x['A' + j].v)
          son_height_dum.push(x['B' + j].v)
        }
      }
      reader.readAsBinaryString(input.files[0])
      this.father_height = father_height_dum
      this.son_height = son_height_dum
    },
    modeling(_) {
      console.log(this.father_height)
      let xt = this.$tf.tensor(this.father_height)
      let yt = this.$tf.tensor(this.son_height)

      // 모델의 모양을 만들기
      let X = this.$tf.input({ shape: [1] }) // 값 하나 들어옴
      let Y1 = this.$tf.layers.dense({ units: 10, activation: 'relu' }).apply(X)
      let Y2 = this.$tf.layers
        .dense({ units: 10, activation: 'relu' })
        .apply(Y1)
      // 히든 레이어 2층
      let Z = this.$tf.layers.dense({ units: 1 }).apply(Y2)
      let model = this.$tf.model({ inputs: X, outputs: Z }) // 인아웃풋 저장
      this.$tfvis.show.modelSummary({ name: 'Model Summary' }, model)
      let compileParam = {
        optimizer: this.$tf.train.adam(), // train ??
        loss: this.$tf.losses.meanSquaredError
      } // 최적화의 loss 측정방법종류
      model.compile(compileParam) // 컴파일
      const fitParm = {
        epochs: 100,
        // tfvis를 통해 그래프 생성
        callbacks: this.$tfvis.show.fitCallbacks(
          { name: 'Training Performance' },
          ['loss', 'mse'],
          { height: 200, callbacks: ['onEpochEnd'] }
        )
      }
      model.fit(xt, yt, fitParm).then(() => {
        console.log(model)
        let result = model.predict(xt)
        result.print()
        model.save('localstorage://my-model-3')
        // 로컬에 모델을 저장
        console.log('모델 저장됨')
      })
    },
    // 입력한 값으로 예측하기 시작
    async prediction() {
      const inputData = document.getElementById('input_data')
      const xt = this.$tf.tensor(Number(inputData.value))
      const model = await this.$tf.loadLayersModel('localstorage://my-model-3')
      console.log('모델 로드됨')
      console.log(model)
      this.newResult = model.predict(xt)
      newResult.print()
    }
  }
}
</script>

<style></style>
