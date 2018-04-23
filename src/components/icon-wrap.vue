<template>
    <div>
      <i class="el-icon-circle-check"></i>
      <span>
        {{title}}
      </span>
    </div>
</template>

<script>
    export default {
        name:'IconWrap',
        props:{
          icon:String,
          title:String
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@assets/sass/var.scss';

</style>
