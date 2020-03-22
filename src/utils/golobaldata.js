export default {
	//提取出未含有component的路由文件，
	//此举的目的是为了让 自己不能作为自己的组件而成立
    routeStructure:{},
	getDynamicroutestructure:function(route){
		this.routeStructure = JSON.parse(JSON.stringify(route));
//		for(let j =0;j<this.routeStructure.length;j++){
//			if(this.routeStructure[j].component){
//				delete this.routeStructure[j].component
//			}
//
//		}
	}
	
  
}
