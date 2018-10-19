<template>
    <div class="posts" >
    <!-- Post Item -->
    <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-2">
            <a >
            <img class="rounded-circle d-nonse d-md-block"  
                 style="width: 150px" 
                 :src="post.avatar"
                alt="" />
            </a>
            <br />
            <p class="text-center">{{post.name}}</p>
        </div>
        <div class="col-md-10">
            <p class="lead">{{post.text}}</p>
            <span v-if="showAction">
            <button 
                type="button" 
                class="btn btn-light mr-1"
                @click="likeClick(post._id)">  
                <i class="fas fa-thumbs-up" :class="{'text-info' : findUserLike}"></i>
                <span class="badge badge-light">{{post.likes.length}}</span>
            </button>
            <button type="button" class="btn btn-light mr-1"
                @click="unLikeClick(post._id)">
                <i class="text-secondary fas fa-thumbs-down"></i>
            </button>
            <router-link class="btn btn-info mr-1" 
                :to="{name: 'post', params:{id: post._id}}">
                鼓励留言
            </router-link>

            <!-- 判断是否可以删除留言 -->
            <button 
                v-if="user != null && user.id == post.user"
                type="button" class="btn btn-danger mr-1"
                @click="deleteClick(post._id)"
                ><i class="fas fa-times" />
            </button>
            </span>
        </div>
        </div>
    </div>
    </div >
</template>

<script>
export default {
  name: "postfeed",
  data() {
    return {
      userLike: false
    };
  },
  props: {
    post: Object,
    showAction: Boolean
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    findUserLike() {
      const user = this.$store.getters.user;
      if (this.post.likes.length > 0) {
        // 如果likes长度大于0的时候筛选
        if (
          this.post.likes.filter(like => {
            return like.user == user.id;
          }).length > 0
        )
          return true;
        else return false;
      }
      return false; // 如果likes长度长度为0直接返回false
    }
  },
  methods: {
    deleteClick(id) {
      this.$axios
        .delete(`/api/posts/${id}`)
        .then(res => {
          // 删除成功，更新数据
          this.$emit("update");
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },
    likeClick(id) {
      this.$axios
        .post(`/api/posts/like/${id}`)
        .then(res => {
          // 成功，更新数据
          this.$emit("update");
        })
        .catch(error => {
          alert(error.response.data.alreadyliked);
        });
    },
    unLikeClick(id) {
      this.$axios
        .post(`/api/posts/unlike/${id}`)
        .then(res => {
          // 成功，更新数据
          this.$emit("update");
        })
        .catch(error => {
          alert(error.response.data.notliked);
        });
    }
  }
};
</script>

