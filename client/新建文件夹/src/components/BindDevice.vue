<!-- 
* name: 绑定设备号
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .bind
        img.bg-img(src="static/img/binddevice_bg.png")
        .bind-content
            h3.bind-title  绑定设备号
            .input-box
                el-input(v-model="deviceNum" placeholder="设备号",clearable)
                .icon
                    img(src="static/img/pad-icon.png")
            .button-submit
                el-button(type="primary",@click="binding") 立即绑定
            .repeatMsg(v-if="repeatShow") 跟现有设备重复
            .remind
                div 您尚未绑定设备号暂时无法登录
                |   
                div 绑定后无法更改 
        ConfirmDialog(confirmTitile="提示",:confirmText="confirmText",:dialogTableVisible="showConfirm",confirmTextButton="绑定",closeTextButton="取消",@determine="determine",@closeConfirm="closeConfirm")
        WarningDialog(:warningText="warningText",:dialogTableVisible="showWarning",@closeWarning="closeWarning()")
</template>
<script>
    export default {
        name: 'BindDevice',
        data () {
            return {
                deviceNum:          '',          //输入的设备号
                repeatShow:         false,       //重复信息提示显示

                showConfirm:        false,       //确认框显隐
                confirmText:        '',          //确认框提示文字

                warningText:        '',          //警告文字
                showWarning:        false,       //警告显隐
            }
        },
        methods:{
            determine(){        //点击弹框的确认按钮后
                if(true){
                    //跳转到首页
                    this.$router.push({
                        path:'/Home'
                    })
                }
            },
            //确认框关闭
            closeConfirm(){            //关闭弹框
                this.showConfirm = false
            },
            //警告框关闭
            closeWarning(){
                this.showWarning = false
            },
            //立即绑定
            binding(){
                let params = {
                    
                }

                if(this.deviceNum){
                    this.showConfirm = true
                    this.confirmText = '确定绑定设备号为' + this.deviceNum; 
                }else{
                    this.warningText = '设备号不能为空'
                    this.showWarning = true
                }
            }
        }
    }
</script>
<style lang="stylus">
.bind   
    .bg-img
        position fixed
        top 0
        left 0
        z-index -9999
        width 100%
        height 100%
        opacity 1
        transition opacity .3s ease
        box-sizing border-box
    .bind-content
        background-color #fff
        width 665px
        height 665px
        position absolute
        top 50%
        left 50%
        right 0
        bottom 0
        border-radius 10px
        transform translate(-50%, -50%)
        box-shadow 0px 0px 50px #b9cfdd
        h3.bind-title
            text-align center
            font-size 40px
            font-weight 100
            margin 50px 0
        .input-box
            width 560px
            margin 40px auto
            position relative
            input
                width 100%
                height 100px
                font-size 30px
                text-indent  65px
            .icon
                width 25px
                position absolute
                top 35px
                left 30px
                img 
                    width 100%
            .el-input 
                .el-input__suffix
                    top 45px
                    right 45px
                    .el-input__clear
                        font-size 40px
        .button-submit
            width 560px
            margin 40px auto
            button
                width 100%
                height 100px
                font-size 35px
        .repeatMsg
            color #E46969
            width 560px
            margin 10px auto
            font-size 30px
        .remind
            width 560px
            margin 40px auto
            text-align center
            color #909399
            div
                margin 25px 0
                font-size 30px
</style>

