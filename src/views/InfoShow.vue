<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span='8'>
                <div class="user">
                    <img :src="user.avatar" class="avatar" alt=""/>
                </div>
            </el-col>

            <el-col :span='16'>
                <div class="userinfo">
                    <div class="user-item">
                        <i class="iconfont  icon-daohanglan-05"></i>
                        <span>{{user.name}}</span>
                    </div>
                    <div class="user-item">
                        <i class="iconfont icon-leimupinleifenleileibie2"></i>
                        <span>{{user.identity}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"infoshow",
    data(){
        return{

        }
    },
    computed:{
        user(){
            return this.$store.getters.user
        }
    }
}
</script>

<style scoped>
.infoshow{
    width: 100%;
    height: 100%;
}
.user{
    text-align: center;
    position: relative;
    top: 30px;
}
.user img{
    width: 150px;
    border-radius: 50%;
}
.user span{
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
}
.userinfo{
    height: 100%;
    background-color: #eee;
}
.user-item{
    position: relative;
    top: 30px;
    padding: 26px;
    font-size: 28px;
    color: #333;
}
</style>