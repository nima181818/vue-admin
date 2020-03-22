<template>
	<div class="container">
		
		<el-container direction="vertical">
			<el-header height="50px">
				<el-button style="margin-left:90%" type="info" @click.native="outLogin" round>退出登录</el-button>
			</el-header>
			<el-container >
				<el-aside width="200px" height="600px">
					 <el-menu router  :default-active="$route.path">
					 	<template>
					 		 <el-submenu v-for="(item,index) in routelist" :index="item.path">
                          <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                         <template>
                           <el-menu-item-group v-for="(childitem,childindex) in item.children">
                               <el-menu-item :style="{color:$route.path.indexOf(item.path+'/'+childitem.path)!=-1?'rgb(64,158,255)':'#191919'}" ref="elmenus" :index="(item.path+'/'+childitem.path)">{{childitem.name}}</el-menu-item>
                               
                           </el-menu-item-group>
                          </template>
                        </el-submenu>
                      
					 	</template>
                      
                     </el-menu>
				</el-aside>
				<el-container>
					<el-main>
						<el-breadcrumb separator-class="el-icon-arrow-right">
							<template v-for="(item,index) in breadlist">
                         <el-breadcrumb-item :to="{ name: item}">{{item}}</el-breadcrumb-item>
                    	</template>
                        </el-breadcrumb>
						<router-view />
					</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
		
	</div>
</template>

<script>

	import globalfunction from '@/utils/golobaldata.js'
	export default {
	data() {
		return {
           
             breadlist:[],
		}
	},
	created(){
		
	},
	watch:{
		$route:function(cv,ov){
			
			this.handleBread();
		}
	},
	beforeCreated(){
		
	},
	
	mounted(){
		setTimeout(()=>{
				
	
		this.handleBread();
		},100)
	
	},
	
	methods: {
	
      handleBread(){
      	 let path = this.$route.meta.bread;
      	 try{
      	 	path = path.split('-');
      	     this.breadlist = path;
      	   
      	 }catch(e){
      	 	console.log('path is not structured');
      	 }
      	     
      },
      outLogin(){
      	localStorage.removeItem('token');
      	this.$store.commit('setLoginstate',false);
      	setTimeout(()=>{
      			this.$router.push('/login');
      	})
      
      }
	}
}
</script>
<style >
	.container {
	width: 100%;
	height: 100%;
	
}
.el-submenu__title{
		
	}
.container>section {
	height: 100%;
}

.el-header,
.el-footer {
	background-color: rgb(42,62,80);
	color: white;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

body>.el-container {
	margin-bottom: 40px;
	width: 100%;
	height: 100%
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}</style>