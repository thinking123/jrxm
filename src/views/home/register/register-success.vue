<template>
  <el-container>
    <el-header>
      温馨提示
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我要找资金" name="first"></el-tab-pane>
        <el-tab-pane label="我要找项目" name="second"></el-tab-pane>
      </el-tabs>
      <div>
        <strong>
          找资金，从这里开始
        </strong>
        <div>
          <icon-wrap v-for="(item , index) in icons" :key="index" :icon="item.icon" :title="item.title">

          </icon-wrap>
        </div>
        <el-button @click="dialogVisible = true">
          立即加入
        </el-button>
      </div>
    </el-main>
    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>项目方是寻求资金的公司、单位或个人，您选择的是项目方，选择后不可修改，您是否确定？</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleSubmit">确定</el-button>
    <el-button @click="dialogVisible = false">重新选择</el-button>
  </span>
    </el-dialog>
  </el-container>
</template>

<script>
  import IconWrap from '@/components/icon-wrap'

  export default {
    components: {
      IconWrap
    },
    data() {
      return {
        icons: [
          {icon: '', title: '免费注册'},
          {icon: '', title: '发布项目'},
          {icon: '', title: '寻找资金'},
          {icon: '', title: '约谈资金方'},
          {icon: '', title: '达成融资'},
        ],
        dialogVisible:false,
        activeName:'first'
      }
    },
    methods: {
      handleSubmit(){

      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import '~@assets/sass/var.scss';

</style>
