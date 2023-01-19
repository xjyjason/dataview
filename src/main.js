import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import decoration8 from '@jiaminghi/data-view'
import axios from 'axios'
Vue.use(decoration8)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
