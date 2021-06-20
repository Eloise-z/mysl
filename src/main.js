import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from 'jquery'

// import 'popper.js'
// import 'bootstrap'
// import '@popperjs/core'
// import 'owl.carousel'

/* 导入公共css */
// import './assets/css/global.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/custom.css'
/* 非公共 */
import './assets/css/dmaku.css'

import './assets/js/jquery-3.2.1.min.js'
import './assets/js/popper.min.js'
import './assets/js/bootstrap.min.js'

import './assets/js/jquery.superslides.min.js'
import './assets/js/bootstrap-select.js'
import './assets/js/inewsticker.js'
import './assets/js/bootsnav.js'

import './assets/js/masonry.pkgd.min'
import './assets/js/images-loded.min.js'

import './assets/js/isotope.min.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/baguetteBox.min.js'
import './assets/js/jquery-ui.js'
import './assets/js/jquery.nicescroll.min.js'
import './assets/js/form-validator.min.js'
import './assets/js/contact-form-script.js'
// 有问题的custom.js
import custom from './assets/js/custom.js'

console.log('测试Jquery : main.js调用了 ' + $)

const app = createApp(App)
app.use(store).use(router).use(custom)
app.config.globalProperties.$ = $
app.config.globalProperties.jQuery = $
app.mount('#app')
