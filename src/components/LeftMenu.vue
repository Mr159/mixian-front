<template>
        <el-row class="menu-page">
            <el-col :span="12">
                <el-menu
                    mode="vertical"
                    background-color="#324057"
                    text-color="#fff"
                    active-text-color="#409eff"
                    class="el-menu-vertical-demo">
                    <!-- 首页 -->
                    <router-link to="/index/home">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    </router-link>
                    <!-- 资金管理 -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>资金管理</span>
                        </template>
                        <router-link to="/index/foundlist">
                        <el-menu-item-group>
                        <el-menu-item index="1-1">资金流水</el-menu-item>
                        </el-menu-item-group>
                        </router-link>
                    </el-submenu>
                    <!-- 信息管理 -->
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>信息管理</span>
                        </template>
                        <router-link to="/index/infoshow">
                        <el-menu-item-group>
                            <el-menu-item index="1-1">个人信息</el-menu-item>
                        </el-menu-item-group>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
</template>

<script>
export default {
    name:"leftmenu",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.menu-page{
    position: fixed;
    top: 71px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
}
.el-menu{
    border: none;
}
.fa-margin{
    margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu-collapse){
    width: 180px;
    min-height: 400px;
}
.el-menu-vertical-demo{
    width: 35px;
}
.el-submenu .el-menu-item{
    min-width: 180px;
}
a{
    text-decoration: none;
}
</style>