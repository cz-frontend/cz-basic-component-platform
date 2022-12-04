<template>
  <div class="side-bar">
    <LogoBox />
    <el-scrollbar>
      <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><HomeFilled /></el-icon>首页
          </template>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts" name="SideBar">
import LogoBox from "./LogoBox.vue";
</script>

<style lang="scss" scoped>
.side-bar {
  min-height: 100vh;
  background-color: #fff;
}
</style>
