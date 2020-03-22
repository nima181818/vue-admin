<template>
	<div class="rockettroops">
		
		<el-menu background-color="rgb(42,62,80)" router text-color="white" active-text-color="rgb(255,208,75)" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
   <template v-for="(item,index) in childlist">
 <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
  
  
  </template>
</el-menu>
		<router-view />
	</div>
</template>

<script src="./rockettroops.js">
</script>

<style lang="less">
	@import url('./rockettroops.less');
</style>