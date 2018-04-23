<template>
  <el-container>
    <el-main>
      <div>
        <i class="el-icon-circle-check"></i>
        <div>
          <strong>
            恭喜，您已成为
            <span>
             {{form.name}}
            </span>
            会员！
          </strong>
          <div>
            您的账号是：
            <span>
              {{form.account}}
            </span>

          </div>
          <div>
            您的初始密码是：
            <span>{{form.password}}</span>
            (验证码)
            <el-button type="text">设置密码</el-button>
          </div>
          <div>
            <el-button @click="handleGotoUserCenter">一键直达个人中心</el-button>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        data() {
            return {
              form:{
                name:'',
                account:'',
                password:''
              }
            }
        },
        methods: {
          handleGotoUserCenter(){

          }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@assets/sass/var.scss';

</style>
