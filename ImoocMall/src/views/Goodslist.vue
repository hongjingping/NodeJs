<template>
  <div>
    这个是商品列表页面<br/>
    <span>goodsId:{{ $route.params.goodsId }}</span>
    <br/>
    <span>name:{{ $route.params.name }}</span>
    <br/>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
