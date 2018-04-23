<template>
  <el-card>
    <el-row>
      <el-button type="text">{{title}}</el-button>
      <span>
        {{createDate}}
      </span>
    </el-row>
    <div>
      <div>
        <el-row>
          融资资金：<span>{{fund}}</span>
        </el-row>
        <el-row>
          <el-col>
            所在地区：{{location}}
          </el-col>
          <el-col>
            所属行业：{{industry}}
          </el-col>
          <el-col>
            {{userName}}
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            项目融资方式：{{financeType}}
          </el-col>
          <el-col>

          </el-col>
          <el-col>
            {{company}}
          </el-col>
        </el-row>
        <el-row>
          {{commentsCount}}
        </el-row>
      </div>
      <el-button>
        约谈项目方
      </el-button>
    </div>

  </el-card>
</template>

<script>
    export default {
        name:'ProjectItem',
        props:{
          title:String,
          createDate:String,
          fund:String,
          location:String,
          industry:String,
          userName:String,
          financeType:String,
          company:String,
          commentsCount:String,
        },
        data() {
            return {

            }
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@assets/sass/var.scss';

</style>
