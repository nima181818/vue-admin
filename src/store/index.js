import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let token = localStorage.getItem('token')
let store = new Vuex.Store({
	 state:{
		 //是否登录
		 haslogin:localStorage.getItem('token')?true:false,
		 role:'supermanager'
		 
	 },
	 mutations:{
		 
		 setLoginstate(state,haslogin){
			 console.log(haslogin,"666")
			 state.haslogin = haslogin
		 },
		 setRole(state,role){
			 state.role = role
			 
		 }
	 }
})
export default store