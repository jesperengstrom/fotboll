import Vue from 'vue';
import Router from 'vue-router';
import Table from '@/components/Bets.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bets',
      component: Table
    }
  ]
});
