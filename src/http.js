import axios from "axios"
import router from "./router/index"
//引入element-ui的loading组件
import { Loading } from 'element-ui';
import {Message} from 'element-ui';
let loading=null;
//创建loading动画
function startLoading(){
    loading = Loading.service({
        lock:true,
        text:"加载中...",
        background:"rgba(0,0,0,0.7)"
    })
}
//结束loading动画
function endLoading(){
    loading.close();
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //加载动画
    startLoading();
    //每次发送请求的时候,把token通过头信息发送给后台
    console.log(config)
    config.headers.Authorization = localStorage.eleToken;
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    //结束动画
    endLoading();
    // 对响应数据做点什么
    return response;
  }, function (error) {
    endLoading();
    //如果状态码为 401; 表示token过期了
    const {status} = error.response
    if(status == 401){
      Message.error('token无效,重新登录')
      localStorage.removeItem('eleToken')
      router.push('/login')
    }
    // Message.error("响应失败")
    // 对响应错误做点什么
    // return Promise.reject(error);
  });
export default axios