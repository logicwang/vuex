<template>
  <div>
    <span>{{ count }}</span>
    <button @click="incrementCount">增加</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incrementCount() {
      this.$store.commit('increment')
    }
  }
}
</script>
