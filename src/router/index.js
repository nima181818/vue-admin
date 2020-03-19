import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import container from '../container/container.vue';
import Login from '@/login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:{
		  name:'login'
		  
	  }
    },
	{
		 path: '/login',
		 name:'login',
		 meta:{
			_name:'登录' 
		 },
		 component:Login
      
      
	}
  ]
})
