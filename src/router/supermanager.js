import container from '../container/container.vue';
import  structure from '../pages/structure/structure.vue'
import  base from '../pages/structure/base/base.vue'
import  battery from '../pages/structure/battery/battery.vue'
import  infantry from '../pages/infantry/infantry.vue'
import  rockettroops from '../pages/infantry/rockettroops/rockettroops.vue'
import  caneltroops from '../pages/infantry/caneltroops/caneltroops.vue'
export default  [{
	path:'/structure',
	component:container,
	name:'建筑类',
	meta:{
		bread:'建筑类'
	},
	children:[{
		path:'base',
		name:'基地',
		meta:{
		
		bread:'建筑类-基地'
	},
		component:base
	},{
		path:'battery',
		name:'发电厂',
		meta:{
		
		bread:'建筑类-发电厂'
	},
		component:battery
	}]
},{
	
	path:'/infantry',
	component:container,
	name:'步兵类',
	meta:{
		bread:'步兵类'
	},
	children:[{
		path:'rockettrop',
		name:'火箭军',
		meta:{
		
			bread:'步兵类-火箭军'
	},
		component:rockettroops
	},{
		path:'caneltrop',
		name:'炮兵',
		meta:{
		
		bread:'步兵类-炮兵'
	},
		component:caneltroops
	}]

}]
