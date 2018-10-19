// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $axios from './axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'
import qs from 'qs'
import Header from './common/Header.vue';                   //头部
import Control from './common/Control.vue';                 //悬浮控制器
import FixedButton from './common/FixedButton.vue';         //底部按钮 
import WarningDialog from './common/WarningDialog.vue';     //警告提示弹框
import ConfirmDialog from './common/ConfirmDialog.vue';     //询问弹框
import NotInfo from './common/NotInfo.vue';                 //暂无相关信息
import Calendar from 'vue-mobile-calendar'
Vue.component('Header', Header);
Vue.component('Control', Control);
Vue.component('FixedButton', FixedButton);
Vue.component('WarningDialog', WarningDialog);
Vue.component('ConfirmDialog', ConfirmDialog);
Vue.component('NotInfo', NotInfo);
Vue.prototype.axios = axios;
Vue.prototype.$axios = $axios;
Vue.use(ElementUI);
Vue.use(Calendar)

//axios.defaults.baseURL = process.env.API_ROOT;

axios.interceptors.response.use(response => {
    /* const {code} = response.data;
    // 跳转 App
    if (code === 40100) { //如果token已过期 就跳转到登录
      if(Vue.prototype.isIos()){ //IOS
        window.location = "objc://" + "doFunc" + "/" + "relogin";
      }else{//Andriod
        android.orderlist('login');
      }
      Vue.$indicator.close();
    }
  
    
    if (code !== 20000 && code !== 20400) {//如果是成功 或 数据为空 以外的状态 就给提示
      return void MessageBox({
        message: response.data.msg,
        title:'提示',
      });
    } */
    return response.data;
  });

//拦截token判断
axios.interceptors.request.use(function (config) {
  config.headers.token = sessionStorage.getItem("accessToken")//将接口返回的token信息配置到接口请求中
  return config;

}, function (error) {

  return Promise.reject(error);
});

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
