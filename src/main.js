import Vue from 'vue'
import App from '@/App.vue'
import router from "./router";
import store from "./store";
import toast from 'components/common/toast';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false;
FastClick.attach(document.body);
// 添加事件总线对象
Vue.prototype.$bus = new Vue();
// 将Vue.set方法添加到原型上 方便以后通过this.$set调用
Vue.prototype.$set = Vue.set;

Vue.use(toast);

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/placeHolder.png')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
