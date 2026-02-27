
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// SCSS
import '../src/resources/css/scss/main.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
