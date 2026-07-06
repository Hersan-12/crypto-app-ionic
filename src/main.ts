import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

import './theme/variables.css'

const app = createApp(App)

.use(IonicVue)
.use(VueAxios, axios)
.use(router)

router.isReady().then(() => {
  app.mount('#app')
})