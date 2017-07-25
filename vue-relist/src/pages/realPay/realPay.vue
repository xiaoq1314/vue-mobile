<template>
  <div class="name">
    <Child-Header msgFromFather = '实时充值111'></Child-Header>
    这就是实时充值页面
    <Nav-bar></Nav-bar>
  </div>
</template>
<script>
  import ChildHeader from '@/components/ChildHeader'
  import NavBar from '@/components/Nav'
  export default{
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
