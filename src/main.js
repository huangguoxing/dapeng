import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import '../utils/rem'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
