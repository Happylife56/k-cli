<template>
  <!-- 开启顶部安全区适配 -->
  <van-nav-bar safe-area-inset-top />
  <router-view />
  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>

<script setup>
</script>

<style lang="scss">
html,
body,
#app,
.home {
  height: 100%;
  width: 100%;
}
</style>
