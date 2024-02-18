import './assets/all.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VueAxios, axios);

app.mount('#app');
