<template>
    <el-container>
      <el-main>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="手机号码:" prop="phoneNum">
            <el-input v-model="form.phoneNum"></el-input>
          </el-form-item>
          <el-form-item label="图片验证:" prop="imageVerifyCode">
            <el-input v-model="form.imageVerifyCode">
              <template slot="append"><img src="imageVerifySrc"/></template>
            </el-input>
          </el-form-item>
          <el-form-item label="手机验证:" prop="phoneVerifyCode">
            <el-input v-model="form.phoneVerifyCode">
              <el-button slot="append" @click="handleGetCode">获取验证码</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="活动性质" prop="agree">
            <el-checkbox label="单纯品牌曝光" v-model="form.agree">
              同意
              <el-button type="text">《投融界服务协议》</el-button>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">立即注册</el-button>
            已有账号？
            <el-button type="text">去登入</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
</template>

<script>
  import {showMessage} from '@/utils'
    export default {
        data() {
            return {
              form:{
                phoneNum:'',
                imageVerifyCode:'',
                phoneVerifyCode:'',
                agree:false
              },
              rules:{
                phoneNum:{required:true},
                imageVerifyCode:{required:true},
                phoneVerifyCode:{required:true},
              }
            }
        },
        methods: {
          handleGetCode(){

          },
          handleSubmit(){
            this.refs.form.validate(v=>{
              if(v){

              }
            })
          }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
