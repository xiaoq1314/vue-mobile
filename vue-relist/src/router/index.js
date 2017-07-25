import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/pages/home/home.vue'
import Remain from '@/pages/remain/remain.vue'
import RouterAll from '@/pages/realPay/routerAll.vue'
import RealPay from '@/pages/realPay/realPay.vue'
import RealPay1 from '@/pages/realPay/realPay1.vue'
import RealPay2 from '@/pages/realPay/realPay2.vue'
//import RealOnline from '@/pages/online/realOnline.vue'
//import ChatWith from '@/pages/chat/chatWith.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    /*{
      path: '/remain',
      name: 'Remain',
      component: Remain
    },*/
    {
      path: '/routerAll',
      name: 'RouterAll',
      component: RouterAll,
      children: [{
        name:'default',
        path:'/routerAll',
        component:Remain
      },{
        name:'Remain',
        path: '/remain',
        component: Remain
      }, {
        name:'RealPay1',
        path: '/realPay1',
        component: RealPay1
      }, {
        name:'RealPay2',
        path: '/realPay2',
        component: RealPay2
      }]
    },
    /*{
      path: '/realPay1',
      name: 'RealPay1',
      component: RealPay1
    },{
      path: '/realPay2',
      name: 'RealPay2',
      component: RealPay2
    },*/
   /* {
      path: '/realOnline',
      name: 'RealOnline',
      component: RealOnline
    },
    {
      path: '/chatWith',
      name: 'ChatWith',
      component: ChatWith
    }*/
  ]
})
