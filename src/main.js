// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuelidate from "vuelidate"

Vue.use(ElementUI);

Vue.use(Vuelidate);

Vue.config.productionTip = false


window.onerror = function () {
  console.log("error", arguments);
  return false;
}

init();

function init() {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
  })
}
