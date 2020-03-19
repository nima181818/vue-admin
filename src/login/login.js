import api from '../api/api.js'
import supermanage from '../router/supermanager.js';
export default{
	
	data(){
		return {
			pass:'',
			account:''
		}
		
	},
	methods:{
		goLogin(){
			let param = {
				pass:this.pass,
				account:this.account
			}
			api.apigoLogin(param).then((res)=>{
				this.$store.commit('setLoginstate',true);
				localStorage.setItem('token',res.token);
				this.$store.commit('setRole',res.role);
				this.$router.addRoutes(supermanage);
				this.$router.push({
					path:'/structure'
				})
			}).catch(e=>{
				console.log(e)
			})
		}
		
	}
	
}