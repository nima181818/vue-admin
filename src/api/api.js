export default{
	//登录
	apigoLogin(param){
		return new Promise((res,rej)=>{
			setTimeout(()=>{
				if(param.account=='123'&&param.pass=='123'){
			res({
				token:'1234567890',
				username:'王尼玛',
				role:'supermanager',
				mobile:'15196388821',
			})
		           }else{
					   
				   rej('登录失败')
				   }
				
			})
			
		})
		
	}
}