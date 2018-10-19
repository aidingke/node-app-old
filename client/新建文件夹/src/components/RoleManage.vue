<!-- 
* name: 角色管理
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .subject
        Header(title="角色管理")
        .container
            nav
                span.left 全部角色（15）
                |
                span.right(@click="edit()") {{statusText}}
            ul
                li(v-for="(item,index) in roleList",:key="index")
                    img(v-show="statusText==='完成'",@click="deleCurrentLine(index)",src="static/img/reduce.png")
                    span.name {{item.name}}
                    span.control(@click="handleDialog(index)") 权限（6）
        a.add(href="javascript:void(0)",@click="handleDialog('add')")
            span.push +
            span.font 新增角色
        el-dialog(:visible.sync="dialogTableVisible" width="545px")
            .window
                h3  {{title}}
                .role-name 角色名称
                el-input(v-model="roleInput", placeholder="")
                .juris 权限
                el-checkbox(:indeterminate="isIndeterminate", v-model="checkAll", @change="handleCheckAllChange") 全选
                el-checkbox-group(v-model="checkedCities" @change="handleCheckedCitiesChange")
                    el-checkbox(v-for="item in checkList", :key="item", :label="item") {{item}}
                .button-item
                    div
                        el-button(type="primary") 确定
                        |
                        el-button(plain="",@click="dialogTableVisible = false") 取消
</template>
<script>
    const cityOptions = ['新增学生', '新增班级','新增试卷','新增比赛'];
    export default {
        name: 'RoleManage',
        data () {
            return {
                checkAll: false,
                isIndeterminate: true,
                dialogTableVisible:false,
                roleInput:'教务处',
                
                checkList: cityOptions,
                checkedCities: [],
                statusText:'编辑',
                title:'',
                roleList:[
                    {
                        name:'教务处',
                    },
                    {
                        name:'老师',
                    },
                    {
                        name:'校内学生',
                    },
                    {
                        name:'校外学生',
                    },
                ]
            }
        },
        methods:{
            handleCheckAllChange(val) {
                console.log(val)
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === cityOptions.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length;
            },
            handleDialog(n){
                if(n==='add'){
                    this.title = "新增角色";
                }else{
                    this.title = "编辑权限";
                }
                this.dialogTableVisible = true;
            },
            edit(){
                if(this.statusText === '编辑'){
                    this.statusText = '完成';
                } else {
                    this.statusText = '编辑'
                }
            },
            deleCurrentLine(index){
                this.roleList.splice(index,1);
            }
        },
        mounted(){
        }
    }
</script>
<style lang="stylus">
.subject
    .container
        height 100%
        position fixed
        left 0
        right 0
        background #efefef
        nav
            height 88px
            line-height 88px
            font-size 35px
            padding 15px 20px
            background #fff
            overflow hidden
            span.left
                float left
            span.right
                float right
                color #148ce8
                padding-right 30px
        ul
            margin 20px
            font-size 30px
            overflow auto
            height 100%
            li  
                padding 30px 30px
                border-bottom 3px solid #efefef
                background: #fff; 
                overflow hidden
                display flex
                height 60px
                line-height 60px
                img
                    width 60px
                    height 60px
                    margin-right 40px
                span.name
                    font-weight bold
                    flex 1
                span.control
                    width 150px
    .add
        border-radius 50%
        color #fff
        background #148ce8
        border 10px solid #afd4ef
        width 150px
        height 150px
        position fixed
        bottom 100px
        right 100px
        text-align center
        z-index 2
        span.push
            font-size 80px
            font-weight 100
            display block
            height 55px
            line-height 55px
            margin-top 10px
        span.font 
            font-size 26px
            display block
            height 50px
            line-height 50px
            margin-top 10px
    .window
        padding 50px
        h3
            font-size 40px
            color #000
            text-align center
        .role-name
            font-size 30px
            margin 10px 0
        input[type='text']
            height 100px
            font-size 30px
        .juris
            font-size 30px
            margin 50px 0 30px 0
        .el-checkbox
            margin 30px 0
            .el-checkbox__input
                margin-right 50px
        .el-checkbox-group
            .el-checkbox
                width 420px
                margin 30px 0
            .el-checkbox__input
                margin-right 50px
        .button-item
            margin-top 50px
            div
                margin 0 auto
                width 600px
                text-align center
                .el-button
                    padding 35px  90px
                    font-size 30px
                    &:last-child
                        margin-left 20px                        

</style>

