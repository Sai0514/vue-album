import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload, Toast, Dialog } from 'vant';
import './common.scss';
import nodata from '@/utils/nodata'




Vue.use(nodata)
Vue.use(Vant);
Vue.use(Lazyload);
Vue.prototype.$message = Toast;
Vue.prototype.$confirm = Dialog;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
