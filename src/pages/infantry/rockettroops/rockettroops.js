export default{
	data(){
		return{
			activeIndex:'',
			childlist:[],
			routerchange:true
		}
	},
	mounted(){
		this.getSonpage(this.routelist);
		this.activeIndex = this.childlist[0].path
	},
	
	methods:{
		getSonpage(list){
			
			for(let j=0;j<list.length;j++){
				if(list[j].name=='火箭军'){
					this.childlist = list[j].children
					return 
				}else{
					if(list[j].children){
						this.getSonpage(list[j].children)
					}
				}
			}
		}
	}
}
