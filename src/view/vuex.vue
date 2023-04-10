
<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: "VueApp",
  data() {
    return {};
  },
  computed: {
    count() {
      return store.state.count;
    },
  },
};
</script>

<style  scoped>
</style>