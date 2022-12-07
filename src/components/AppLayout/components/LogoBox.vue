<template>
  <div class="logo-box">
    <img src="" class="logo" />
    <div class="name">锤子前端</div>
  </div>
</template>

<script setup lang="ts" name="LogoBox"></script>

<style lang="scss" scoped>
.logo-box {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3578e5;
  .logo {
    width: 30px;
    height: 30px;
    background-color: #fff;
  }
  .name {
    color: #fff;
    font-size: 22px;
    margin-left: 8px;
  }
}
</style>
