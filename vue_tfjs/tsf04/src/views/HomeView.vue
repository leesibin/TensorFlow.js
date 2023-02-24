<template>
  <h1>Vue js에서 MongoDB로CRUD실습하기</h1>
  <div>
    <h3>MongoDB로 <mark>C</mark>reate 하기</h3>
    제목: <input type="text" v-model="title" /> <br />날짜:
    <input type="date" v-model="date" style="width: 100px" />
    <br />
    <input type="text" v-model="content" style="width: 400px" />
    <button @click="dbc()">전송</button>
    <h4>{{ data }}</h4>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      data: '',
      title: '',
      content: '',
      date: new Date().toISOString().substring(0, 10)
    }
  },
  methods: {
    dbc: function () {
      this.data = 'DB에 저장중....'
      axios
        .post('/dbc', {
          title: this.title,
          content: this.content,
          date: this.date
        })
        .then((res) => {
          res.data = this.data
        })
    }
  }
}
</script>

<style></style>
