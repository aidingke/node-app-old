<!-- 
* name: 录入检测数据
* author: cgc
* time: 2018-8-7
-->
<template lang="pug">
    .entry
        Header(title="录入检测数据")
        .module
            .title  电控系统
            hr
            .items-row
                .flex-auto 变速器油液位
                .flex-1
                    el-radio(v-model="elecControlSys.oilLevelGearbox" label="1") 正常
                    el-radio(v-model="elecControlSys.oilLevelGearbox" label="2") 液位低于下限
            .items-row
                .flex-auto 变速器油散器有无漏油
                .flex-1
                    el-radio(v-model="elecControlSys.oilSpill" label="1") 正常
                    el-radio(v-model="elecControlSys.oilSpill" label="2") 液位低于下限
            .items-row
                .flex-auto 车辆提速性能
                .flex-1
                    el-radio(v-model="elecControlSys.speedSaising" label="1") 正常
                    el-radio(v-model="elecControlSys.speedSaising" label="2") 液位低于下限
            .items-row
                .flex-auto 变速器品质
                .flex-1
                    el-radio(v-model="elecControlSys.quality" label="1") 正常
                    el-radio(v-model="elecControlSys.quality" label="2") 液位低于下限
            .items-row
                .flex-auto 变速器油液位
                .flex-1
                    el-radio(v-model="elecControlSys.oilLevel" label="1") 正常
                    el-radio(v-model="elecControlSys.oilLevel" label="2") 液位低于下限
            .items-row
                .flex-auto 刹车软管
                .flex-1
                    el-radio(v-model="elecControlSys.brakeHose" label="1") 正常
                    el-radio(v-model="elecControlSys.brakeHose" label="2") 液位低于下限
            .items-row
                .flex-auto 变速器油液位
                .flex-1
                    el-radio(v-model="elecControlSys.oilLevel2" label="1") 正常
                    el-radio(v-model="elecControlSys.oilLevel2" label="2") 液位低于下限
            .items-row
                .flex-auto 检查主继电器的供电电压
                .flex-1
                    el-input(v-model="elecControlSys.powerSupply",placeholder="供电电压")
                    .text-v V
            .items-row
                .flex-auto 检查主继电器的供电电压
                .flex-1
                    el-input(v-model="elecControlSys.powerSupply2",placeholder="供电电压")
                    .text-v V
            .items-row
                .flex-auto 发动机故障码
                .flex-1
                    el-input(v-model="elecControlSys.faultCode")
        .module
            .title 制冷系统
            hr
            .items-row
                .flex-auto 变速器油液位
                .flex-1
                    el-radio(v-model="refSystem.oilLevelGearbox" label="1") 正常
                    el-radio(v-model="refSystem.oilLevelGearbox" label="2") 液位低于下限
            .items-row
                .flex-auto 检查主继器的供电电压
                .flex-1
                    el-input(v-model="refSystem.powerSupply",placeholder="供电电压")
                    .text-v V
            .items-row
                .flex-auto 检查主继器的供电电压
                .flex-1
                    el-input(v-model="refSystem.powerSupply2",placeholder="供电电压")
                    .text-v V
            .items-row
                .flex-auto 发动机故障码
                .flex-1
                    el-input(v-model="refSystem.faultCode",placeholder="输入多个故障码请用 \",\" 隔开")
                    el-input(v-model="refSystem.faultCode",placeholder="输入多个故障码请用 \",\" 隔开")
        .module
            .title 自主添加检测项目
            .add(@click="add") 添加
            hr
            .items-column(v-for="(items,index) in selfAdded",:key="index")
                el-input(v-model="items.detectionProject",placeholder="检测项目")
                el-input(v-model="items.detectionData",placeholder="数据")
                .dele(@click="deleSD(index)")
                    img(src="static/img/dele-item.png")
        .module
            .title 诊断结果
            hr
            .items-column
                el-input(type="textarea"
                :rows="5"
                placeholder="请输入诊断结果"
                v-model="diagnosticResults")
        .module
            .title 维修方式
            hr
            .card
                .nav
                    .title-left 维修方式
                    .add-right 新增
                .items-column(v-for="(items,index) in maintenanceProject")
                    el-input(v-model="items.item",placeholder="维修项目")
                    .dele(@click="deleMP(index)")
                        img(src="static/img/dele-item.png")
                .nav
                    .title-left 配件耗材
                    .add-right 新增
                .nav-text
                    .name 名称
                    .number 数量
                    .company 单位
                .accessories(v-for="(items,index) in accessories",:key="index")
                    el-input(v-model="items.name",placeholder="配件耗材") 名称
                    el-input(v-model="items.number") 数量
                    el-input(v-model="items.company") 单位
                    .dele(@click="deleAC(index)")
                        img(src="static/img/dele-item.png")
        .module
            .title 诊断思路与总结
            hr
            .items-column
                el-input(type="textarea"
                :rows="5"
                placeholder="诊断思路与总结"
                v-model="summary")

        .submit
            el-button(type="primary",v-model="submit") 提交
