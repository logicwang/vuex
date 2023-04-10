<template>
  <div>
    <div>
      <p>{{ count }}</p>
      <button @click="increment">Click me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneApp",
  data() {
    return { count: this.$store.state.count };
  },
  methods: {
    increment() {
        this.$store.commit('incrementCount', { count: this.count + 1 });    
    },
  },
};
</script>

<style lang="scss" scoped>
</style>