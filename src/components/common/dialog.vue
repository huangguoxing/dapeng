<template>
  <div>
  <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="dialog-header">
         <span class="license-plate">车牌：</span>
         <el-input v-model="input" placeholder="请输入车牌"></el-input>
         <span>时间</span>
         <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
   data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
      handleClose(done) {
        console.log(done)
      }
    }
  };
</script>

<style lang="scss">
  .dialog-header{
    display: flex;
    .license-plate{
      display: inline-block;
      width: 190px;
    }
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 318px;
  }
</style>
