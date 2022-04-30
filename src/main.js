import Vue from 'vue'
import App from './App.vue'
// main.js
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


