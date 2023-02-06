<template>
  <div>cam 페이지입니다</div>
  <video id="video0" style="width: 400px; height: 400px"></video>
  <button @click="main()">화면출력</button>
  <div>{{ resultgood }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      resultgood: ''
    }
  },
  methods: {
    main: async function () {
      const webcam = document.getElementById('video0')
      const cam = await this.$tf.data.webcam(webcam)
      const img = await cam.capture()
      const mnet = await this.$mobilent.load()
      const result = await mnet.classify(img)
      this.resultgood =
        '추측 :' + result[0].className + '확률 :' + result[0].probability
      img.print()
      this.$tf.dispose(img)
    }
  }
}
</script>

<style></style>
