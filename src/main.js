import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
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
  .use(main)
  .use(Dropdown)
  // .use(BootstrapVue)
  // .use(IconsPlugin)
  .mount('#app')
