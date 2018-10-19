<template>
<div>
  <div class="card card-body" v-for="(item, index) in resData" :key="index" style="width:85%;margin:0 auto 15px">
    <h3 class="cent"> {{item.title}}</h3>
    <div class="conts" v-html="item.description">
      <!-- {{item.description}} -->
    </div> 
    <p>{{item.date}}</p>
    <div class="moreBtn">
      <a :href='"/artdetail?id="+item._id' class="btn btn-info">查看详情</a>
      <a :href='"/artedit?id="+item._id' class="btn btn-success">编辑</a>
      <button @click="deleteBtn(item._id)" class="btn btn-default" >删除</button>
      
        <template v-if="item.checkT">
          <a @click="checkFun(item._id)" style="color:red"> 已开 </a>
        </template>
        <template v-if="!item.checkT">
          <a @click="checkFun(item._id)" style="color:#999"> 已关 </a>
        </template>
      

      <!-- <form method="POST" @submit.prevent="deleteBtn(item._id)" style="display: inline;">
        <input type="hidden" name="method" value="DELETE">
        <input type="submit" class="btn btn-default" value=删除"删除">
      </form> -->
    </div>
  </div>
  <p style="margin:5% auto 0;width:85%;"> 
      <!-- <a class="btn-primary btn" href="javascript:history.go(-1)">返回</a> -->
      <a href="/artadd" class="btn-primary btn">添加文章</a>
  </p>
</div>  
</template>

<script>

export default {
  name: "IdeasList",
  data() {
    return {
      resData:"",
      errors: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList(){
      this.$axios("/api/ideas/list")
        .then(res=>{
           
          var _this = this 
          res.data.forEach((v,i)=>{
            v.description = _this.repImgInfos(v.description)
          }) 
          // console.log(res.data)
          this.resData = res.data

          // console.log(this.resData)
        })
    },
    deleteBtn(x){
      // alert(x)
      this.$axios.delete(`/api/ideas/delete/${x}`)
        .then(res=>{
          alert(res.data.msg)
          this.getList();
        })
    },
    checkFun(x){
      this.$axios
        .post(`/api/ideas/checkT/${x}`)
        .then(res => {
          // console.log(res)
          alert(res.data.success_msg)
          this.getList();
        })
        .catch(error => {
          this.error = error.response.data.msg;
          console.log(this.error)
        });
    }
  }
};
</script>


















