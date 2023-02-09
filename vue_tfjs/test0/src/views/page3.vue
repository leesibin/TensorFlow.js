<template>
  <div id="display">
    <input
      ref="image"
      id="input"
      type="file"
      name="img"
      accept="image/"
      multiple="multiple"
      style="display: none"
      @change="upIMG()"
    />
    <label id="img-box" for="input">+</label>
  </div>
  <img ref="img" v-if="imglink" :src="imglink" alt="준비중" />
  <hr />
  <div id="result1">{{ result1 }}</div>
  <button @click="predict()">분석</button>
  <div id="result">{{ result }}</div>
</template>

<script>
/*eslint-disable*/
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

export default {
  name: 'app',
  data() {
    return {
      imglink: '',
      result: '',
      result1: '파일을 업로드하여 이미지 분석을 시작하시오.',
      rst: ''
    }
  },
  methods: {
    upIMG: function () {
      const image = this.$refs.image.files[0] //해당 이미지 선택
      const reader = new FileReader() //생성자 인스턴스
      reader.readAsDataURL(image)
      reader.onload = (e) => {
        this.imglink = e.target.result
      }
    },

    predict: async function () {
      const img = this.$refs.img
      // this.result = '이미지 분석중...'
      mobilenet
        .load()
        .then((model) => model.classify(img))
        .then((rst) => {
          this.result =
            '분석결과 : ' +
            rst[0].className +
            '(' +
            (rst[0].probability * 100).toFixed(2) +
            '%)'
          //90%이상일때 base64
          const image = this.$refs.image.files[0] //해당 이미지 선택
          const reader = new FileReader() //생성자 인스턴스
          reader.readAsDataURL(image)
          reader.onload = (e) => {
            if (rst[0].probability * 100 > 90) {
              this.result1 = e.target.result
              console.log('좋은 사진입니다.')
            } else {
              this.result1 = '사진을 다시 올려주세요'
              console.log('사진을 다시 올려주세요.')
            }
          }
        })

      /*텐서로 전환*/
      const tfimg = tf.browser.fromPixels(img)
      tfimg.print()
      tf.dispose(tfimg) //tensorflow 메모리 비움
    }
  }
}
</script>

<style>
#result1 {
  width: 95%;
  text-align: center;
  height: 80px;
  overflow: auto;
  word-break: break-all;
  margin: 10px;
}

#img-box {
  display: inline-block;
  width: 100px;
  height: 100%;
  border: 1px solid rgb(131, 136, 225);
  border-radius: 5px;
  background-color: lightblue;
  color: #fff;
  font-size: 3em;
  text-align: center;
  padding: auto;
  margin: 10px;
  line-height: 100px;
}

img {
  border: 1px solid lightgoldenrodyellow;
  display: inline-block;
  width: 100px;
  height: 100%;
  border-radius: 5px;
}
</style>
