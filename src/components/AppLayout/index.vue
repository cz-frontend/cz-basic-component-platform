<template>
  <el-container>
    <el-aside width="200px">
      <div class="side-bar">
        <SideBar />
      </div>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="AppLayout">
import SideBar from "./components/SideBar.vue";
</script>

<style scoped></style>
