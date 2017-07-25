<template>
   <div id="view">
     <!--  :enabled="isShow"-->
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"  :class="{ touchView: isShow }" v-on:panup="onPandup">
    <router-view></router-view>
    </v-touch>
    <!-- 页面底部的圆点导航
    <ul class="circle-nav">
      <li :class="{'nav-current':$route.name==='Remain' || $route.name==='default'}"></li>
      <li :class="{'nav-current':$route.name==='RealPay1'}"></li>
      <li :class="{'nav-current':$route.name==='RealPay2'}"></li>
    </ul>-->
  </div>
</template>
<script>
  export default {
      data(){
        return {
          isShow:false
        }
      },
    methods: {
      onSwipeLeft() {
        switch (this.$route.name) {
          case 'default':
          case 'Remain':
            this.$router.push({
              name: 'RealPay1'
            })
            break
          case 'RealPay1':
            this.$router.push({
              name: 'RealPay2'
            })
            break
        }
      },
      onSwipeRight() {
        // this.$router.back()
        switch (this.$route.name) {
          case 'RealPay2':
            this.$router.push({
              name: 'RealPay1'
            })
            break
          case 'RealPay1':
            this.$router.push({
              name: 'Remain'
            })
            break
        }
      },
      onPandup(){
          console.log('111')
        this.isShow = true;

      }
    }
  }
</script>
<style scoped>
  #view {
    min-height: 100%;
    line-height: 400px;

  }

  #view>div {
    height: inherit;
  }
 .touchView {
   touch-action: inherit !important;
 }
  /* .circle-nav {
     position: fixed;
     bottom: 10px;
     width: 100%;
     max-width: inherit;
     text-align: center;
     padding: 0;
     opacity: 0.75;
   }

   .circle-nav li {
     display: inline-block;
     width: 7px;
     height: 7px;
     border: 1px solid #f44336;
     border-radius: 50%;
     margin: 5px;
   }*/

  .nav-current {
    background-color: #f44336;
  }
</style>

