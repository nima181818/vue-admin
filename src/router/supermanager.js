import container from '../container/container.vue';
import  structure from '../pages/structure/structure.vue'
import  base from '../pages/structure/base/base.vue'
import  battery from '../pages/structure/battery/battery.vue'
import  infantry from '../pages/infantry/infantry.vue'
import  rockettroops from '../pages/infantry/rockettroops/rockettroops.vue'
export default  [{
	path:'/structure',
	component:container,
	meta:{
		name:'建筑类'
	},
	children:[{
		path:'/base',
		meta:{
		name:'基地'
	},
		component:base
	},{
		path:'/battery',
		meta:{
		name:'发电厂'
	},
		component:battery
	}]
},{
	
	path:'/infantry',
	component:container,
	meta:{
		name:'建筑类'
	},
	children:[{
		path:'/base',
		meta:{
		name:'基地'
	},
		component:base
	},{
		path:'/battery',
		meta:{
		name:'发电厂'
	},
		component:battery
	}]

}]
