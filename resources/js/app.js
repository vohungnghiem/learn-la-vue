require('./bootstrap');

window.Vue = require('vue');

Vue.component('MyComponent',require('./components/MyComponent.vue').default)

const app = new Vue({
    el: '#app'
})