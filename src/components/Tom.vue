<template>
  <div class="hello">
    <h1>{{ tomnumber }}</h1>
    <button @click='uptom'>Up Tom</button>
    <button @click='downtom'>Down Tom</button>
  </div>
</template>

<script>
export default {
  props: ['store'],
  computed: {
    tom() {
      const { tom } = this.store.state
      return tom
    },
    tomnumber() {
      return this.tom.number
    }
  },
  methods: {
    uptom() {
      this.store.send('TOM_UP', 1)
    },
    downtom() {
      this.store.send('TOM_DOWN', 1)
    }
  }
}
</script>
