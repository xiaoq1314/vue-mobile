<style>
  .ivu-table-cell{
    padding:0px 3px;
  }
  td.ivu-table-expanded-cell {
    padding: 20px 50px;
    background: #f8f8f9;
  }
</style>
<template>
  <div class="remainFather">
    <Header-bar msgFromFather = '实时留存'></Header-bar>
    <Table :columns="columns10" :data="data9"  size="small" :height="height" @on-row-click="change"></Table>
    <Nav-bar></Nav-bar>
  </div>
</template>
<script>
  import HeaderBar from '@/components/Header'
  import expandRow from '@/components/Table.vue';
  import NavBar from '@/components/Nav'
  export default {
    name: 'remain',
    components: { expandRow,  HeaderBar ,NavBar},
    data () {
      return {
        items: [],
        height:'',
        columns10: [
          {
            type: 'expand',
            width: 40,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '游戏名',
            key: 'key'
          },
          {
            title: '新用户留存',
            key: 'remainValue'
          },
          {
            title: '老用户留存',
            key: 'lremainValue'
          }
        ],
        data9: [
        ]
      }
    },
    created: function () {
      this.HelloAxios();
    },
    methods: {
      change(status){
        console.log(status)
        status["_expanded"] = true;
        console.log(status)
        return status;
      },
      HelloAxios(){
        this.$http.jsonp('http://t.4399data.com/vip/?r=realRemain/hasMobileRemain', {},{ emulateJSON: true}) .then(function (res){
          let jsonConten=JSON.parse(res.bodyText);
          for(let i in jsonConten){
            let gameName = i;
            let remain =jsonConten[i]["Remain"]["currentValue_order"]+"%";
            let loginRemain =jsonConten[i]["LoginRemain"]["currentValue_order"]+"%";
            let remainUser = jsonConten[i]["Remain"]["currentUser"]+"--"+jsonConten[i]["Remain"]["currentTotalUser"];
            let loginRemainUser = jsonConten[i]["LoginRemain"]["currentUser"]+"--"+jsonConten[i]["LoginRemain"]["currentTotalUser"];
            let game = jsonConten[i]["Remain"]["gameName"];
            // this.items.push({'kay':gameName,'value':parts});
            this.data9.push({'gameName':game,'key':gameName,'remainValue':remain,'lremainValue':loginRemain,'remainUser':remainUser,'loginRemainUser':loginRemainUser,});
          }
          this.data9[0]["_expanded"] = true;
          this.height="550";
        }, function (res) {
          console.log(res)
        });
        /* this.$http.jsonp('http://q.4399data.com/vip/?r=realRemain/xiaoqq', {},
         {
         headers: {},
         emulateJSON: true }).then((response) => {
         console.log(response);
         this.movie = response.data;

         });*/
      }
    }
  }
</script>
