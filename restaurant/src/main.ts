import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common["Authorization"] =
	"Bearer " + localStorage.getItem("token");

new Vue({
  router,
  vuetify,
  components: {App},
  render: h => h(App)
}).$mount('#app')