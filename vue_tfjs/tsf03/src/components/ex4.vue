<template>
  <div>ex4 예제</div>
  <button @click="tf1()">히트맵</button>
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
      const data = {
        values: [
          [1, 0, 0],
          [0, 0.3, 0.7],
          [0, 0.7, 0.3]
        ],
        xTickLables: ['apple', 'orange', 'Tangerline'],
        yTickLables: ['apple', 'orange', 'Tangerline']
      }
      const option = {
        width: 500,
        height: 300,
        xLabel: 'Actual Fruit',
        yLable: 'Reconginized Frult',
        colorMap: 'blue'
      }
      this.$tfvis.render.heatmap(document.getElementById('plot1'), data, option)
    }
  }
}
</script>

<style></style>
