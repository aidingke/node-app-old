<!-- 
* name: 首页
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .home
        Header(title="首页")
        .container
            //第一行
            .row
                .col(v-if="!authority.teacher")
                    a(href="javascript:void(0)")
                        img(src="static/img/data-diagnosis.png") 
                    span 数据诊断
                .col(v-if="!authority.teacher")
                    a(href="javascript:void(0)")
                        img(src="static/img/social-practice.png") 
                    span 社会实践
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/class-manage.png") 
                    span 班级课程
                .col(@click="goToHandle")
                    a(href="javascript:void(0)")
                        img(src="static/img/match-manage.png") 
                    span 比赛管理
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/training-and-assessment.png") 
                    span 培训与考核
            //第二行
            .row
                .col(v-if="!authority.teacher")
                    a(href="javascript:void(0)")
                        img(src="static/img/digital-teaching-resources.png")
                    span 数字化教学资源
                .col(v-if="!authority.teacher")
                    a(href="javascript:void(0)")
                        img(src="static/img/match-manage.png")
                    span 比赛管理
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/class-manage.png") 
                    span 班级管理
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/teachers-manage.png") 
                    span 师资管理
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/video-manage.png") 
                    span 视频管理
            //第三行
            .row
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/teacher-course.png") 
                    span 老师课程
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/subject-manage.png") 
                    span 科目管理
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/role-manage.png") 
                    span 角色管理
            .row
                .col
                    a(href="javascript:void(0)")
                        img(src="static/img/other-functions.png") 
                    span 其他功能开发中
                .col(:style="{visibility:'hidden'}")
                    a(href="javascript:void(0)")
                .col(:style="{visibility:'hidden'}")
                    a(href="javascript:void(0)")
</template>
<script>
    export default {
        name: 'Home',
        data () {
            return {
                authority:{
                    student:false,
                    teacher:true,
                }
            }
        },
        methods:{
            personJump(){
                this.$router.push({ name: 'PersonalCenter' })
            },
            trigger(){
            },
            goToHandle() {
                this.$router.push({
                    path: './MatchManage'
                });
            },
        }
    }
</script>
<style lang="stylus">
.home
    .container 
        display flex
        flex-direction column
        background-color #fff
        padding 60px
        background #efefef
        height 100%
        position fixed
        left 0
        right 0
        .row 
            display flex
            .col
                flex 1
                border 1px solid #e3e3e3
                border-radius 10px
                text-align center
                margin: 0 20px 40px 20px
                background #fff
                a
                    width 130px
                    height 130px
                    img
                        max-width 130px
                        max-height 130px
                        margin-top 80px
                span
                    display block
                    font-size 30px
                    padding 69px
            
</style>
