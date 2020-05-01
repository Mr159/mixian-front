<template>
    <div class="register">
        <section class="form-container">
            <div class="manage_tip">
                <span class="title">积云1903B在线后台管理系统</span>
                <!-- 注册页面表单 -->
                <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="registerForm">

                    <!-- 用户名输入框 -->
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <!-- 邮箱输入框 -->
                    <el-form-item label="邮箱" prop="email">
                        <el-input type="email" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <!-- 密码输入框 -->
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <!-- 确认密码框 -->
                    <el-form-item label="确认密码" prop="password2">
                        <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
                    </el-form-item>
                    <!-- 身份确认框 -->
                    <el-form-item label="选择身份" prop="identity">
                        <el-select v-model="registerUser.identity" placeholder="请选择身份">
                            <el-option value="管理员"></el-option>
                            <el-option value="员工"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 注册按钮 -->
                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>

    </div>
</template>

<script scoped="scoped">
export default {
    data(){
        var password2 = (rule, value, callback) => {
            if (value !== this.registerUser.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return{
            registerUser:{
                name:"",
                email:"",
                password:"",
                password2:"",
                identity:""
            },
            rules:{
                //验证用户名
                name:[
                    {
                        required : true,
                        message : "用户名不能为空",
                        trigger : "blur"
                    },
                    {
                        min :2,
                        max : 30,
                        message:"长度在2-30之间",
                        trigger :"blur"
                    }
                ],
                //验证邮箱
                email:[
                    {
                        type:"email",
                        required : true,
                        message :"邮箱格式不正确",
                        trigger :"blur"
                    }
                ],
                //验证密码
                password:[
                    {
                        required : true,
                        message : "密码不能为空",
                        trigger : "blur"
                    },
                    {
                        min : 6,
                        max : 30,
                        message : "长度6-30个字符",
                        trigger:"blur"
                    }
                ],
                //确认密码验证
                password2 : [
                    {
                    required : true,
                    message : "密码不能为空!",
                    trigger : "blur"
                    },
                    {
                    min : 6,
                    max : 30,
                    message : "长度6到30个字符",
                    trigger : "blur"
                    },
                    {
                    validator: password2,
                    trigger: 'blur'
                    }
                ],
                //身份验证
                identity : [
                    {
                    required : true,
                    message : "身份不能为空",
                    trigger : "change"
                    }
                ]
            }
        }
        
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //进行注册
                    this.$axios.post("/api/users/register",this.registerUser).then(response=>{
                        //注册成功
                        this.$message({
                            message:"注册成功",
                            type:"success"
                        });
                        this.$router.push("/login")
                        
                    }).catch(error=>{
                        console.log(error)
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
.register{
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
.registerForm{
    padding-top: 20px;
    background-color:#fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(182, 81, 81, 0.8) inset;
}
.submit_btn{
    width: 100%;
}
</style>