import App from './app/App.vue';
import router from './app/router';

new Vue({
  el: '#root-vue',
  router,
  template: '<App/>',
  components: { App },
});
