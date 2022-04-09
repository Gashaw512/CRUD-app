require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router/router.js'
// import from '../css/app.css';

// const app=createApp({});
// app.mount('#app');
createApp(App).use(router).mount('#app')
