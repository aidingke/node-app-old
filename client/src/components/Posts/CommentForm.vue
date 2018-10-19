<template>
    <div class="post-form mb-3">
        <div class="card card-info">
            <div class="card-header bg-info text-white">
            请鼓励一下我...
            </div>
            <div class="card-body">
            <form @submit.prevent="submit">
                <TextArea
                    name="text"
                    placeholder="鼓励鼓励我..."
                    v-model="text"
                    :error="errors.text"
                ></TextArea>
                <input type="submit" class="btn btn-dark" />
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import TextArea from "../common/TextAreaGroup";

export default {
  name: "commentform",
  data() {
    return {
      text: "",
      errors: ""
    };
  },
  props: {
    postId: String
  },
  components: {
    TextArea
  },
  methods: {
    submit() {
      const user = this.$store.getters.user;
      const newComment = {
        text: this.text,
        name: user.name,
        avater: user.avater
      };

      // 添加评论
      this.$axios
        .post(`/api/posts/comment/${this.postId}`, newComment)
        .then(res => {
          this.errors = ""; // 清空错误提示
          this.text = ""; // 清空文本

          this.$emit("update");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>

