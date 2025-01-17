// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueTippy from 'vue-tippy';

Vue.use(VueTippy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: 'history',
  router,
  components: { App },
  template: '<App/>'
});
