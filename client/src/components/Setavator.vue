<template>  
    <div class="setavator">
        <div class="row col-lg-6">
          <h1>上传头像</h1>
          <!-- {{user}} -->
          <!-- "'/setavator/'+user.id" -->
          <form :action="'api/users/setavator/'+userId" method="post" enctype="multipart/form-data">
            <div class="form-group">
            <!-- <label for="avator">更改头像</label> -->
            <input type="file" class="form-control" id='avator' name='avator'/>
            </div>
            <button id='upload' type="submit" class="btn btn-primary">上传</button>
          </form>
        </div>
    </div>
</template>

<script>
// import pubFun from "../utils/pubFun.js"
export default {
  data() {
    return {
      userId:         '',
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    // console.log(this.getUrl('userId'))
    this.userId=this.getUrl('userId')
  },
  methods: {
  }
};
</script>

<style scoped>
</style>