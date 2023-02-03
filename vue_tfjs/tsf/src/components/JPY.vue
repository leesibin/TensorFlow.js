<template>
  <div>1.실시간 환율 API</div>
  원화로 계산할 달러는 <input v-model="input" />달러
  <div>현시세 : 1달러에{{ onedollar }}원 입니다.</div>
  <br />
  <div>입력하신{{ input }}달러에{{ result }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      input: 0,
      onedollar: 1200,
      result: 0
    }
  },
  watch: {
    input: function () {
      const dollar = this.input
      if (isNaN(dollar)) {
        this.result = '계산중...'
        return
      }
      const url =
        'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWJPY'
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.onedollar = data[0].baseprice
          const mydata = this.input * this.onedollar
          this.result = `${mydata.toLocaleString('ko-KR')}`
        })
    }
  },
  methods: {}
}
</script>

<style></style>
