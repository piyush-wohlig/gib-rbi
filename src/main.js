import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import breakpoint from './plugins/breakpoint'
import 'vuetify/dist/vuetify.min.css';
import { loadFonts } from './plugins/webfontloader'
import main from './assets/scss/main.scss'
import Dropdown from 'primevue/dropdown';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(breakpoint)
  .use(main)
  .use(Dropdown)
  // .use(BootstrapVue)
  // .use(IconsPlugin)
  .mount('#app')
