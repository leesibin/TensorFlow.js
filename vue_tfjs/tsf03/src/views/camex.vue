<template>
  <div id="display"></div>
  <button @click="main">스샷 분석</button>
  <button @click="alog()">디버거</button>
  <div>{{ result }}</div>
  <div>{{ trans }}</div>
</template>

<script>
/* eslint-disable */
import * as tf from '@tensorflow/tfjs'
import * as mobilent from '@tensorflow-models/mobilenet'
import axios from 'axios'
const VideoElement = document.createElement('video')
export default {
  name: 'app',
  data() {
    return {
      result: '스샷을 찍 이미지를 분석을 시작하시오.',
      trans: ''
    }
  },
  methods: {
    alog: function () {
      console.log(tf)
      console.log(mobilent)
    },
    main: async function () {
      this.result = '이미지 분석중'
      this.trans = '번역중'
      const display = document.getElementById('display')
      display.appendChild(VideoElement)
      VideoElement.width = 400
      VideoElement.height = 400
      const cam = await tf.data.webcam(VideoElement)
      const net = await mobilent.load()
      const img = await cam.capture()
      const vresult = await net.classify(img)

      this.result =
        '분석결과' +
        vresult[0].className +
        '(' +
        (vresult[0].probability * 100).toFixed(2) +
        '%)'
      //번역
      const cid = process.env.VUE_APP_id
      const csecret = process.env.VUE_APP_secret
      const query = this.result
      const url = '/v1/papago/n2mt'
      this.trans = '번역중....'

      const frm = new FormData()
      frm.append('source', 'en') //번역 해야할 타켓
      frm.append('target', 'ko') // 번역할 언어
      frm.append('text', query)

      axios
        .post(url, frm, {
          headers: {
            'Content-Type': 'application/json',
            'X-Naver-Client-Id': cid,
            'X-Naver-Client-Secret': csecret
          }
        })
        .then((res) => {
          const rst = res.data.message.result.translatedText
          console.log(rst)
          this.trans = rst
        })
        .catch((err) => {
          err + '다시분석해주세요'
        })
    }
  }
}
</script>

<style></style>
