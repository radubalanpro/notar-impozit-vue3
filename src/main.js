const { createApp } = require('vue');
//import Vue from 'vue';
//import { createApp } from 'vue';
import App from './App.vue';
//import createRouter from './router';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.js';

// createApp(App).mount('#app');
//createApp(App).use(router).mount('#app');
const app = createApp(App);
//app.use(createRouter());
app.use(router);
app.mount('#app');

//import 'bootstrap/dist/js/bootstrap.js';
