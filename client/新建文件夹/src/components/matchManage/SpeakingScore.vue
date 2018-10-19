<!-- 
* name: 比赛考核（实操评分）组件
* author: gxr
* time: 2018-8-3
-->
<template lang="pug">
    .speakingScore
        Header(title="实操评分")
        .hd-div
            .group-name 广元汽车维修学习第一组
            .student-name 关小羽
        .bd-div
            ul.list
                li
                    .score-title 总分
                    <el-input placeholder="0"></el-input>
                    .score-unit 分
                li
                    .score-title 第一部分
                    <el-input placeholder="0"></el-input>
                    .score-unit 分
                li
                    .score-title 第二部分
                    <el-input placeholder="0"></el-input>
                    .score-unit 分
                li
                    .score-title 第三部分
                    <el-input placeholder="0"></el-input>
                    .score-unit 分
            .add-btn
                span.el-icon-plus.avatar-uploader-icon
</template>
<script>
    export default {
        name: 'SpeakingScore',
        data () {
            return {
                formLabelAlign: {},
                renderList: [], //总分
            }
        },
        methods:{
            onLinkDetails(){
                this.$router.push({
                    path: './VideoDetails'
                });
            },
        },
        mounted(){
            
        }
    }
</script>
<style lang="stylus">
.speakingScore
    .hd-div
        display flex
        justify-content space-between
        align-items center
        height 100px
        padding 0 30px
        font-size 30px
        border-bottom 1px solid #d3d6db
    .bd-div
        width 70%
        margin 0 auto
        .list
            padding-top 160px
            li
                position relative
                font-size 28px
                margin-bottom 80px
                .score-title
                    display flex
                    align-items center
                    justify-content center
                    position absolute
                    left 0
                    top 0
                    width 200px
                    height 100px
                    font-size 36px
                    font-weight 700
                    z-index 3
                .score-title:after
                        position absolute
                        right 0
                        top 0
                        display block
                        content ''
                        width 5px
                        height 50px
                        margin 25px 0
                        background #c2c5cd
                .el-input__inner
                    height 100px
                    line-height 100px
                    padding 0 100px 0 240px
                    font-size 30px
                .score-unit
                    position absolute
                    right 0
                    top 0
                    width 80px
                    height 100px
                    line-height 100px
                    text-align center
                    z-index 3
        .add-btn
            width 100px
            height 100px
            line-height 100px
            text-align center
            border 1px solid #d3d6db
            border-radius 10px
            font-size 60px
            color #909399
</style>
