<template>
  <div>크롤링 데이터 학식정보</div>
  <div>nodejs 에 크롤링을 명령하고 콜백받은 그 데이터 가져오기</div>
  <button @click="getData()">명령 후 데이터 가져오기</button>
  <div v-html="data"></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      data: ''
    }
  },
  methods: {
    getData: function () {
      this.data = '크롤링중...'
      axios.get('/hek').then((res) => {
        this.data = res.data
      })
    }
  }
}
</script>
<style></style>
