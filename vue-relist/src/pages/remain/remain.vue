<style scoped>
  @import '../../assets/css/remain.css';
  .mint-header{
    height: 50px;
  }
  .mint-button--small{
    height: 25px;
    line-height: 25px;
  }
  .mint-popup{
    margin-top:50px ;
    width: 75%;
    height: 100%;
  }
  .v-modal{
    margin-top:50px;
  }
</style>
<template>
  <div class="remainFather">
    <mt-header fixed title="实时留存">
      <mt-button icon="more" slot="left" @click.native="handleClick"></mt-button>
      <mt-button icon="" slot="right" @click.native="handleClick1">筛选</mt-button>
    </mt-header>
    <ul class="remain">
      <li v-for="item in gameArr">
        <div class="remainChild">
          <span>{{item.rank}}.{{item.game}}</span>
          <span><mt-button size="small" plain>{{item.xqName}}</mt-button></span>
        </div>
        <div class="remainChild1">
          <span>新用户:{{item.remain}}%</span>
          <span><mt-progress :value="item.remain" :bar-height="13"><div slot="start"></div></mt-progress></span>
          <span>{{item.remainUser}}</span>
        </div>
        <div class="remainChild1">
          <span>老用户:{{item.loginRemain}}%</span>
          <span><mt-progress :value="item.loginRemain" :bar-height="13"><div slot="start"></div></mt-progress></span>
          <span>{{item.LRemainUser}}</span>
        </div>
      </li>
    </ul>
    <!--这里的内容是遮罩层的内容 -->
    <div>
      <mt-popup v-model="popupVisible" position="left" :modal=true :closeOnClickModal=true>
        <div class="popupClass" v-for = "it in slots" v-on:click="isNow(it.id,$event)">
          <mt-cell  :title="it.textAlign"  :to="it.href"  is-link></mt-cell>
        </div>
      </mt-popup>
    </div>
    <!--这里的内容是右边的遮罩层的内容 -->
    <div>
      <mt-popup v-model="popupVisible1" position="right" :modal=true :closeOnClickModal=true>
        <div class="popupClass">
          这边就是一个测试的
        </div>
      </mt-popup>
    </div>
    <Nav-bar></Nav-bar>
  </div>
</template>
<script>
  import HeaderBar from '@/components/Header'
  import NavBar from '@/components/Nav'
  export default {
    components: {  HeaderBar ,NavBar},
    data () {
      return {
        items: [],
        popupVisible:false,
        popupVisible1:false,
        slots: [
          {
            id: 1,
            textAlign: '实时留存',
            href:'/remain',
            activeId:1
          }, {
            id: 2,
            textAlign: '实时充值',
            href:'/realPay',
            activeId:2
          }, {
            id: 3,
            textAlign: '实时在线',
            href:'/realPay',
            activeId:3
          }, {
            id: 4,
            textAlign: '聊天分析(按日期)',
            href:'/realPay',
            activeId:4
          }
        ],
        gameArr:[{
            rank:1,
            game:"英雄枪战",
            xqName:'详情',
            xqUrl:"",
            remain:26.12,
            loginRemain:35.12,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
        },
          {
            rank:2,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:26.12,
            loginRemain:35.12,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:3,
            game:"虫虫大作战",
            xqName:'详情',
            xqUrl:"",
            remain:70,
            loginRemain:66,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:4,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:45,
            loginRemain:50,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:5,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:70,
            loginRemain:40,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:6,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:26.12,
            loginRemain:35.12,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:7,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:26.12,
            loginRemain:70,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          },
          {
            rank:8,
            game:"翻滚球球",
            xqName:'详情',
            xqUrl:"",
            remain:26.12,
            loginRemain:80,
            remainUser:"500/3665",
            LRemainUser:"6908/36987",
          }
          ],
        height:'',
      }
    },
    methods: {
      handleClick: function() {
        this.popupVisible = !this.popupVisible;
      },
      handleClick1: function() {
        this.popupVisible1 = !this.popupVisible1;
      },
      isNow: function(id){
        for(let it in this.slots ){
            if(this.slots[it].activeId == id){
              this.popupVisible = false;
            }
        }
      }
    }
  }
</script>
