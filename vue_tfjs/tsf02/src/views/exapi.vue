<template>
  <form action="">
    <div>
      <input type="text" v-model="papago" />
      <button @click="urlapi()">변환</button>
      <div>{{ papago }}</div>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      papago: ''
    }
  },
  methods: {
    urlapi: function () {
      axios({
        url: 'http://localhost:3000/exapi',
        method: 'get',
        data: {
          ktk: this.papago
        }
      })
        .then((res) => {
          console.log(res)
        })
        .then((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
