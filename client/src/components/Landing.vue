<template>
    <div class="landing">
    <div class="dark-overlay landing-inner text-light">
      <div class="container">
        <div class="row" v-show="!isLogin">
          <div class="col-md-12 text-center">
            <h1 class="display-3 mb-4">全栈在线
            </h1>
            <p class="lead"> 专注于线上教育, 用心做课程, 用心做服务! </p>
            <hr />
            <!-- <a href="register.html" class="btn btn-lg btn-info mr-2">注册</a>
            <a href="login.html" class="btn btn-lg btn-light">登录</a> -->
            <router-link v-show="!isLogin" to='/register' class="btn btn-lg btn-info mr-2">注册</router-link>
            <router-link v-show="!isLogin" to='/login' class="btn btn-lg btn-light">登录</router-link>
          </div>
        </div>

        <div class="row" v-show="isLogin">
          <div class="card card-body" v-for="(item, index) in resData" :key="index" style="width:85%;margin:0 auto 15px;color:#999">
            <a :href='"/artdetail?id="+item._id' style="color:#555;">
              <h3 class="cent"> {{item.title}}</h3>
              <div class="conts" style="color:#999;" v-html="item.description">
                <!-- {{item.description}} -->
              </div> 
              <div style="color:#999;">开发者：{{item.user.name}}</div>
              <p style="color:#999;">{{item.date}}</p>
            </a>
          </div>  
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      resData:''
    };
  },
  computed: {
    isLogin() {
      if (this.$store.getters.isAutnenticated) return true;
      else return false;
    }
  },
  methods:{
    getList(){
      this.$axios("/api/ideas/listAll")
        .then(res=>{
          //  console.log(res)
          var _this = this 
          res.data.forEach((v,i)=>{
            v.description = _this.repImgInfos(v.description)
          }) 

          this.resData = res.data
        })
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
img {
  width: 100%;
}

.landing {
  position: relative;
  background: url("../asserts/showcase.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  margin-top: -24px;
  margin-bottom: -50px;
}

.landing-inner {
  padding-top: 80px;
}

.dark-overlay {
  background-color: rgba(0, 0, 0, 0.7);
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
}

.card-form {
  opacity: 0.9;
}

.latest-profiles-img {
  width: 40px;
  height: 40px;
}

.form-control::placeholder {
  color: #bbb !important;
}
.card a:hover{
  text-decoration: none;
}
</style>
