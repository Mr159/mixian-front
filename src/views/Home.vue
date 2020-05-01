<template>
    <div class="home">
        <div class="container">
            <h1 class="title">金钱就是生命的源泉</h1>
            <p class="load">专注于学习,用心做计划,用心做服务</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
    background: url(../assets/img/00.jpg) repeat;
    background-size: 100% 100%;

}
.container{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 100px;
    background-color: rgba(0,0,0,0.7);
    text-align: center;
    color: white;
}
.title{
    font-size: 30px;
}
.load{
    margin-top: 50px;
    font-size: 22px;
}
</style>