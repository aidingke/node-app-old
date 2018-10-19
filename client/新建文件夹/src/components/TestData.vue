<!-- 
* name: 检测数据
* author: cgc
* time: 2018-8-7
-->
<template lang='pug'>
    .test
        Header(title="检测数据")
        .module
            .title  电控系统
            hr
            .items-row
                .flex-auto 变速器油液位
                .flex-1 正常
            .items-row
                .flex-auto 变速器油散器有无漏油
                .flex-1 正常
                    
            .items-row
                .flex-auto 车辆提速性能
                .flex-1 正常
                    
            .items-row
                .flex-auto 变速器品质
                .flex-1 正常
                    
            .items-row
                .flex-auto 变速器油液位
                .flex-1 正常
                    
            .items-row
                .flex-auto 刹车软管
                .flex-1 正常
                    
            .items-row
                .flex-auto 变速器油液位
                .flex-1 正常

            .items-row
                .flex-auto 检查主继电器的供电电压
                .flex-1 正常

            .items-row
                .flex-auto 检查主继电器的供电电压
                .flex-1 25V
                    
            .items-row
                .flex-auto 检查主继电器的供电电压
                .flex-1 36V
                    
            .items-row
                .flex-auto 发动机故障码
                .flex-1 P068A,P1297
        .module
            .title 制冷系统
            hr
            .items-row
                .flex-auto 变速器油液位
                .flex-1 正常
            .items-row
                .flex-auto 变速油散热器有无漏油
                .flex-1 正常
            .items-row
                .flex-auto 车辆提速性能
                .flex-1 正常
            .items-row
                .flex-auto 变速器品质
                .flex-1 正常
        .module
            .title 自主添加检测项目
            hr
            .items-row
                .flex-auto 变速器油液位
                .flex-1 正常
            .items-row
                .flex-auto 变速器油散热器有无漏油
                .flex-1 正常
            .items-row
                .flex-auto 继电器电质
                .flex-1 56V
            .items-row
                .flex-auto 变速器品质
                .flex-1 正常
        .module
            .title 诊断结果
            hr
            .items-column 
                .results 如果高频率的使用空调,一些灰尘、渣辉都会在空调管路内累积下来,如果不及时清理,会导致阻塞与异响的问题
        .module
            .title 维修方式
            hr
            .card
                .nav
                    .title-left 维修方式
                .items-column 更换压缩机
                .items-column 清洗空调冷凝器
                .nav
                    .title-left 配件耗材
                .nav-text
                    .name 名称
                    .number 数量
                    .company 单位
                .accessories
                    .name 高压软管
                    .number 2
                    .company 个
                .accessories
                    .name 压缩机
                    .number 2
                    .company 件
                .accessories
                    .name 高压软管
                    .number 1
                    .company 米
        .module
            .title 诊断思路与总结
            hr
            .items-column
                .summary 汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车
        .module
            .title 老师评语
            hr
            .items-column
                .comments 汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车汽车电器设备构造汽车蓄电池汽车线路(电路)维修汽车空调维修与检测传感器汽车
        .grade
            span 98
</template> 
<script>
    export default {
        name:'TestData',
        data() {
            return {

            }
        },
        methods:{

        }
    }
</script>
<style lang="stylus">
.test
    background #efefef
    height 100%
    .module
        background #fff
        line-height 100px
        margin-bottom 20px
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
                color #000
                position relative
                font-size 26px
        .items-column
            padding 0 60px 0 60px
            background #fff
            margin 20px 0
            .results
                margin 20px 0 30px 0
                font-size 28px
            .summary
                font-size 28px
            .comments
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
                .name
                    width 40%
                    display inline-block
                .number
                    width 30%
                    display inline-block
                .company
                    width 30%
                    display inline-block
    .grade
        position absolute
        right 100px
        top 150px
        font-size 100px
        font-weight bold
        color #F56C6C
</style>

