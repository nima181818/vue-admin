<template>
  <div class="login" >
    <el-card class="box-card">
     <div slot="header" class="clearfix">
      <span style="font-size:30px;color:rgb(25,137,251)">登录</span>
 
      </div>
  <input placeholder="请输入账户" v-model="account" />
  <br/>
	<input placeholder="请输入密码" v-model="pass" />
	<br>
	<el-button class="elbutton" type="primary">注册</el-button>
		<el-button type="success" @click.native="goLogin">登录</el-button>
</el-card>
	
  </div>
</template>
<script src="./login.js">
</script>
<style lang="less">
@import url('./login.less');
</style>