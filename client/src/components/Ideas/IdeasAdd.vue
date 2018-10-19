<template>
    <div class="card card-body IdeasAdd">
      <h3>想学的课程</h3>
      <form method="post" @submit.prevent="submit">
        <div class="form-group">
          <label for="title">标题</label>
          <input type="text" class="form-control" :class="{'is-invalid': error.title}" name="title" v-model="title">
          <div v-if="error.title" class="invalid-feedback">
            {{error.title}}
          </div>
        </div>
        <div class="form-group">
          <!-- {{error}} -->
          <label for="description">内容简介</label>
          <UE :defaultMsg="defaultDes" :config="config1" ref="ue1" :id="ue1"></UE>
          <!-- <textarea style="height:100px;" class="form-control" :class="{'is-invalid': error.description}" v-model="description" name="description"></textarea> -->
          <div v-if="error.description" class="invalid-feedback">
            {{error.description}}
          </div>
        </div>
        <div class="form-group">
          <label for="details">详情</label>
          <!-- <textarea style="height:300px;" class="form-control" :class="{'is-invalid': error.details}" v-model="details" name="details"></textarea> -->
          <UE :defaultMsg="defaultMsg" :config="config2" ref="ue2" :id="ue2"></UE>
          <div v-if="error.details" class="invalid-feedback">
            {{error.details}}
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">提交</button>
        <a @click="checkFun()" :class="{'oks':oks}" style="margin-left:3%">
          <template v-if="oks">已开</template> 
          <template v-if="oks!==true">已关</template>
        </a>
        
      </form>
    </div>
</template>

<script>
// import TextArea from "../common/TextAreaGroup";
import UE from '../../components/common/ue.vue';
export default {
  name: "IdeasAdd",
  components: {
    UE
  },
  data() {
    return {
      title: "",
      defaultDes: '',
      defaultMsg: '',
      ue1: "ue1", // 不同编辑器必须不同的id
      ue2: "ue2",
      config1: {
        initialFrameWidth: null,
        initialFrameHeight: 200,
        //让编辑器的编辑框部分可以随着编辑内容的增加而自动长高
        autoHeightEnabled:false,
        //启用编辑器工具栏浮动
        autoFloatEnabled: true,
        maximumWords:100, //允许的最大字符数 
        //定义工具栏
        toolbars:[["Source","Undo","Redo","InsertImage","Emotion"]],
        //关闭左下角path路径提示
        elementPathEnabled : false
      },
      config2: {
        initialFrameWidth: null,
        initialFrameHeight: 400,
        //让编辑器的编辑框部分可以随着编辑内容的增加而自动长高
        autoHeightEnabled:false,
        //启用编辑器工具栏浮动
        autoFloatEnabled: true,
        maximumWords:70000, //允许的最大字符数 
        //定义工具栏
        toolbars:[["Source","Bold","Underline","JustifyLeft","JustifyCenter","JustifyRight","ForeColor","Undo","Redo","FontFamily","FontSize","InsertImage","Emotion","InsertVideo","Link","Map",'Preview','inserttable','FullScreen']],
        //关闭左下角path路径提示
        elementPathEnabled : false
      },
      description:"",
      details:"",
      oks:true,
      error: ""
    };
  },
  methods: {
    checkFun(){
      this.oks = !this.oks
    },
    submit() {
      const user = this.$store.getters.user;
      const newPost = {
        title: this.title,
        description:this.addDesc(this.$refs.ue1.getContent()),
        details:this.addImg(this.$refs.ue2.getContent()),
        name: user.name,
        checkT:this.oks
        // avater: user.avater
      };
      // title:req.body.title,
      // details:req.body.details,
      // description:req.body.description,
      // user:req.user.id,
      // 添加评论
      this.$axios
        .post("/api/ideas/add", newPost)
        .then(res => {
          // console.log(res)
          this.$router.push({
              path:'/artlist'
          })
        })
        .catch(error => {
          this.error = error.response.data;
        });
    }
  },
  mounted(){

  }
};
</script>
<style scoped>
.IdeasAdd .oks,.IdeasAdd .oks:hover{
  color:red;
}
.invalid-feedback{
  display: block;
}
</style>















