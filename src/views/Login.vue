<template>
    <div class="login">
         <section class="form-container">
            <div class="manage_tip">
                <span class="title">积云1903B在线后台管理系统</span>
                <!-- 注册页面表单 -->
                <el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
                    <!-- 邮箱输入框 -->
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <!-- 密码输入框 -->
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <!-- 注册按钮 -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                    <div class="tiparea">
                        <p>还没有账号？ 现在<router-link to="/register">注册</router-link></p>
                    </div>
                </el-form>
                
            </div>
        </section>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import _ from "lodash"
export default {
    name:"login",
    data(){
        return{
            loginUser:{
                email:"",
                password:""
            },
            rules:{
                email:[
                    {
                        required:true,
                        message:"邮箱不能为空",
                        trigger:"blur"
                    },
                    {
                        type:"email",
                        message:"邮箱格式不正确",
                        trigger:"blur"
                    }
                ],
                password:[
                    {
                        required:true,
                        message:"密码不能为空",
                        trigger:"blur"
                    },
                    {
                        min:6,
                        max:30,
                        message:"长度6-30个字符"
                    }
                ]
            }
            
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$axios.post("/api/users/login",this.loginUser).then(res=>{
                        console.log(res)
                        const token = res.data.token;
                        localStorage.setItem("eleToken",token);
                        //解析token
                        const decode = jwt_decode(token);
                        console.log(decode)
                        //把token数据保存到vuex
                        this.$store.dispatch("setIsAutnenticated",!_.isEmpty(decode));
                        this.$store.dispatch("setUser",decode);
                        this.$router.push("/Index")
                    }).catch(error=>{
                        console.log(error);
                        alert("密码错误")
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../assets/img/bg.jpg") no-repeat center center;
    background-size: 100% 100%;
}
.form-container{
    width: 350px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 34%;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
}
.form-container .manage_tip .title{
    font-family: "Microsoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color: #fff;
    display: inline-block;
    margin-bottom: 20px;
}
.loginForm{
    padding-top: 20px;
    background-color:#fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(182, 81, 81, 0.8) inset;
}
.tiparea{
    text-align: right;
}
</style>