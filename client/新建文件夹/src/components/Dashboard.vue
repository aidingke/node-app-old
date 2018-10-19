<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
            <h1 class="display-4">Dashboard</h1>
            <p class="lead text-muted" v-if="user != null">
              Welcome 
              <a v-if="profile == null" >{{user.name}}</a>
              <router-link v-else 
              :to="{name: 'profile', params:{handle: profile.handle}}">
              {{user.name}}</router-link>
              </p>
            <div v-if='profile !== null'>
              <!-- 路由按钮 -->
              <ProfileActived></ProfileActived>
              
              <!-- 个人履历 -->
              <Experience 
                :experience="profile.experience"
                @deleteExperience= "deleteExperience"
              ></Experience>

              <!-- 教育经历 -->
              <Education
                :education="profile.education"
                @deleteEducation="deleteEducation"
              ></Education>

              <!-- 删除账户按钮 -->
              <div style="margin-bottom: 60px;">
                <button class="btn btn-danger" @click="deleteClick">
                  删除当前账户
                </button>
              </div>
            </div>

            <div v-else>
              <p>没有任何任何相关的个人信息，请添加一些您的个人信息</p>
              <router-link to='/create-profile' class="btn btn-lg btn-info">添加个人信息</router-link>
            </div>
            
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ProfileActived from "./common/ProfileActived";
import Experience from "./common/Experience";
import Education from "./common/Education";

export default {
  name: "dashboard",
  data() {
    return {
      profile: null // 存储用户个人信息
    };
  },
  components: {
    ProfileActived,
    Experience,
    Education
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    // this.getProfileData();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getProfileData();
    });
  },
  methods: {
    getProfileData() {
      // 请求数据
      this.$axios("/api/profile")
        .then(res => {
          console.log(res.data);
          this.profile = res.data;

          // 更新store
          this.$store.dispatch("setProfile", res.data);
        })
        .catch(error => {
          this.profile = null;
          // 更新store
          this.$store.dispatch("setProfile", null);
        });
    },
    deleteClick() {
      this.$axios
        .delete("/api/profile")
        .then(res => {
          this.profile = null;
          // 更新store
          this.$store.dispatch("clearCurrentState");
          this.$router.push("/login");
        })
        .catch(error => {
          alert(error.response.data);
        });
    },
    deleteExperience(id) {
      this.$axios
        .delete(`/api/profile/experience/${id}`)
        .then(res => {
          console.log(res.data);
          this.profile = res.data;
        })
        .catch(error => {});
    },
    deleteEducation(id) {
      this.$axios
        .delete(`/api/profile/education/${id}`)
        .then(res => {
          console.log(res.data);
          this.profile = res.data;
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
</style>
