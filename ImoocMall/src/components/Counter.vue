<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{ num }}</span></p>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      num: 0,
    }
  },
  methods: {
    increment () {
      this.$emit('incre')
      // this.num++
    },
    decrement () {
      this.$emit('decre')
      // this.num--
    }
  }
}
</script>

<style>

</style>
