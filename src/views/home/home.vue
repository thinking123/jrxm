<template>
  <el-container>
    <el-header>
      <div>
        <img/>
        <div>
          <el-button type="text">首页</el-button>
          <el-button type="text">找资金</el-button>
          <el-button type="text">选项目</el-button>
          <el-button type="text">帮助中心</el-button>
        </div>
      </div>
    </el-header>
    <el-main>
      <login-form>

      </login-form>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script>
  import LoginForm from '@/components/login-form'

  export default {
    components: {
      LoginForm
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style scoped>

</style>
