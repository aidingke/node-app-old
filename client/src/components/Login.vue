<template>
    <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">使用已有的账户登录</p>
          <form @submit.prevent="submit" autocomplete="off" method="post ">
            <!-- <div class="form-group">
              <input 
                type="email" 
                class="form-control form-control-lg" 
                placeholder="邮箱地址" 
                name="email" 
                v-model="user.email"
                :class="{'is-invalid': errors.email}"
              />
              <div v-if="errors.email" class="invalid-feedback">
                {{errors.email}}
              </div>
            </div> -->

            <!-- <div class="form-group">
              <input 
                type="password" 
                class="form-control form-control-lg" 
                placeholder="密码" 
                name="password" 
                v-model="user.password"
                :class="{'is-invalid': errors.password}"
              />
              <div v-if="errors.password" class="invalid-feedback">
                {{errors.password}}
              </div>
            </div> -->
            <TextField 
            type='email'
            name='email'
            placeholder="邮箱地址"
            v-model="user.email"
            :error='errors.email'
           ></TextField>
           
            <TextField 
              type='password'
              name='password'
              placeholder="密码"
              v-model="user.password"
              :error='errors.password'
           ></TextField>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import TextField from "./common/TextFieldGroup";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: ""
    };
  },
  components: {
    TextField
  },
  methods: {
    submit() {
      this.$axios
        .post("/api/users/login", this.user)
        .then(res => {
          // console.log(res.data);
          this.errors = ""; // 清空页面错误信息

          const { token } = res.data;
          localStorage.setItem("jwtToken", token);
          // 解析token
          const decode = jwt_decode(token);
          console.log(decode);
          sessionStorage.setItem("userId",decode.id);
          // 更改status状态
          this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
          this.$store.dispatch("setUser", decode);

          // 页面跳转
          this.$router.push("/dashboard");
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            this.errors = error.response.data;
          }
        });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>
<style scoped>
</style>

