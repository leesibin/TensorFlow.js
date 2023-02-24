<template>
  <h1>Vue js에서 MongoDB로CRUD실습하기</h1>
  <div>
    <h3>MongoDB로 <mark>C</mark>crud 하기</h3>
    제목: <input type="text" v-model="title" /> <br />날짜:
    <input type="date" v-model="date" style="width: 100px" />
    <br />
    <input type="text" v-model="content" style="width: 400px" />
    <button @click="dbc()">저장</button>
    <h4>{{ data }}</h4>
    <hr />
    <h3>MongoDB로 <mark>R</mark>crud 하기</h3>
    날짜:<input type="date" v-model="date2" style="width: 100px" />
    <button @click="dbr()">읽기</button>
    <br />
    <h4>{{ data2 }}</h4>
    <hr />
    <h3>MongoDB로 <mark>u</mark>crud 하기</h3>
    제목: <input type="text" v-model="title3" /> <br />날짜:
    <input type="date" v-model="date3" style="width: 100px" />
    <br />
    <input type="text" v-model="content3" style="width: 400px" />
    <button @click="dbu()">업데이트 저장</button>
    <h4>{{ data3 }}</h4>
    <hr />
    <h3>MongoDB로 <mark>d</mark>crud 하기</h3>
    날짜:<input type="date" v-model="date4" style="width: 100px" />
    <button @click="dbd()">삭제</button>
    <br />
    <h4>{{ data4 }}</h4>
    <hr />
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
      data2: '',
      data3: '',
      data4: '',
      title: '',
      content: '',
      title3: '',
      content3: '',
      date: new Date().toISOString().substring(0, 15),
      date2: new Date().toISOString().substring(0, 15),
      date3: new Date().toISOString().substring(0, 15),
      date4: new Date().toISOString().substring(0, 15)
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
          this.data = res.data
        })
    },
    dbr: function () {
      this.data2 = 'DB 데이터 읽는중...'
      axios.get('/dbr/' + this.date2).then((res) => {
        this.data2 = res.data
      })
    },
    dbu: function () {
      this.data3 = 'DB에 업데이트 중...'
      axios
        .post('/dbu', {
          title: this.title3,
          content: this.content3,
          date: this.date3
        })
        .then((res) => {
          this.data3 = res.data
        })
    },
    dbd: function () {
      this.data4 = 'DB 삭제중...'
      axios.get('/dbd/' + this.date4).then((res) => {
        this.data4 = res.data
      })
    }
  }
}
</script>

<style></style>
