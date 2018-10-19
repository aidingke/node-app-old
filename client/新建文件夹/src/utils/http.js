import axios from 'axios'
import router from '../router'
import store from '../store'



// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    store.dispatch('setLoading', true)
    if (localStorage.jwtToken)
        // config.headers.commom['Authorization'] = localStorage.jwtToken
        config.headers.Authorization = localStorage.jwtToken
    return config
}, error => {

    return Promise.reject(error)
})


// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    store.dispatch('setLoading', false)
    return response
}, error => {
    store.dispatch('setLoading', false)
    console.log(error.response.status)
    const { status } = error.response
    if (status == 401) {
        alert('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('jwtToken')
        // store.dispatch('setIsAutnenticated', false)
        store.dispatch('clearCurrentState')
        // 页面跳转
        router.push('/login')
    }
    return Promise.reject(error)
})

export default axios