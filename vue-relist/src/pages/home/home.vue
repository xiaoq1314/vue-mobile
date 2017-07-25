<style scoped>
  .aClass{
    text-align:left;
    color: black;
    cursor: pointer;
  }
</style>
<template>
  <div class="main_div">
    <Header-bar msgFromFather = '后台首页'></Header-bar>
    <div class="home-content">
      <mt-cell :title="item.name" v-for = "item in items" :to="item.href"></mt-cell>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/Header'
  export default {
    data(){
      return{
        msgChild:'',
        items:[{
            'name':'实时留存功能',
            // 'href':'http://q.4399data.com/vip/?r=realRemain/hasMobileRemain'
             'href':'/routerAll'
        },{
          'name':'其他相关功能',
          'href':''
        },{
          'name':'更多待续...',
          'href':''
        }],
      }
    },
    components: {
      //   Hello,
      //  Cicle
      HeaderBar
    },
    methods:{

  }
  }
</script>
