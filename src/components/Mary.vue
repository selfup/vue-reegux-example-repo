<template>
  <div class="hello">
    <h1>{{ marynumber }}</h1>
    <button @click='upmary'>Up Mary</button>
    <button @click='downmary'>Down Mary</button>
  </div>
</template>

<script>
export default {
  props: ['store'],
  computed: {
    mary() {
      const { mary } = this.store.state
      return mary
    },
    marynumber() {
      return this.mary.number
    }
  },
  methods: {
    upmary() {
      this.store.send('MARY_UP', 1)
    },
    downmary() {
      this.store.send('MARY_DOWN', 1)
    }
  }
}
</script>
