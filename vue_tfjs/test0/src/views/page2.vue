<template>
  <div id="display"></div>
  <button @click="main">스샷 분석</button>
  <div>{{ result }}</div>
</template>

<script>
/* eslint-disable */
import * as tf from '@tensorflow/tfjs'
import * as mobilent from '@tensorflow-models/mobilenet'
const VideoElement = document.createElement('video')
export default {
  name: 'app',
  data() {
    return {
      result: '스샷을 찍 이미지를 분석을 시작하시오.'
    }
  },
  methods: {
    main: async function () {
      this.result = '이미지 분석중'
      const display = document.getElementById('display')
      display.appendChild(VideoElement)
      VideoElement.width = 400
      VideoElement.height = 400
      const cam = await tf.data.webcam(VideoElement)
      const net = await mobilent.load()
      const img = await cam.capture()
      const vresult = await net.classify(img)
      img.print()
      tf.dispose(img) //tensorflow 메모리 비움

      this.result =
        '분석결과 : ' +
        vresult[0].className +
        '(' +
        (vresult[0].probability * 100).toFixed(2) +
        '%)'
    }
  }
}
</script>

<style></style>
