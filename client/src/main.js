// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/http'
import store from './store'
import "./utils/pubFun.js"
import 'jquery'

// 引入百度编辑器
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios

Vue.config.productionTip = false

// Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
