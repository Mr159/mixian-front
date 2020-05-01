import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const types={
    SET_IS_AUTNENTIATED:'SET_IS_AUTNENTIATED',
    SET_USER:'SET_USER'
}
const store  =new Vuex.Store({
    state:{
        isAutnenticated:false,  //false存储的是token的状态，有效true 无效false
        user:{}  //存储用户信息
    },
    getters:{
        isAutnenticated(state){
            return state.isAutnenticated;
        },
        user(state){
            return state.user;
        }
    },
    mutations:{
        [types.SET_IS_AUTNENTIATED](state,isAutnenticated){
            if(isAutnenticated){
                state.isAutnenticated = isAutnenticated
            }else{
                state.isAutnenticated=false;
            }
            
        },
        [types.SET_USER](state,user){
            if(user){
                state.user = user
            }else{
                state.user={};
            }
            
        }
    },
    actions:{
        setIsAutnenticated({commit},val){
            commit(types.SET_IS_AUTNENTIATED,val)
        },
        setUser({commit},val){
            commit(types.SET_USER,val)
        },
        clearCurrentState:({commit})=>{
            commit(types.SET_IS_AUTNENTIATED,false);
            commit(types.SET_USER,null)
        }
    }
})
export default store;