<template>
  <div>
    <input type="text" v-model="url" />
    <button @click="urlapi">변환</button>
    <div>{{ url }}</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      url: ''
    }
  },
  methods: {
    urlapi: function () {}
  }
}
</script>

<style></style>
