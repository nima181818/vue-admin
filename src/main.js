// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js';
import supermanage from '@/router/supermanager.js';
import globalfunction from '@/utils/golobaldata.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.prototype.$store = store;
//router.beforeEach((to,from,next)=>{
//	console.log('从'+from.path+'到'+to.path)
//	  if(from.path!='/'){
//	  	
//	  	if(store.state.haslogin){
//	  	console.log(1)
//	  	
//	  	   next(); 
//	  	   
//	  	}
//	  	 
//	  }else{
//	  	 next(); 
//	  }
//
//
//})
//注意 supermanage定义为当前用户组的动态路由
Vue.mixin({
	mounted(){
		globalfunction.getDynamicroutestructure(supermanage);
	}
})
new Vue({
  el: '#app',
  router,
  components: { App },
  created(){
  	
  	console.log(this);
  	//token已经存在 表明已经登录，开始根据当前的url加载动态路由
  	if(this.$store.state.haslogin&&this.$store.state.role=='supermanager'){
  		//读取当前界面的路由并跳转；
  		debugger
  		let a = this.$router.addRoutes(supermanage);
  		
  		this.$forceUpdate();
  		this.$router.push(this.$route.path).catch(e=>{
  		///
  		})
  		
  		console.log(globalfunction.routeStructure,"9999")
  	}
  },
  template: '<App/>'
})