</template>
<script>
    export default {
        name: 'EntryTestData',
        data () {
            return {
                elecControlSys:{                      //电控系统
                    oilLevelGearbox:            '1',  //变速器油液位
                    oilSpill:                   '1',  //变速器油散热器有无漏油
                    speedSaising:               '1',  //车辆提速性能
                    quality:                    '1',  //变速器品质
                    oilLevel:                   '1',  //变速器油液位 -1
                    brakeHose:                  '1',  //刹车软管
                    oilLevel2:                  '1',  //变速器油液位 -2
                    powerSupply:                '',   //检查主继器的供电电压 -1
                    powerSupply2:               '',   //检查主继器的供电电压 -2
                    faultCode:                  ''    //发动机故障码
                },
                refSystem:{                           //制冷系统
                    oilLevelGearbox:            '1',  //变速器油液位
                    powerSupply:                '',   //检查主继器的供电电压 -1
                    powerSupply2:               '',   //检查主继器的供电电压 -2
                    faultCode:                  ''    //发动机故障码
                },
                selfAdded:[                           //自主添加检测项目
                    {
                        detectionProject:       '',   //检测项目
                        detectionData:          ''    //数据
                    },
                    {
                        detectionProject:       '',   //检测项目
                        detectionData:          ''    //数据
                    },
                    {
                        detectionProject:       '',   //检测项目
                        detectionData:          ''    //数据
                    },
                    {
                        detectionProject:       '',   //检测项目
                        detectionData:          ''    //数据
                    },
                ],
                diagnosticResults:              '',   //诊断结果
                maintenanceProject:[                  //维修项目
                    {
                        item:                   ''
                    },
                    {
                        item:                   ''   
                    },
                    {
                        item:                   ''   
                    }
                ],                                  //维修项目
                accessories:[
                    {
                        name:                   '',
                        number:                 '',
                        company:                ''
                    },
                    {
                        name:                   '',
                        number:                 '',
                        company:                ''
                    },
                    {
                        name:                   '',
                        number:                 '',
                        company:                ''
                    }
                ],
                summary:                        '',
                submit:                         ''
            }
        },
        methods:{
            add(){
                this.selfAdded.push({detectionProject:'',detectionData:''})
            },
            deleSD(index){
                this.selfAdded.splice(index,1);
            },
            deleMP(index){
                this.maintenanceProject.splice(index,1);
            },
            deleAC(index){
                this.accessories.splice(index,1);
            }
        }
    }
</script>
<style lang="stylus">
.entry
    background #efefef
    height 100%
    .module
        background #fff
        line-height 100px
        margin-bottom 20px
        .dele
            display inline-block
            width 4%
            text-align center
            height 73px
            line-height 73px
            border-top 1px solid #dcdfe6
            border-left 1px solid #dcdfe6
            border-bottom 1px solid #dcdfe6
            border-right 1px solid #dcdfe6
            box-sizing border-box
            img
                max-width 100%
                vertical-align middle
        .title
            height 100px
            line-height 100px
            font-size 30px
            color #606266
            padding 0 60px 0 60px
            display inline-block
        hr
            margin 0
            border none
            height 2px
            background #efefef
        .add
            float right 
            font-size 30px
            margin-right 30px
            color #138BE7
        .items-row
            padding 0 60px 0 60px
            display flex
            flex-direction row
            background #fff
            .flex-auto
                font-size 26px
                width 400px
            .flex-1
                flex 1
                color #eee
                position relative
                .el-input
                    width 400px
                .text-v
                    position absolute
                    font-size 30px
                    left 360px
                    top 0
                    color #303133
        .items-column
            padding 0 60px 0 60px
            background #fff
            margin 20px 0
            .el-input
                display inline-block
                width 48%
                .el-input__inner
                    height: 73px;
                    line-height: 73px;
                    &:nth-child(1)
                        border-radius inherit 
            .el-textarea
                margin 20px 0 30px 0
                textarea
                    font-size 28px
        .card
            border-radius 5px
            border:1px solid #c0c4cc
            margin 50px
            font-size 30px
            .nav
                background #efefef
                .title-left
                    height 100px
                    line-height 100px
                    font-size 30px
                    color #606266;
                    padding 0 60px 0 60px
                    display inline-block
                .add-right
                    float right 
                    font-size 30px
                    margin-right 30px
                    color #138BE7
            .items-column
                .el-input
                    width:96%
                    .el-input__inner
                        font-size 30px
                        height 73px
                        line-height 73px
                        &:nth-child(1)
                            border-right none
                .dele
                    width:4%
            .nav-text
                padding 0 60px 0 60px
                margin 20px 0
                .name
                    width 40%
                    display inline-block
                .number
                    width 30%
                    display inline-block
                .company
                    width 30%
                    display inline-block
            .accessories
                padding 0 60px 0 60px
                margin 20px 0
                .el-input
                    &:nth-child(1)
                        width:36%
                    &:nth-child(2)
                        width:30%
                    &:nth-child(3)
                        width:30%
                .dele
                    width 4%

    .submit
        text-align center
        padding 20px 0
        background #fff
        .el-button
            width 90%
            height 60px
            font-size 30px
</style>
