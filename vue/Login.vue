<template>
  <el-form class="el-form">
    <div class="rule-form">
      <el-form-item prop="username">
        <el-input type="text"> </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script setup></script>

<style scoped>
.el-form {
  width: 450px;
  height: 260px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
