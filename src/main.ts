import Vue from 'vue'
import App from './views/App22/index.vue'
import store from './store'

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')

