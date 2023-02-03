<template>
  <div class="home">
    <button @click="select = 'USD'">달러</button>
    <button @click="select = 'JPY'">엔화</button>
    <keep-alive>
      <component :is="JPY"></component>
    </keep-alive>
    <USD />
    <JPY />
  </div>
</template>

<script>
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
