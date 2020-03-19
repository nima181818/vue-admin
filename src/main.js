// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js';
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.prototype.$store = store;
router.beforeEach((to,from,next)=>{
	if(to.path!='/login'){
		if(!store.state.haslogin){
			next('/login')
		}
	}
	
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
