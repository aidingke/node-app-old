<!-- 
* name: 科目管理
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .subject
        Header(title="科目管理")
        .container
            nav
                span.left 全部科目（15）
            ul
                li(v-for="(item,index) in studentList",:key="index")
                    span.name {{item.name}}
                    span.color(:style="{backgroundColor:item.color}") 
                    span.control
                        a(href="javascrip:void(0)",@click="handleDialog(index)")
                            img(src="static/img/edit.png")
                        a(href="javascrip:void(0)",@click="deleCurrentLine(index)")
                            img(src="static/img/dele.png")
        el-dialog(:visible.sync="dialogTableVisible" width="545px")
            .window
                h3  {{title}}
                .sub-name 科目名称
                el-input(v-model="subInput", placeholder="")
                .sub-name 科目名称
                div.color(v-for="(item,index) in studentList", @click="select(index)" ,:key="index", :style="{border: studentIndex == index ?  '2px solid ' + '#b7b7b7' : 'none'}") 
                    span.dot(:style="{backgroundColor:item.color}")

        a.add(href="javascript:void(0)",@click="handleDialog('add')")
            span.push +
            span.font 新增科目
</template>
<script>
export default {
  name: "SubjectManage",
  data() {
    return {
      title: "",
      subInput: "",
      dialogTableVisible: false,
      studentList: [
        {
          name: "陈秀莲33",
          color: "red"
        },
        {
          name: "陈秀莲",
          color: "blue"
        },
        {
          name: "陈秀莲",
          color: "green"
        },
        {
          name: "陈秀莲",
          color: "orange"
        },
        {
          name: "陈秀莲33",
          color: "yellow"
        },
        {
          name: "陈秀莲",
          color: "orange"
        },
        {
          name: "陈秀莲",
          color: "orange"
        },
        {
          name: "陈秀莲",
          color: "blue"
        },
        {
          name: "陈秀莲33",
          color: "blue"
        },
        {
          name: "陈秀莲",
          color: "blue"
        },
        {
          name: "陈秀莲",
          color: "pink"
        },
        {
          name: "陈秀莲",
          color: "pink"
        }
      ],
      studentIndex: 0
    };
  },
  methods: {
    handleDialog(n) {
      if (n === "add") {
        this.title = "添加科目";
      } else {
        this.title = "编辑科目";
      }
      this.dialogTableVisible = true;
    },
    deleCurrentLine(index) {
      this.$confirm("确定要删除此数据吗?", "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "删除"
      })
        .then(() => {
          this.studentList.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    select(index) {
        this.studentIndex = index
    }
  }
};
</script>
<style lang="stylus">
.subject 
    .container 
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        background: #efefef;

        nav 
            height: 88px;
            line-height: 88px;
            font-size: 30px;
            padding: 15px 20px;
            background: #fff;

            span.left 
                float: left;
                color: #909399;
            
        

        ul 
            margin: 20px;
            font-size: 30px;
            overflow: auto;
            height: 100%;

            li 
                padding: 30px 30px;
                border-bottom: 3px solid #efefef;
                background: #fff;
                overflow: hidden;
                display: flex;
                height: 60px;
                line-height: 60px;
                position: relative;

                span.name 
                    font-weight: bold;
                    flex: 1;
                

                span.color 
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    position: absolute;
                    top: 40px;
                    left: 55%;
                

                span.control 
                    a 
                        padding: 0 30px;

                        img 
                            height: 30px;
                            width: 30px;
                        
                    
                
            
        
    

    .add 
        border-radius: 50%;
        color: #fff;
        background: #148ce8;
        border: 10px solid #afd4ef;
        width: 150px;
        height: 150px;
        position: fixed;
        bottom: 100px;
        right: 100px;
        text-align: center;
        z-index: 2;

        span.push 
            font-size: 80px;
            font-weight: 100;
            display: block;
            height: 55px;
            line-height: 55px;
            margin-top: 10px;
        

        span.font 
            font-size: 26px;
            display: block;
            height: 50px;
            line-height: 50px;
            margin-top: 10px;
        
    

    .window 
        padding: 50px;

        h3 
            font-size: 40px;
            color: #000;
            text-align: center;
        
        .sub-name 
            font-size: 30px;
            margin: 10px 0;
        

        input[type='text'] 
            height: 100px;
            font-size: 30px;
            margin-bottom: 50px;
        

        div.color 
            width: 54px;
            height: 54px;
            display: inline-block;
            border-radius: 50%;
            margin-top: 50px;
            margin-right: 154px;
            margin-bottom: 50px;
            position :relative;
            box-sizing :border-box;
            padding: 2px;
            // &:nth-of-type(5n) {
            //     margin-right: 0;
            // }
            
            .dot
                width :100%;
                height :100%;
                border-radius : 50%;
                // position: absolute;
                // top :2px;
                // left :2px;
                display :block;
                box-sizing :border-box;


</style>

