<template>
  <div>ex3 예제</div>
  <button @click="tf1()">히스토그램 그리기</button>
  <div id="plot1"></div>
  <div id="plot2"></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    tf1: function () {
      const data = [1, 5, 5, 5, 5, 10, -3, -3]
      // const id = document.getElementById()
      this.$tfvis.render.histogram(document.getElementById('plot1'), data, {
        width: 800
      })
      this.$tfvis.render.histogram(document.getElementById('plot2'), data, {
        maxBins: 4,
        width: 400
      })
    }
  }
}
</script>

<style>
canvas {
  /* important사용시 우선으로 사용해진다. */
  width: 60% !important;
  display: inline !important;
}
</style>
