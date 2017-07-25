<template>
  <div class="name">
    <Child-Header msgFromFather = '实时充值'></Child-Header>
    这是我的页面
    <Nav-bar></Nav-bar>
  </div>
</template>
<script>
  import ChildHeader from '@/components/ChildHeader'
  import NavBar from '@/components/Nav'
  export default{
    data(){
      return {
        //由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
        vuegConfig:{
          disable:false
        }
      }
    },
    components: {
      //   Hello,
      //  Cicle
      ChildHeader,
      NavBar
    },
  }
</script>
<style scoped>
  .mint-header{
    height: 50px;
  }
</style>
