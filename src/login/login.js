import api from '../api/api.js'
import supermanage from '../router/supermanager.js';
import store from '@/store/index.js'
export default{
	
	data(){
		return {
			pass:'',
			account:''
		}
		
	},
	beforeRouteEnter(to,from,next){
		//这里注意不能写死TODO
		if(store.state.haslogin){
			next({path:'/structure/base'})
		}else{
			next()
		}
	},
	beforeRouteLeave(to,from,next){
		if(!this.$store.state.haslogin){
			next(false)
		}else{
			next()
		}
	},
	methods:{
		goLogin(){
			let param = {
				pass:this.pass,
				account:this.account
			}
			api.apigoLogin(param).then((res)=>{
				console.log(this.$router)
				this.$store.commit('setLoginstate',true);
				localStorage.setItem('token',res.token);
				this.$store.commit('setRole',res.role);
				this.$router.addRoutes(supermanage);
				
				this.$router.replace({
					path:'/structure/base'
				})
			}).catch(e=>{
				console.log(e)
			})
		}
		
	}
	
}