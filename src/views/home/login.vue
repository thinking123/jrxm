<template>
  <el-container>
    <el-header>
      <div>
        <h1>
          会员登录
        </h1>
        <div>
          <el-button type="text">返回首页</el-button>
          <span>|</span>
          <el-button type="text">帮助中心</el-button>
        </div>
      </div>
    </el-header>
    <el-main>
       <login-form>

       </login-form>
    </el-main>
  </el-container>
</template>

<script>
    import LoginForm from '@/components/login-form'
    export default {
      components:{
        LoginForm
      },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
