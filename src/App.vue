<template>
  <div id="app">
    <tom :store='store'></tom>
    <mary :store='store'></mary>
  </div>
</template>

<script>
import Tom from './components/Tom.vue'
import Mary from './components/Mary.vue'

export default {
  data() {
    return {
      store: this.$root.$options.store
    }
  },
  components: {
    Tom,
    Mary
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
