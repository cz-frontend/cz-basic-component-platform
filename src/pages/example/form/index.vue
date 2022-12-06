<template>
  <div>
    <cz-form
      ref="form"
      label-width="100px"
      :options="formOptions"
      @on-exceed="handleExceed"
      @on-change="handleChange"
      @on-remove="handleRemove"
      @on-preview="handlePreview"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @before-upload="handleBeforeUpload"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">添加封面图</el-button>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </cz-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from "@/base-ui/CzForm/src/types";
import { ElMessage, ElMessageBox } from "element-plus";
import { formOptions } from "./config";
import { ref } from "vue";

interface Scope {
  form: FormInstance;
  model: any;
}

let form = ref();

let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success("提交成功");
    } else {
      ElMessage.error("表单填写有误,请检查");
    }
  });
};
// 重置表单
let resetForm = () => {
  form.value.resetFields();
};

let handleRemove = (file: any, fileList: any) => {
  console.log("handleRemove");
  console.log(file, fileList);
};
let handlePreview = (file: any) => {
  console.log("handlePreview");
  console.log(file);
};
let beforeRemove = (val: any) => {
  console.log("beforeRemove");
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`);
};
let handleExceed = (val: any) => {
  console.log("handleExceed", val);
  ElMessage.warning(
    `The limit is 3, you selected ${
      val.files.length
    } files this time, add up to ${
      val.files.length + val.fileList.length
    } totally`
  );
};
let handleSuccess = (val: any) => {
  console.log("success");
  console.log(val);
};
let handleChange = (val: any) => {
  console.log("change");
  console.log(val);
};
let handleBeforeUpload = (val: any) => {
  console.log("handleBeforeUpload");
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
