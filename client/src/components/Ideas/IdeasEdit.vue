<template>
<div>
  <div class="card card-body IdeasEdit">
    <h3>要编辑的内容</h3>
    <!-- {{idea.id}} -->
    <form method="post" @submit.prevent="submit">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" :class="{'is-invalid': error.title}" class="form-control title" name="title" v-model="resData.title">
        <div v-if="error.title" class="invalid-feedback">
          {{error.title}}
        </div>
      </div>
      <div class="form-group">
        <label for="title">内容简介</label>
        <!-- <textarea style="height:100px;" :class="{'is-invalid': error.description}" v-model="resData.description" class="form-control" name="description"></textarea> -->
        <UE :defaultMsg="defaultDes" :config="config1" ref="ue1" :id="ue1"></UE>
        <div v-if="error.description" class="invalid-feedback">
          {{error.description}}
        </div>
      </div>
      <div class="form-group">
        <label for="details">详情</label>
        <!-- <textarea style="height:300px;" :class="{'is-invalid': error.details}" class="form-control" v-model="resData.details" name="details"></textarea> -->
        <UE :defaultMsg="defaultMsg" :config="config2" ref="ue2" :id="ue2"></UE>
        <div v-if="error.details" class="invalid-feedback">
          {{error.details}}
        </div>
      </div>
      <button type="submit" class="btn btn-primary">编辑</button>
      <a class="btn-default btn" href="javascript:history.go(-1)" style="background:#ddd;color:#555">返回</a>
      <a @click="checkFun()" :class="{'oks':oks}" style="margin-left:3%">
        <template v-if="oks">已开</template> 
        <template v-if="oks!==true">已关</template>
      </a>
    </form>
  </div>
  <!-- <p> </p> -->
</div>  
</template>

<script>
import UE from '../../components/common/ue.vue';
export default {
  name: "IdeasEdit",
  components: {
    UE
  },
  data() {
    return {
      resData:"",
      oks:true,
      error: "",
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
        maximumWords:150, //允许的最大字符数 
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
      }
    };
  },
  created() {
    this.getInfo(this.getUrl('id'))
  },
  methods: {
    checkFun(){
      this.oks = !this.oks
    },
    getInfo(x){
      this.$axios("/api/ideas/artedit/"+x)
        .then(res=>{
          // console.log(res)
          if(res.data.code==400){
            alert(res.data.msg)
            return false
          }
          this.resData = res.data
          
          this.defaultDes=this.repImgInfos(this.resData.description)
          this.defaultMsg=this.repImgInfos(this.resData.details)
          
          this.oks = this.resData.checkT
          console.log(this.defaultMsg)
        })
    },
    submit() {
      const user = this.$store.getters.user;

      if(this.addDesc(this.$refs.ue1.getContent(),150)==false){
        alert('字数不能超过150')
        return false
      }


      const newPost = {
        title: this.resData.title,
        description:this.addDesc(this.$refs.ue1.getContent()),
        details:this.addImg(this.$refs.ue2.getContent()),
        checkT:this.oks
      };


      this.$axios
        .post("/api/ideas/edit/"+this.getUrl('id'), newPost)
        .then(res => {
          console.log(res)
          alert(res.data.success_msg)
          this.$router.push({
              path:'/artlist'
          })
        })
        .catch(error => {
          this.error = error.response.data;
          console.log(this.error)
        });
    }
  }
};
</script>
<style scoped>
.IdeasEdit .oks,.IdeasEdit .oks:hover{
  color:red;
}
.invalid-feedback{
  display: block;
}
</style>