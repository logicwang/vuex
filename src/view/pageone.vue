<template>
    <div> 总数是：{{getCount}}</div>
</template>

<script>
export default {
    name:'ItemIndex',
    computed: {
        getCount() {
            return this.$store.state.count
        }
    }
}
</script>