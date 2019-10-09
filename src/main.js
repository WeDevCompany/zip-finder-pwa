import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Important npm install @ionic/vue@0.0.9
import Ionic from '@ionic/vue'

import "@ionic/core/css/ionic.bundle.css";

Vue.use(Ionic);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
