<template>
  <nav>
    <router-link to="/">[일반API율]</router-link> |
    <router-link to="/pm25">[API부산공기질]</router-link>|
    <router-link to="/corona">[API코로나]</router-link>|
    <router-link to="/papago">[번역기]</router-link>|
    <router-link to="/crawling">[크롤링]학식정보</router-link>|
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
