<template>
  <div class="home">
    <!-- 전환 기능을 넣은 구문 -->
    <button @click="select = 'USD'">달러</button>
    <button @click="select = 'JPY'">엔화</button>
    <keep-alive>
      <component :is="select"></component>
    </keep-alive>
    <!-- keep-alive 입력하면 입력값이 유지된다! -->

    <!-- 그냥 한 번에 출력하는 구문 -->
    <!-- <USD />
    <br />
    <JPY /> -->
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import USD from '@/components/USD.vue'
import JPY from '@/components/JPY.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      select: 'USD'
    }
  },
  components: {
    USD,
    JPY
  }
}
</script>
