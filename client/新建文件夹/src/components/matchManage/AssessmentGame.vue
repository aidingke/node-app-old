<!-- 
* name: 比赛考核组件
* author: gxr
* time: 2018-8-3
-->
<template lang="pug">
    .assessmentGame
        Header(title="比赛考核")
        .teacher(v-if="roles===1")
            <el-row class="tab-cont">
                <el-col :span="12"><div class="tab" :class="tabValue ==1?'on':''" @click="tabChange(1)">实操</div></el-col>
                <el-col :span="12"><div class="tab" :class="tabValue ==2?'on':''" @click="tabChange(2)">理论</div></el-col>
            </el-row>
            template(v-if="tabValue ==1")
                ul.match-list
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            <el-button plain round>尚未开始</el-button>
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            <el-button plain round>评分</el-button>
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            .score
                                strong 98
                                em 分
            template(v-if="tabValue ==2")
                ul.match-list
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            <el-button plain round>批卷</el-button>
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            .score
                                strong 98
                                em 分
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            .score
                                strong 98
                                em 分
                    li.item
                        .match-name
                            span 周永宏
                            span.time 18级汽车空调专修第一组
                        .check-group
                            .score
                                strong 98
                                em 分
        .student(v-else)
            ul.match-list
                li.item(v-for="(item,index) of renderList" :key="index" @click="onLinkHandle(item)")
                    .match-name
                        span {{item.title}}
                        span.time {{item.startTime}} - {{item.endTime}}
                        span.matchDesc {{item.matchDesc}}
                    .check-group(v-if="item.score!==''")
                        .score
                            strong {{item.score}}
                            em 分
                    .check-group(v-else-if="item.type === 1 && item.score === ''")
                        <el-button @click="onLinkExam(index)" plain round>开始考试</el-button>
                    .type
                        span {{item.type === 1 ? '理论' : '实操'}}
</template>
<script>
    export default {
        name: 'AssessmentGame',
        data () {
            return {
                tabValue: 1,
                roles: 1,       //角色
                renderList: [ 
                    {
                        'title': '2018年汽车空调第2季度比赛1',
                        'type': 1,
                        'matchDesc': '汽车空调专修',
                        'startTime': '2018-05-16',
                        'endTime': '2018-05-16',
                        'score': '',
                    },
                    {
                        'title': '2018年汽车空调第2季度比赛2',
                        'type': 0,
                        'matchDesc': '汽车空调专修',
                        'startTime': '2018-05-16',
                        'endTime': '2018-05-16',
                        'score': '98',
                    }
                ]
            }
        },
        methods:{
            async getMatchTestList(){ //获取数据
                let params = {};
                params.matchId = this.$route.query.matchId;
                const res = await this.$axios.getMatchTestList(params);
            },
            tabChange(type) { //切换比赛状态
                this.tabValue = type;
            },
            onLinkHandle(item){ //查看详情
                if(item.type === 0 && item.score !== '') {
                    this.$router.push({
                        path: './SpeakingScore?matchId='+this.$route.query.matchId
                    });
                } else if (item.type === 1 && item.score !== '') {
                    this.$router.push({
                        path: './AnswerTestPaper?qbId='+qbId
                    });
                }
            },
            onLinkExam(qbId){ //前往考试
                this.$router.push({
                    path: './TestPaper?qbId='+qbId
                });
            },
        },
        mounted(){
            this.getMatchTestList();
        }
    }
</script>
<style lang="stylus">
.assessmentGame
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #efefef
    overflow-y hidden
    -webkit-overflow-scrolling touch
    z-index 3
    .tab-cont
        height 130px
        display flex
        justify-content center
        align-items center
        border-bottom 1px solid #d3d6db
        background #fff
        .tab
            text-align center
            font-size 36px
            line-height 130px
            margin 0 100px
        .on
            border-bottom 3px solid #138be7
    .match-list
        .item
            display flex
            align-items center
            justify-content space-between
            margin-top 30px
            padding 40px 30px
            background #fff
            font-size 35px
            position relative
            .match-name
                display flex
                flex-direction column
                flex 1
                .time
                    margin-top 20px
                    color #95989e
                    font-size 20px
            .check-group
                margin-left 20px
                button
                    min-width 240px
                    font-size 35px
                    margin 0 10px
                    padding 30px 50px
                    border-radius 50px
                .score
                    margin-right 20px
                    color #f56c6c
                    font-size 60px
                    em 
                        font-size 20px
                        font-style normal
                        margin-left 5px
    .student
        .match-list
            .match-name
                .time 
                    color #e6a23c
                    margin-top 40px
                .matchDesc
                    margin-top 10px
                    font-size 26px
            .type
                span
                    transform rotate(45deg)
                    position absolute
                    right 0px
                    top 18px
                    color #fff
                    font-size 28px
                    z-index 3
            .type:after
                    display block
                    content ''
                    width 0
                    height 0
                    border-width 0 110px 110px 0
                    border-style solid
                    border-color transparent #e6a23c transparent transparent
                    position absolute
                    right 0
                    top 0
</style>
