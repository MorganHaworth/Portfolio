import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

Vue.config.productionTip = false
library.add(faEnvelope)
library.add(faGithub)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
