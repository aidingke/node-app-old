<template>
    <div class="comment" >
    <!-- comment Item -->
    <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-2">
            <a >
            <img class="rounded-circle d-nonse d-md-block"  
                 style="width: 150px" 
                 :src="comment.avatar"
                alt="" />
            </a>
            <br />
            <p class="text-center">{{comment.name}}</p>
        </div>
        <div class="col-md-10">
            <p class="lead">{{comment.text}}</p>

            <!-- 判断是否可以删除留言 -->
            <button 
                v-if="user != null && user.id == comment.user"
                type="button" class="btn btn-danger mr-1"
                @click="deleteClick(comment._id)"
                ><i class="fas fa-times" />
            </button>
        </div>
        </div>
    </div>
    </div >
</template>

<script>
export default {
  name: "commentfeed",
  props: {
    comment: Object,
    postId: String
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    deleteClick(commentid) {
      this.$axios
        .delete(`/api/posts/comment/${this.postId}/${commentid}`)
        .then(res => {
          // 删除成功，更新数据
          this.$emit("update");
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

