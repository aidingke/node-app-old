<template>
  <div id="app">
    <NavBar></NavBar>
    <!-- <Landing></Landing> -->
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import jwt_decode from "jwt-decode";
import Loading from "@/components/common/Loading";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Landing,
    Loading
  },
  created() {
    if (localStorage.jwtToken) {
      const decode = jwt_decode(localStorage.jwtToken);
      this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
      this.$store.dispatch("setUser", decode);
    }
  },
  computed: {
    loading() {
      let load = this.$store.getters.loading;
      return load;
    }
  },
  methods: {
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

<style>
</style>
