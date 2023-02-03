<template>
  <div>공공api 공기질 데이터</div>
  <hr />
  <button>부산지역 공기질데이터 가져오기</button>
  <div>{{ pm25 }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pm25: ''
    }
  },
  methods: {
    getpm25: function () {}
  }
}
</script>
<style></style>
