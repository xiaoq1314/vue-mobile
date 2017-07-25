// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import axios from 'axios'
import VueResource from 'vue-resource';
import router from './router'
import './assets/css/fonts.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueTouch from 'vue-touch'
/*import vueg from 'vueg'

Vue.use(vueg, router,{
  tabs:[{
    name:'Remain'
  },{
    name:'realPay1'
  },{
    name:'realPay2'
  }]
})*/
Vue.use(VueTouch, { name: 'v-touch' })

//Vue.prototype.$http = axios;
Vue.config.productionTip = true

Vue.use(MintUI)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
