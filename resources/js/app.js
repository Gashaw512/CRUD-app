require('./bootstrap');
import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router/router.js'
// import from '../css/app.css';

// const app=createApp({});
// app.mount('#app');


import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
window.Swal=Swal;
const toast=Swal.mixin({
toast:true,
position:'top-end',
showConfirmButton:false,
timer:3000,
timeProgressBar:true,
});
window.toast=toast;

createApp(App).use(router).mount('#app')
