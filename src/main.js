import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import breakpoint from './plugins/breakpoint'
import { loadFonts } from './plugins/webfontloader'
import main from './assets/scss/main.scss'
import Dropdown from 'primevue/dropdown';

loadFonts()

createApp(App)
  .use(router)
  .use(breakpoint)
  .use(main)
  .use(Dropdown)
  .mount('#app')
