<!-- 
* name: 培训与考核首页引导
* author: fjd
* time: 2018-7-27
-->
<template lang="pug">
    .TrainExamIndex
        Header(title="培训与考核")
        .container
            .row
                .col(@click="onLinkHandle(1)")
                    img(src="static/img/Courseware.png") 
                    span 课件
                .col(@click="onLinkHandle(2)")
                    img(src="static/img/Questions.png") 
                    span 题库
                .col(@click="onLinkHandle(3)")
                    img(src="static/img/examine.png") 
                    span 考核
                .col(@click="onLinkHandle(4)")
                    img(src="static/img/work.png") 
                    span 作业
                .col(@click="onLinkHandle(5)")
                    img(src="static/img/data-diagnosis.png") 
                    span 数据诊断
                .col(@click="onLinkHandle(6)")
                    img(src="static/img/technology.png") 
                    span 技术培训    
</template>
<script>
    export default {
        name: 'TrainExamIndex',
        data () {
            return {
                
            }
        },
        methods:{
            onLinkHandle (type) {
                if(type == 1) {
                    this.$router.push({
                        path:'/CourseWare'
                    });
                } else if (type == 2) {
                    this.$router.push({
                        path:'/Questions'
                    });
                } else if (type == 3) {
                    this.$router.push({
                        path:'/Pass'
                    });
                }else if (type == 4) {
                    this.$router.push({
                        path:'/Task'
                    });
                }else if (type == 5) {
                    this.$router.push({
                        path:'/MaintainCaseLibrary'
                    });
                }else if (type == 6) {
                    this.$router.push({
                        path:'/Training'
                    });
                }
            }
        }
    }
</script>
<style lang="stylus">
.TrainExamIndex
    background #efefef
    height 100%
    position fixed
    left 0
    right 0
    .container
        display flex
        flex-direction column
        padding 60px
        position absolute
        left 0
        right 0
        top 50%
        transform translate(0, -50%)
        .row
            width: 100%
            .col
                width: 30%
                border 1px solid #e3e3e3
                border-radius 10px
                text-align center
                display inline-block
                margin 0 20px 40px 20px
                background #fff
                img 
                    max-width 130px
                    max-height 130px
                    margin-top 80px
                span 
                    display block
                    font-size 30px
                    padding 69px
</style>
