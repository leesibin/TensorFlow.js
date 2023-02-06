<template>
  <div><h1>ex8 예제 with Chart.js</h1></div>
  <br />
  <button @click="chart()">Chartjs</button><br />
  <canvas id="myChart" stlye="width:400px;,height:400px"></canvas>
</template>

<script setup>
/* eslint-disable */
import data from '../assets/data.js'
import Chart from 'chart.js/auto'
function chart() {
  const ctx = document.getElementById('myChart')
  new Chart(ctx, {
    responsive: false,
    type: 'radar',
    data,
    option: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    }
  })
}
</script>

<style></style>
