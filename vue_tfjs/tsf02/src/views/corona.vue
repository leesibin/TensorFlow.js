<template>
  <div>코로나페이지</div>
  <button @click="test">console환경변수 테스트</button>
  <hr />
  <select name="sel" id="selbox" v-model="local">
    <option value="부산">부산</option>
    <option value="대전">대전</option>
    <option value="대구">대구</option>
    <option value="광주">광주</option>
  </select>
  <select name="sel" id="selbox" v-model="day">
    <option value="어제">어제</option>
    <option value="오늘">오늘</option>
  </select>
  <button @click="getcorona">
    {{ day }}{{ local }}지역 코로나데이터 가져오기
  </button>
  <div>{{ corona }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      local: '부산',
      day: '오늘',
      corona: ''
    }
  },
  methods: {
    getcorona: function () {
      var aa = new Date()
      var year = aa.getFullYear()
      var month = aa.getMonth() + 1
      var date = aa.getDate()
      this.day = year + '-0' + month + '-0' + date
      console.log(this.day)
      const key = process.env.VUE_APP_pkey
      const surl =
        'http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=' +
        key +
        '&pageNo=1&numOfRows=500&std_day=' +
        this.day +
        '&gubun=' +
        this.local +
        '&apiType=JSON'
      this.pm25 = '데이터 로드중.....'
      fetch(surl)
        .then((res) => res.json())
        .then((body) => {
          const _ = body
          const op2 = _.items[0].stdDay
          const op = _.items[0].localOccCnt
          const op1 = _.items[0].gubun
          this.corona = op2 + '날짜  ' + '지역' + op1 + ': 코로나 확진자' + op
          console.log(_)
          console.log(op)
        })
    }
  }
}
</script>

<style></style>
