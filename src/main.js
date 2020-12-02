import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import './assets/css/bootstrap.css';
import './assets/css/styles.css';
import './assets/fonts/css/all.css';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')