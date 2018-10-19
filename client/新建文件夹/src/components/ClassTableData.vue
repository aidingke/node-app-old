<!-- 
* name: 班级课程表 | 数据诊断
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .class
        Header(title="班级课程表")
        .container
            //第一行
            .row
                .col(@click="isCheck = 'elec-control', clickDialog('电控')")
                    a(href="javascript:void(0)", :class="{ 'elec-control': true, 'active': isCheck === 'elec-control' }") 
                    span 电控
                |
                .col(@click="isCheck = 'refrigeration', clickDialog('制冷')")
                    a(href="javascript:void(0)", :class="{ 'refrigeration': true, 'active': isCheck === 'refrigeration' }")
                    span 制冷
                |
                .col(@click="isCheck = 'fluid', clickDialog('流体')")
                    a(href="javascript:void(0)", :class="{ 'fluid': true, 'active': isCheck === 'fluid' }")
                    span 流体
            //第二行
            .row
                .col(@click="isCheck = 'mechanics', clickDialog('机械')")
                    a(href="javascript:void(0)", :class="{ 'mechanics': true, 'active': isCheck === 'mechanics' }")
                    span 机械
                |
                .col(@click="isCheck = 'security-check', clickDialog('安检')")
                    a(href="javascript:void(0)", :class="{ 'security-check': true, 'active': isCheck === 'security-check' }")
                    span 安检
                |
                .col(@click="isCheck = 'used-car-test', clickDialog('二手车检测')")
                    a(href="javascript:void(0)", :class="{ 'used-car-test': true, 'active': isCheck === 'used-car-test' }")
                    span 二手车检测
            //第三行
            .row
                .col(@click="isCheck = 'full-vehicle', clickDialog('全车检测')")
                    a(href="javascript:void(0)", :class="{ 'full-vehicle': true, 'active': isCheck === 'full-vehicle' }")
                    span 全车检测
                |
                .col(@click="isCheck = 'compre-diag', clickDialog('综合诊断')")
                    a(href="javascript:void(0)", :class="{ 'compre-diag': true, 'active': isCheck === 'compre-diag' }")
                    span 综合诊断
                |
                .col(:style="{visibility:'hidden'}")
                    a(href="javascript:void(0)")
        el-dialog(:visible.sync="dialogTableVisible" width="545px")
            .window
                h3  {{title}}
                .item   故障现象
                |
                .item   前面凉后面不良
                |
                .item   中间出风口凉两边不凉
                |
                .item   早上凉晚上不凉
                .item-input
                    el-input(placeholder="请输入内容", @input="descInput", v-model="desc", maxlength="20") 
                    span {{remnant}}/20
                    .dele
                        img(src="static/img/dele-item.png")
                .item-input
                    el-input(placeholder="请输入内容", @input="descInput", v-model="desc", maxlength="20") 
                    span {{remnant}}/20
                    .dele
                        img(src="static/img/dele-item.png")
                .item-input
                    el-input(placeholder="请输入内容", @input="descInput", v-model="desc", maxlength="20") 
                    span {{remnant}}/20
                    .dele
                        img(src="static/img/dele-item.png")
                .button-item
                    div
                        el-button(type="primary") 确定
                        |
                        el-button(plain="",@click="dialogTableVisible = false") 取消
</template>
<script>
    export default {
        name: 'ClassTimeTable',
        data () {
            return {
                isCheck:            '',
                dialogTableVisible: false,
                input:              '',
                remnant:            0,
                desc:               '',
                title:              '',
                authority:          'student'
            }
        },
        methods:{
            clickDialog(n){
                this.title = n;
                this.dialogTableVisible = true;
            },
            descInput(){
                let txtVal = this.desc.length;
                this.remnant = 0 + txtVal;
            }
        }
    }
</script>
<style lang="stylus">
.class
    .container 
        display flex
        flex-direction column
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
                    margin-top 80px
                    background-size contain !important
                    width 130px
                    height 130px
                    display inline-block
                a.elec-control
                    background url(/static/img/elec-control.png) no-repeat
                    &.active
                        background url(/static/img/elec-control-check.png) no-repeat
                a.refrigeration
                    background url(/static/img/refrigeration.png) no-repeat
                    &.active
                        background url(/static/img/refrigeration-check.png) no-repeat
                a.fluid
                    background url(/static/img/fluid.png) no-repeat
                    &.active
                        background url(/static/img/fluid-check.png) no-repeat
                a.mechanics
                    background url(/static/img/mechanics.png) no-repeat
                    &.active
                        background url(/static/img/mechanics-check.png) no-repeat
                a.mechanics
                    background url(/static/img/mechanics.png) no-repeat
                    &.active
                        background url(/static/img/mechanics-check.png) no-repeat
                a.security-check
                    background url(/static/img/security-check.png) no-repeat
                    &.active
                        background url(/static/img/security-check-check.png) no-repeat
                a.used-car-test
                    background url(/static/img/used-car-test.png) no-repeat
                    &.active
                        background url(/static/img/used-car-test-check.png) no-repeat
                a.full-vehicle
                    background url(/static/img/full-vehicle.png) no-repeat
                    &.active
                        background url(/static/img/full-vehicle-check.png) no-repeat
                a.compre-diag
                    background url(/static/img/compre-diag.png) no-repeat
                    &.active
                        background url(/static/img/compre-diag-check.png) no-repeat
                span
                    display block
                    font-size 30px
                    padding 69px
    .window
        h3
            font-size 40px
            color #000
            text-align center
        .item 
            font-size 35px
            margin 50px 30px
        .button-item
            div
                margin 0 auto
                width 600px
                text-align center
                .el-button
                    padding 35px  90px
                    font-size 30px
                    &:last-child
                        margin-left 20px
        .item-input
            position relative
            margin 50px 120px 50px 30px
            input[type='text']
                height 100px
                font-size 30px
            span
                position absolute
                right 20px
                top 0
                font-size 30px
                padding 30px 20px
                color #c0c4cc
            .dele
                position absolute
                right -70px
                top 0
                padding 31px 20px
                border-top 1px solid #dcdfe6
                border-bottom 1px solid #dcdfe6
                border-right 1px solid #dcdfe6
                img
                    vertical-align middle
</style>
