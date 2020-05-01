<template>
    <div class="head-nav">
        <el-row>
            <el-col :span="6" class="logo-container">
                <img src="../assets/img/bm.jpg" alt="" class="logo">
                <span class="title">个人经济收入后台管理系统</span>
            </el-col>
            <el-col :span="6" class="user">
                <div class="userinfo">
                    <img :src="user.avatar" class="avatar" alt="">
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{user.name}}</p>
                    </div>
                    <span class="username">
                        <el-dropdown trigger="click" @command="setDialogInfo">
                            <span class="el-dropdown-link">
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" >
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"headnav",
    data(){
        return{

        }
    },
    computed:{
        user(){
            return this.$store.getters.user;
        }
    },
    methods:{
        setDialogInfo(cmdItem){
            if(!cmdItem){
                console.log("test");
                this.$message("菜单选项缺少command属性");
                return;
            }
            switch(cmdItem){
                case "info": this.showInfo();
                    break;
                case "logout": this.logout();
                    break;
            }
        },
        //个人中心
        showInfo(){
            this.$router.push({
                name:"infoshow"
            })
        },
        logout(){
            //清楚token
            localStorage.removeItem("eleToken");
            //让vuex中的状态为false，user为空
            this.$store.dispatch("clearCurrentState");
            //页面跳转
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.head-nav{
    width: 100%;
    height: 60px;
    padding: 5px;
    min-width: 600px;
    background: #324057;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;
}
.logo-container{
    line-height: 60px;
    min-width: 400px;
}
.logo{
    width: 50px;
    height: 50px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
    border-radius: 50%;
}
.title{
    vertical-align: middle;
    font-size: 22px;
    letter-spacing: 3px;
    color: #fff;
}
.user{
    text-align: right;
    float: right;
    padding-right: 10px;
    line-height: 60px;

}
.avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}
.welcome{
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 0 5px;
}
.name{
    line-height: 20px;
    text-align: center;
    font-size: 14px;
}
.comename{
    font-size: 12px;
}
.avatarname{
    color: #409eff;
    font-weight: bolder;
}
.username{
    cursor: pointer;
    margin-right: 5px;
}
.el-dropdown{
    color: #fff;
}

</style>