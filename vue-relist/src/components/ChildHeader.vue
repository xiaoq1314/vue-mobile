<template>
  <div class="name">
    <mt-header   :title="msg">
      <mt-button icon="back" slot="left" @click.native="goRouter">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg:this.msgFromFather,

      }
    },
    props:['msgFromFather'],
    methods:{
      goRouter:function () {
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
</style>
