require('./bootstrap');

window.Vue = require('vue');

// Vue.component('user-dashboard', require('./components/UserDashboard.vue').default);
Vue.component('user-dashboard', require('./components/LifeCycle.vue').default);

const app = new Vue({
    el: '#app'
});