<!-- 
* name: 选择成员
* author: gxr
* time: 2018-8-9
-->
<template lang="pug">
    .selectTeamMembers
        Header(title="选择组员")
        .container
            el-row(class="scroll-div")
                el-col(:span="12",v-for="(item,index) in renderList",:key="index") 
                    .item.groupItem
                        h3 {{item.groupName}}
                        .left-top {{index+1}}组
                        .button-item
                            div
                                el-button(plain @click="onViewStudent(1)") 学生({{item.stuNum}})
        .default-container(v-if="renderList.length === 0") 
            .default
                img(src="static/img/class-default.png")
                .not-class  暂无相关比赛组信息
                .add-text   请先添加比赛组
                el-button(plain) 添加比赛组
        .foot-div
             el-button(type="primary") 添加
</template>
<script>
    export default {
        name: 'SelectTeamMembers',
        data () {
            return {
                matchStatus: 0,
                renderList:[
                    {
                        'groupId': 1,
                        'groupName': '18级汽车空调专修第一组',
                        'stuNum': 8
                    },
                    {
                        'groupId': 2,
                        'groupName': '18级汽车空调专修第二组',
                        'stuNum': 10
                    },
                    {
                        'groupId': 3,
                        'groupName': '18级汽车空调专修第三组',
                        'stuNum': 9
                    }
                ],
            }
        },
        methods:{
            onViewStudent() {
                this.$router.push({
                    path: './Student'
                });
            }
        }
    }
</script>
<style lang="stylus">
.selectTeamMembers
    .container
        height 100%
        position fixed
        left 0
        right 0
        background-color #efefef
        .scroll-div
            height 100%
            overflow-y auto
            -webkit-overflow-scrolling touch
            padding-bottom 220px
            .item
                border 1px solid #eeee
                margin 30px 30px
                background #fff
                position relative
                &.groupItem:after
                    width 0
                    height 0
                    content ''
                    position absolute
                    top 0
                    left 0
                    border-top 100px solid #e6a23c
                    border-right 100px solid transparent
                h3
                    font-size 35px
                    margin 50px 0
                    text-align center
                .left-top
                    position absolute
                    top 15px
                    left 15px
                    color #fff
                    z-index 999
                    transform rotate(-45deg)
                .button-item
                    margin 50px 0
                    div
                        margin 0 auto
                        width 600px
                        text-align center
                        .el-button
                            padding 35px  0
                            width 250px
                            font-size 30px
                            &:last-child
                                margin-left 20px
                .add
                    text-align center
                    width 80px
                    height 80px
                    margin 62px auto
                    img 
                        max-width 100%
                .text
                    text-align center
                    margin 52px 0
                    font-size 30px
    .foot-div
        position fixed
        left 0
        right 0
        bottom 0
        padding 20px
        background #fff
        z-index 99
        button
            width 100%
            height 100px
            font-size 30px
</style>
