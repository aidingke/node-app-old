<template>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- 展示评论表单 -->
                    <PostForm
                      @update="getPosts"
                    ></PostForm>

                    <!-- 展示点赞内容 -->
                    <PostFeed 
                        v-for="post in posts"
                        :key="post._id" 
                        :post="post"
                        @update="getPosts"
                        :showAction=true
                    ></PostFeed>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";

export default {
  name: "posts",
  data() {
    return {
      posts: [],
      errors: ""
    };
  },
  components: {
    PostForm,
    PostFeed
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getPosts();
    });
  },
  methods: {
    getPosts() {
      this.$axios
        .get("/api/posts")
        .then(res => {
          this.posts = res.data;
          this.errors = "";
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>

