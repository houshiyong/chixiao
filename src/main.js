import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'

import '@/css/frozen.css'

import '@/styles/index.less'

// import { FormatUtil } from './utils/FormatUtil'
// import { MediumUtil } from './utils/MediumUtil'

// import POST, { processResult } from './utils/HttpUtil'

// Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Lazyload)

// Vue.prototype.FormatUtil = FormatUtil
// Vue.prototype.MediumUtil = MediumUtil
Vue.prototype.axios = axios
// Vue.prototype.POST = POST

// Vue.prototype.processResult = processResult
// window.FormatUtil = FormatUtil

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
