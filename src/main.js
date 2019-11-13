// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/tools/permission'
// element
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import './assets/css/element-variables.scss'
//axios
import axios from 'axios'
//storage
import storage from "./tools/storage";
//scss
import './assets/css/style.scss'
//icon
import './assets/icon/iconfont.css'
//console
import Console from "./tools/console"
// 引入音频文件
import audio from './assets/music.mp3'
//cookie
import cookie from './tools/cookie'

Vue.prototype.playAudio = () => {
  let buttonAudio = document.getElementById('eventAudio');
  buttonAudio.setAttribute('src', audio)
  buttonAudio.play()
}

Vue.prototype.Storage = storage;
Vue.prototype.$axios = axios
//所有图片&文件得baseurl
Vue.prototype.$imgUrl = "https://fuss10.elemecdn.com"
//全局引入打印函数
Vue.prototype.$Console = Console
//全局引入cookie
Vue.prototype.$Cookie = cookie


// axios.defaults.baseURL = '';
axios.defaults.withCredentials = true
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
