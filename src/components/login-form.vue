<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
    <el-tab-pane label="普通登录方式" name="first">
      <el-form :model="formAccount" :rules="accountRules" ref="formAccount">
        <el-form-item label="账号:" prop="account">
          <el-input v-model="formAccount.account"  placeholder="账号/手机号码/电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="formAccount.password" placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="imageVerifyCode">
          <el-input v-model="formAccount.imageVerifyCode" placeholder="请输入验证码">
          </el-input>
          <img src="imageVerifySrc"/>
          <el-button type="text" @click="handleRefresh">刷新</el-button>
        </el-form-item>
        <el-form-item  prop="agree">
          <el-checkbox label="两周内自动登录" v-model="formAccount.rememberLogin">
            同意
            <el-button type="text">忘记密码？</el-button>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <div>
        <span>|</span>
        <el-button type="text">免费注册</el-button>
        <span>|</span>
        <el-button type="text">客服咨询</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="手机验证码登录" name="second">
      <el-form :model="formPhone" :rules="phoneRules" ref="formPhone">
        <el-form-item label="手机号码:" prop="phoneNum">
          <el-input v-model="formPhone.phoneNum"  placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="图片验证:" prop="imageVerifyCode">
          <el-input v-model="formPhone.imageVerifyCode" placeholder="输入计算结果">
          </el-input>
          <img src="imageVerifySrc"/>
        </el-form-item>
        <el-form-item label="手机验证:" prop="phoneVerifyCode">
          <el-input v-model="formPhone.phoneVerifyCode" placeholder="请输入验证码">
            <el-button slot="append" @click="handleGetCode">获取手机验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      <div>
        <span>|</span>
        <el-button type="text">免费注册</el-button>
        <span>|</span>
        <el-button type="text">客服咨询</el-button>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
    export default {
        name:'LoginForm',
        data() {
            return {
              formAccount:{
                account:'',
                password:'',
                imageVerifyCode:'',
                rememberLogin:''
              },
              formPhone:{
                phoneNum:'',
                imageVerifyCode:'',
                phoneVerifyCode:''
              },
              accountRules:{
                account:{required:true},
                password:{required:true},
                imageVerifyCode:{required:true},
              },
              phoneRules:{
                phoneNum:{required:true},
                imageVerifyCode:{required:true},
                phoneVerifyCode:{required:true}
              },
            }
        },
        methods: {
          handleSubmit(){

          },
          handleGetCode(){

          },
          handleRefresh(){

          }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@assets/sass/var.scss';

</style>
