<!-- 
* name: 比赛管理组件
* author: gxr
* time: 2018-8-2
-->
<template lang="pug">
    .matchManage
        Header(title="比赛管理")
        .srcoll-div
            <el-row class="tab-cont" v-if="roles === 1">
                <el-col :span="8"><div class="tab" :class="postData.matchType ===2?'on':''" @click="tabChange(2)">开始</div></el-col>
                <el-col :span="8"><div class="tab" :class="postData.matchType ===0?'on':''" @click="tabChange(0)">进行中</div></el-col>
                <el-col :span="8"><div class="tab" :class="postData.matchType ===1?'on':''" @click="tabChange(1)">已结束</div></el-col>
            </el-row>
            <el-row class="tab-cont" v-if="roles === 2">
                <el-col :span="12"><div class="tab" :class="postData.matchType ===0?'on':''" @click="tabChange(0)">进行中</div></el-col>
                <el-col :span="12"><div class="tab" :class="postData.matchType ===1?'on':''" @click="tabChange(1)">已结束</div></el-col>
            </el-row>
            ul.match-list(v-if="renderList.length>0")
                li.item(v-for="(item,key) of renderList" :key="item.matchId")
                    .match-name
                        span {{item.matchTitle}}
                        span.time {{item.matchTime}}
                    .check-group(v-if="roles==1")
                        <el-button @click="onLinkGroupList" plain round>编辑比赛</el-button>
                    .check-group(v-else)
                        <el-button @click="onLinkGroup(item.matchId)" plain round>比赛分组</el-button>
                        <el-button @click="onLinkTestList(item.matchId)" plain round>考试答题</el-button>
                        <el-button @click="onLinkTestList(item.matchId)" plain round>查看结果</el-button>
            .addMatch-cont(v-if="roles==1" @click="centerDialogVisible=true")
                .add-btn
                    span.el-icon-plus.avatar-uploader-icon
                    span 新增比赛

        <el-dialog class="dialogBox" title="添加比赛" :visible.sync="centerDialogVisible" width="50%" center>
            <el-form ref="form" label-position="top" :model="form" label-width="80px">
                <el-form-item label="比赛时间">
                    <el-col :span="11">
                        <el-date-picker v-model="form.startTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="开始时间"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                        <el-date-picker v-model="form.endTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="结束时间"></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="主题">
                    <el-input v-model="form.matchName"></el-input>
                </el-form-item>
                <el-form-item class="theory-item" label="理论考试">
                    <el-checkbox v-model="form.theoryFlag" label="有" true-label="1" false-label="0"></el-checkbox>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addMatchManage">新 增</el-button>
                <el-button @click="centerDialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
        .noData(v-if="renderList.length===0")
            img(src="static/img/no-data-icon.png")
            p 暂无相关数据
</template>
<script>
    export default {
        name: 'MatchManage',
        data () {
            return {
                centerDialogVisible: false,
                roles: 1, //角色
                postData: { //请求参数
                    matchType: 0, //比赛状态 0-进行中，1-已结束
                    pageNo: 1,
                    pageSize: 10
                },
                form: {
                    theoryFlag: 0,
                },
                isNoData: false,
                renderList: [
                ],
            }
        },
        methods:{
            async getTeachMatchList() { //获取数据
                const res = await this.$axios.getTeachMatchList(this.postData);
            },
            onLinkTestList(matchId){ //查看考核结果
                this.$router.push({
                    path: './AssessmentGame?matchId='+matchId
                });
            },
            onLinkGroup(matchId) { //查看组成员
                this.$router.push({
                    path: './GroupMembers?matchId='+matchId
                });
            },
            onLinkGroupList(item) {//查看分组
                if(this.roles == 1) {
                    this.$router.push({
                        path: './GroupList?matchId='+item.matchId
                    });
                }
            },
            tabChange(type) { //切换比赛状态
                this.postData.matchType = type;
            },
            async addMatchManage() { //添加比赛
                let tempObj = {};
                tempObj.matchName = this.form.matchName;
                tempObj.startTime = this.form.startTime;
                tempObj.endTime = this.form.endTime;
                tempObj.theoryFlag = this.form.theoryFlag;
                this.renderList.unshift(tempObj);
                this.centerDialogVisible = false;
                console.log(tempObj);
                const res = await this.$axios.editTeachMath(tempObj);
            },
        },
        mounted(){
            if(sessionStorage.getItem("roles") == 2) { //学生 
                this.roles = 2;
            }
            this.getTeachMatchList();
        }
    }
</script>
<style lang="stylus">
.matchManage
    .srcoll-div
        position fixed
        left 0
        top 88px
        width 100%
        height 100%
        background #efefef
        overflow-y auto
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
                font-size 35px
                line-height 130px
                margin 0 100px
            .on
                border-bottom 3px solid #138be7
        .match-list
            .item
                display flex
                align-items center
                justify-content space-between
                margin-top 20px
                padding 40px 30px
                background #fff
                font-size 35px
                .match-name
                    display flex
                    flex-direction column
                    flex 1
                    .time
                        margin-top 20px
                        color #95989e
                        font-size 26px
                .check-group
                    margin-left 20px
                    button
                        font-size 35px
                        margin 0 10px
                        padding 30px 50px
                        border-radius 50px
        .addMatch-cont
            position fixed
            right 30px
            bottom 50px
            width 160px
            height 160px
            border-radius 100%
            background #148ce8
            border 10px solid #bcdef8
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
    .dialogBox
        .el-dialog__header
            padding 30px 20px 10px
            .el-dialog__title
                font-size 40px
                line-height 80px
                font-weight 700
            .el-dialog__headerbtn
                font-size 60px
                top 40px
        .el-dialog__body
            padding 25px 50px 30px
            .el-form-item
                margin-bottom 50px
                .el-form-item__label 
                    font-size 30px
                    margin-bottom 20px
                .el-form-item__content
                    font-size 30px
                    line-height 80px
                    text-align center
                    .el-input__inner
                        height 80px
                        line-height 80px
                        font-size 30px
                        padding-right 60px
                    .el-input__prefix
                        right 10px
                        left auto
                        .el-input__icon
                            font-size 40px
                            width 40px
                    .el-checkbox
                        font-size 30px
                        .el-checkbox__label
                            font-size 30px
                            padding-left 30px
                            color #303133
                        .el-checkbox__inner
                            width 50px
                            height 50px
                        .el-checkbox__inner::after
                                border-width 3px
                                height 32px
                                left 16px
                                width 13px
            .theory-item
                .el-form-item__label
                    float left
                    margin-bottom 0
                    line-height 80px
                .el-form-item__content
                    text-align left
                    margin-left 200px
        .el-dialog__footer 
            .el-button
                font-size 30px
                padding 30px 100px
                margin 0 20px
    .noData
        position relative
        margin-top 500px 
        padding 0 30px
        font-size 40px
        text-align center
        z-index 4
        img 
            width 480px
            margin-bottom 20px
.el-date-picker
    overflow hidden
</style>
