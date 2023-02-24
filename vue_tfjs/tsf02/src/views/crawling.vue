<template>
  <div>크롤링 데이터 학식정보</div>
  <div>nodejs 에 크롤링을 명령하고 콜백받은 그 데이터 가져오기</div>
  <div v-html="data"></div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      data: ''
    }
  },
  created() {
    this.data = `<div class="spinner-border text-info" role="status"></div>`
    axios.get('/crawling').then((res) => {
      this.data = res.data
      console.log(res)
    })
  },
  methods: {}
}
</script>
<style></style>
