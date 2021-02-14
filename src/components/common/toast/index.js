
import Toast from './Toast.vue'

Toast.install = function (Vue){
  // 创建组件构造器
  let toastConc = Vue.extend(Toast);
  // 通过组件构造器创建Vue组件对象
  let toast = new toastConc();
  // 填充Vue组件对象的$el属性
  toast.$mount(document.createElement('div'));
  // 将html添加到body上面
  document.body.appendChild(toast.$el);
  // 赋值给原型上的属性 这样的话每个组件都能访问到
  Vue.prototype.$toast = toast;
}

export default Toast;