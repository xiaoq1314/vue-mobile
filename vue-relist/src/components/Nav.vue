<template>
	<div class="db_nav">
    <mt-tabbar>
      <mt-tab-item v-for="item in navItem" :id="item.text" >
        <img slot="icon" :src="item.imgs">
        <router-link :to="item.url">{{item.text}}</router-link>
      </mt-tab-item>
    </mt-tabbar>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				navItem: [
					{text:"综合分析",url:"/remain",imgs:require("../assets/images/icon-outJump.png")},
					{text:"单游戏",url:"/realPay1",imgs:require("../assets/images/icon-people.png")},
					{text:"我的",url:"/realPay2",imgs:require("../assets/images/icon-home.png")},
				]
			}
		}
	}
</script>
<style>
	.db_nav{
    height: 50px;
		line-height: 43px;
		background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
	}
  .mint-tabbar{
    height: 50px;
  }
</style>
