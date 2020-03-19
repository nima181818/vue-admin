<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		
  	}
  },
  created(){
  	if(localStorage.getItem('token')){
  		this.$store.commit('setLoginstate',true)
  	}
  }
}
</script>

<style>
	*{
		margin:0;
		padding:0;
		
	}
  body{
  	height:100vh;
  }
#app {
 height:100%
}
</style>
