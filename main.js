import Vue from 'vue'
// import UniUI from 'uni-ui'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';

App.mpType = 'app'

// Vue.use(UniUI)

const app = new Vue({
    ...App
})
app.$mount()