import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getter'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const state = { // 需要维护的状态
    isAutnenticated: false,  // 是否认证
    user: {},   // 存储用户登录信息
    profile: {}, // 存储用户个人信息
    loading: false,
    profiles: [] // 存储开发者信息
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})