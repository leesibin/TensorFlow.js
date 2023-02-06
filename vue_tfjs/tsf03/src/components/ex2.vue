<template>
  <div>ex2 예제</div>
  <button @click="tf1()">멀티 차트 그리기</button>
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
      const values = [
        [
          { x: 1, y: 20 },
          { x: 2, y: 30 },
          { x: 3, y: 5 },
          { x: 4, y: 12 }
        ],
        [
          { x: 1, y: 50 },
          { x: 2, y: -10 },
          { x: 3, y: 30 },
          { x: 4, y: -5 }
        ]
      ]
      const series = ['시리즈1', '시리즈2']
      this.$tfvis.render.linechart(
        document.getElementById('plot1'),
        { values, series },
        { width: 400, xLabel: 'x축 테이블', yLabel: 'y축 테이블' }
      )
    }
  }
}
</script>

<style></style>
