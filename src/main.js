import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoading from './components/pageLoading.vue';


const VueApp = createApp(App);

VueApp.use(router).mount('#app');

VueApp.component('PageLoading', PageLoading)
