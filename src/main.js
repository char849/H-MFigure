/* eslint-disable import/no-extraneous-dependencies */
import './assets/all.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Loading from 'vue-loading-overlay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'vue-loading-overlay/dist/css/index.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import { date, currency } from './methods/filters';
/**
 * 這裡是將所有 vee-validate 的規則載入
 */
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
/**
 * 這裡是設定 vee-validate 的語系
 */
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
AOS.init({
  duration: 1000,
  once: true,
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.config.globalProperties.$filters = {
  date,
  currency,
};
app.component('VeeForm', Form);
app.component('VeeField', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('VueLoading', Loading);
app.mount('#app');
