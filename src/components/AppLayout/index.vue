<template>
  <el-container>
    <el-aside width="200px">
      <div class="side-bar">
        <SideBar />
      </div>
    </el-aside>
    <el-container>
      <el-header class="app-header">Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="AppLayout">
import SideBar from "./components/SideBar.vue";
</script>

<style lang="scss" scoped>
.app-header {
  height: 48px;
  display: flex;
  align-items: center;
  background-color: transparent;
}
</style>
