<template>
  <div>ex1 예제</div>
  <button @click="tf1">바차트 만들기</button>
  <div id="plot1"></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    tf1: function () {
      const data = [
        { index: 'foo', value: 7 },
        { index: 'bar', value: 15 },
        { index: 3, value: 3 },
        { index: 5, value: 10 }
      ]
      this.$tfvis.render.barchart(document.getElementById('plot1'), data, {
        yLabel: 'My value',
        width: 400
      })
    }
  }
}
</script>

<style></style>
