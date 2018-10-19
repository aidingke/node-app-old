import $http from 'axios'
import qs from 'qs'

export default {
    //登录
    getLogin(params){
        return new Promise(resolve => {
            $http.post('/edu/comm/login',params).then(data => {
                resolve(data)
            })
        })
    },
    //绑定设备号
    getBind(params){
        return new Promise(resolve => {
            $http.post('/edu/comm/device/bind',params).then(data => {
                resolve(data)
            })
        })
    },
    //获取老师班比赛管理列表
    getTeachMatchList(params){
        return new Promise(resolve => {
            $http.post('/edu/teach/match/list',qs.stringify(params)).then(data => {
                resolve(data)
            })
        })
    },
    editTeachMath(params) {
        return new Promise(resolve => {
            $http.post('/edu/teach/match/edit', params).then(data => {
                resolve(data)
            })
        })
    },
    //获取云帮手列表
    getHelperIndex(params){
        return new Promise(resolve => {
            $http.post('/Common/Helper/index',qs.stringify(params)).then(data => {
                resolve(data)
            })
        })
    },
    //获取电路图列表
    getCircuitList(params){
        return new Promise(resolve => {
            $http.post('/circuit/getList',qs.stringify(params)).then(data => {
                resolve(data)
            })
        })
    },
    //获取课件综合排序
    getCourSewareIndex(params){
        return new Promise(resolve => {
            $http.get('/Common/Helper/index',qs.stringify(params)).then(data => {
                resolve(data)
            })
        })
    },
    //学生比赛考试答题列表
    getMatchTestList(params){
        return new Promise(resolve => {
            $http.get('/edu/match/testList',qs.stringify(params)).then(data => {
                resolve(data)
            })
        })
    }
}