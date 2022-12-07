<template>
  <cz-table
    stripe
    border
    isEditRow
    pagination
    :total="total"
    :data="dataList"
    :options="tableOptions"
    elementLoadingText="加载中..."
    :pageSize="queryParams.pageSize"
    :currentPage="queryParams.pageNum"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #link="{ scope }">
      <a href="#">{{ scope.row.id }}</a>
    </template>
    <template #status="{ scope }">
      <el-switch v-model="scope.row.status" />
    </template>
    <template #date="{ scope }">
      <div class="flex align-center">
        <el-icon size="14">
          <Timer />
        </el-icon>
        <span class="padding-icon">{{ scope.row.date }}</span>
        '
      </div>
    </template>
    <template #action="{ scope }">
      <el-button type="text">编辑</el-button>
      <el-button type="text">删除</el-button>
    </template>
  </cz-table>
</template>

<script setup lang="ts">
import { tableOptions } from "./config";
import { ref, reactive } from "vue";

const total = ref(0);
const dataList = reactive([
  {
    id: 168188,
    status: true,
    name: "锤子前端",
    date: "2022-12-05",
    address: "重庆市两江新区互联网产业园",
  },
]);
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
});

/**
 * 舰艇数量变化
 */
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val;
};

/**
 * 舰艇条数变化
 */
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val;
};
</script>

<style scoped>
.padding-icon {
  margin-left: 8px;
}
</style>
