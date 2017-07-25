<template>
  <div class="name">
    <mt-header  :title="msg"></mt-header>
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
  }
</script>
<style scoped>
</style>
