<!-- 
* name: 组列表
* author: gxr
* time: 2018-8-9
-->
<template lang="pug">
    .groupList
        Header(title="比赛组")
        .container
            el-row(class="scroll-div")
                el-col(:span="12",v-for="(item,index) in renderList",:key="index") 
                    .item.groupItem
                        h3 {{item.groupName}}
                        .left-top {{index+1}}组
                        .button-item
                            div
                                el-button(plain @click="onViewGroupMembers(1)") 成员({{item.stuNum}})
                                |
                                el-button(plain @click="onViewResult(1)") 考核结果
                |
                el-col(:span="12" v-if="matchStatus === 0")
                    .item(@click="dialogVisible.addGroupDialog = true")
                        .add
                            img(src="static/img/add.png")
                        .text 添加组
                        
        .default-container(v-if="renderList.length === 0") 
            .default
                img(src="static/img/class-default.png")
                .not-class  暂无相关比赛组信息
                .add-text   请先添加比赛组
                el-button(plain) 添加比赛组
        .addMatch-cont.edit(@click="dialogVisible.editDialog=true")
                .add-btn
                    span.el-icon-plus.el-icon-edit-outline
                    span 编辑信息
        .addMatch-cont(@click="dialogVisible.addTestDialog=true")
                .add-btn
                    span.el-icon-plus.avatar-uploader-icon
                    span 新增试题
        <el-dialog class="dialogBox" title="添加组" :visible.sync="dialogVisible.addGroupDialog" width="50%" center>
            <el-form ref="form" label-position="top" :model="form" label-width="80px">
                <el-form-item label="比赛组名称">
                    <el-input v-model="form.matchName"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="onAddGroup">新 增</el-button>
                <el-button @click="dialogVisible.addGroupDialog = false">取 消</el-button>
            </span>
        </el-dialog>
        <el-dialog class="dialogBox" title="编辑比赛" :visible.sync="dialogVisible.editDialog" width="50%" center>
            <el-form ref="form" label-position="top" :model="form" label-width="80px">
                <el-form-item label="比赛时间">
                    <el-col :span="11">
                        <el-date-picker v-model="form.startTime" @change="dateChangeTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date"  placeholder="开始时间"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                        <el-date-picker v-model="form.endTime" @change="dateChangeTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="结束时间"></el-date-picker>
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
                <el-button type="primary" @click="onSaveMatchManage">保 存</el-button>
                <el-button @click="dialogVisible.editDialog = false">取 消</el-button>
            </span>
        </el-dialog>
</template>
<script>
    export default {
        name: 'GroupList',
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
                form: {},
                dialogVisible: { //对话框状态
                    addGroupDialog: false, //添加比赛组
                    editDialog: false, //编辑比赛
                    addTestDialog: false,//添加比赛试题
                }
            }
        },
        methods:{
            handleDialog(){
                this.dialogTableVisible = true;
            },
            dateChangeTime() {

            },
            onAddGroup() {
                console.log('添加组');
            },
            onSaveMatchManage() {
                console.log('保存编辑信息');
            },
            onViewResult(matchId) { //查看考核结果
                this.$router.push({
                    path: './AssessmentGame?matchId='+matchId
                });
            },
            onViewGroupMembers(matchId) { //查看组成员
                 this.$router.push({
                    path: './GroupMembers?matchId='+matchId
                });
            }
        }
    }
</script>
<style lang="stylus">
.groupList
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
            padding-bottom 120px
            .item
                border 1px solid #eeee
                margin 30px 30px
                background: #fff
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
    .default-container
        height 100%
        position fixed
        left 0
        right 0
        background #fff
        .default
            width 400px
            position absolute
            left 50%
            top 30%
            transform: translate(-50%,-50%)
            img
                max-width 100%
            .not-class
                font-size 40px
                text-align center
                color #9b9b9b
                margin 30px 0 0 0
            .add-text
                font-size 20px
                text-align center
                color #a5a5a5
                margin 30px 0 50px 0
            .el-button
                width 100%
                padding 30px 20px
                font-size 30px
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
</style>
