import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import CreateProfile from '@/components/CreateProfile'
import EditProfile from '@/components/EditProfile'
import AddExperience from '@/components/AddExperience'
import AddEducation from '@/components/AddEducation'
import Profiles from '@/components/Profiles'
import Profile from '@/components/Profile/Profile'
import Posts from '@/components/Posts/Posts'
import Post from '@/components/Posts/Post'
import IdeasAdd from '@/components/Ideas/IdeasAdd'
import IdeasList from '@/components/Ideas/IdeasList'
import IdeasDetail from '@/components/Ideas/IdeasDetail'
import IdeasEdit from '@/components/Ideas/IdeasEdit'
import Setavator from '@/components/Setavator'

Vue.use(Router)

const route = new Router({
    mode: "history",
    linkActiveClass: 'active',
    routes: [
        // { path: '*', redirect: '/' },
        { path: '/', name: 'landing', component: Landing },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/create-profile', name: 'create-profile', component: CreateProfile },
        { path: '/edit-profile', name: 'edit-profile', component: EditProfile },
        { path: '/add-experience', name: 'add-experience', component: AddExperience },
        { path: '/add-education', name: 'add-education', component: AddEducation },
        { path: '/profiles', name: 'profiles', component: Profiles },
        { path: '/profile/:handle', name: 'profile', component: Profile },
        { path: '/feed', name: 'feed', component: Posts },
        { path: '/post/:id', name: 'post', component: Post },
        { path: '/setavator', name: 'setavator', component: Setavator },
        { path: '/artadd', name: 'ideasadd', component: IdeasAdd },
        { path: '/artlist', name: 'artlist', component: IdeasList },
        { path: '/artdetail', name: 'artdetail', component: IdeasDetail },
        { path: '/artedit', name: 'artedit', component: IdeasEdit },
        
    ],
    
})

// 添加路由守卫
route.beforeEach((to, from, next) => {
    const isLogin = localStorage.jwtToken ? true : false;
    // console.log(isLogin)
    if (to.path == "/login" || to.path == "/register" || to.path == '/') {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
})

export default route