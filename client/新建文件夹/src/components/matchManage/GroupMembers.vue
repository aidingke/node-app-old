<!-- 
* name: 组成员
* author: gxr
* time: 2018-8-10
-->
<template lang="pug">
    .groupMembers
        Header(title="学生")
        .container
            nav
                span.left {{groupName}}
                |
                span.right(@click="edit()") {{statusText}}
            ul
                li(v-for="(item,index) in renderList",:key="index")
                    img(v-show="statusText==='完成'",@click="deleCurrentLine(index)",src="static/img/reduce.png")
                    span.name {{item.stuName}}
                    span.number {{item.stuMobile}}
        .addMatch-cont(@click="onSelectTeamMembers")
                .add-btn
                    span.el-icon-plus.avatar-uploader-icon
                    span 新增成员
</template>
<script>
    export default {
        name: 'GroupMembers',
        data () {
            return {
                statusText:'编辑',
                groupName: '广元汽车维修学校第一组',
                renderList: [
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                    {
                        stuId: 1,
                        stuName: '陈秀莲33',
                        stuMobile: '1368797978'
                    },
                ]
            }
        },
        methods:{
            edit(){
                if(this.statusText === '编辑'){
                    this.statusText = '完成';
                } else {
                    this.statusText = '编辑'
                }
            },
            deleCurrentLine(index){
                this.studentList.splice(index,1);
            },
            onSelectTeamMembers(){
                this.$router.push({
                    path: './SelectTeamMembers'
                });
            }
        }
    }
</script>
<style lang="stylus">
.groupMembers
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
            span.left
                float left
            span.right
                float right
                color #148ce8
                padding-right 30px
        ul
            margin 20px
            background #fff
            font-size 30px
            overflow auto
            height 100%
            li  
                padding 30px 30px
                border-bottom 3px solid #efefef
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
    .addMatch-cont
            position fixed
            right 30px
            bottom 50px
            width 160px
            height 160px
            border-radius 100%
            background #148ce8
            border 10px solid #bcdef8
            &.edit
                bottom 260px
            .add-btn
                height 160px
                display flex
                align-items center
                justify-content center
                flex-direction column
                font-size 24px
                color #fff
                .el-icon-plus
                    font-size 50px
                    margin-bottom 10px
</style>

