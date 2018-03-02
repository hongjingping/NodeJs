<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{ num }}</span></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    increment () {
      console.log(12)
      this.num++
    },
    decrement () {
      console.log(23)
      this.num--
    }
  }
}
</script>

<style>

</style>
