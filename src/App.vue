<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import _ from "lodash"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    //页面刷新时候获取本地数据
    if(localStorage.eleToken){
      const decode = jwt_decode(localStorage.eleToken);
      this.$store.dispatch("setIsAutnenticated",!_.isEmpty(decode));
      this.$store.dispatch("setUser",decode)
    }
  }
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
