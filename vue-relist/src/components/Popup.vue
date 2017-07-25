<template>
  <div>
    <mt-popup v-model="popupVisible" position="left" :modal=true :closeOnClickModal=true>
      <div class="popupClass" v-for = "it in slots" v-on:click="isNow(it.id,$event)">
        <mt-cell  :title="it.textAlign"  :to="it.href"  is-link></mt-cell>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        popupVisible:this.popFather,
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
      }
    },
    props:['popFather'],
    methods:{
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
<style scoped>
</style>
