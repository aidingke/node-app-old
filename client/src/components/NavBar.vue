<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
    <div class="container">
      <!-- <a class="navbar-brand" href="landing.html">全栈在线</a> -->
      <router-link to='/' class="navbar-brand">全栈在线</router-link>

      <template v-if="isLogin">
        <span style="position: absolute;left: 45%;top: 0.6rem;">
          <!-- <a style="color:#fff;" :href='"/setavator?userId="+user.id' class="nav-link"> -->
          <router-link style="color:#fff;" class="nav-link" v-bind:to="'/setavator?userId='+user.id">
            <img :src="'./static/avatar/'+user.avatar" style="width:2rem;"/>
            {{user.name}}
          </router-link>
        </span>
      </template>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mobile-nav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="profiles.html"> 全栈在线
            </a> -->
            <router-link to='/profiles' class="nav-link">开发者</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <template v-if="isLogin">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink">【{{user.name}}】分享的课程</a>
              <div class="dropdown-menu">
                <router-link tag="a" to="/artlist" class="dropdown-item">文章</router-link>
                <!-- <router-link tag="a" to="/artadd" class="dropdown-item">添加</router-link>
                <router-link tag="a" to='/feed' class="dropdown-item">留言</router-link>
                <router-link tag="a" to='/dashboard' class="dropdown-item">Dashboard</router-link> -->
                <!-- <a href="/artlist" class="dropdown-item">文章</a> -->
                <a href="/artadd" class="dropdown-item">添加</a>
                <a href='/feed' class="dropdown-item">留言</a>
                <a href='/dashboard' class="dropdown-item">Dashboard</a>
              </div>
            </li>    
          </template>  


         
          <li class="nav-item" v-show="!isLogin">
            <router-link to='/register' class="nav-link">注册</router-link>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <router-link to='/login' class="nav-link">登录</router-link>
            <!-- <a class="nav-link" href="login.html">登录</a> -->
          </li>
          <li v-if="user !== null" class="nav-item" v-show="isLogin">
            <a class="nav-link" @click.prevent='logout'>
              <!-- <img  class="rounded-circle headerImg" :src="user.avatar" :alt="user.name"> -->
              退出</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <p style="color:#fff">{{user}}</p> -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      userId:         '',
      // baseImg:              
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isAutnenticated;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      // 删除ls
      localStorage.removeItem("jwtToken");
      // 干掉请求头
      // this.$store.dispatch("setIsAutnenticated", false);
      this.$store.dispatch("clearCurrentState");
      //清空session
      sessionStorage.setItem("userId",'');
      // this.userId = '';
      // 跳转登录
      this.$router.push("/login");
    }
  },
  created() {
    // this.userId = this.user.id
    // console.log(this.userId)
    // console.log(this.getUrl('avatar'))
    // console.log(111111111)
    
    if(sessionStorage.getItem("avatar")){
      //分发改变vueX值
      this.$store.dispatch('setUserAvatar',sessionStorage.getItem("avatar"))
      // console.log(this.$store.getters.user)
    }
  },
};
</script>

<style scoped>
.headerImg {
  width: 25px;
  margin-right: 5px;
}
</style>

