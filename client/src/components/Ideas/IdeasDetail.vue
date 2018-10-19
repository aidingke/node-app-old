<template>
<div>
  <div class="card card-body">
    <h3 class="cent"> {{resData.title}}</h3>
    <div class="conts" v-html="resData.description">
      <!-- {{resData.description}} -->
    </div> 
    <p style="height:50px;background:#eee;text-align:center;line-height:50px;"> -------------------------------详情开始------------------------------- </p>
    <div class="conts" id="details" v-html="resData.details">
      <!-- 详情：{{resData.details}} -->
    </div> 
    <p>开发者：{{uname}}</p>
    <p>{{resData.date}}</p>
  </div>
  <p> 
    <a class="btn-primary btn" href="javascript:history.go(-1)">返回</a>
    <a :href='"/artedit?id="+resData._id' class="btn btn-success" v-if="userId==u_id">编辑</a>
  </p>
</div>  
</template>

<script>

export default {
  name: "IdeasDetail",
  data() {
    return {
      resData:"",
      errors: "",
      userId:'',
      u_id:'',
      uname:''
    };
  },
  created() {
    this.getInfo(this.getUrl('id'))
    this.userId = sessionStorage.getItem("userId")
    // console.log(this.userId)
  },
  mounted(){
    // console.log($('#details').html())
  },
  methods: {
    getInfo(x){
      this.$axios("/api/ideas/details/"+x)
        .then(res=>{
          this.resData = res.data
          this.uname = res.data.user.name
          this.u_id = res.data.user._id
          this.resData.description = this.repImgInfos(this.resData.description)
          // console.log(this.resData.details)
          this.resData.details = this.repImgInfos(this.resData.details)

        })
    }
  }
};
</script>
<style>
  .conts img{
    width: auto;
  }
</style>


















