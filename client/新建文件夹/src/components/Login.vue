<!-- 
* name: 登录
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    div.login
        img.bg-img(src="static/img/binddevice_bg.png")
        .login-content
            h3.login-title  登录
            .input-box
                el-input(v-model="user.username",type="text",placeholder="账号",clearable,@focus="nullMsg=false,errShow=false")
                .icon
                    img(src="static/img/username.png")
            .input-box
                el-input(v-model="user.password",type="password",placeholder="密码",clearable,@focus="nullMsg=false,errShow=false")
                .icon
                    img(src="static/img/password.png")
            .err-msg(v-if="errShow") 密码输入有误
            .null-msg(v-if="nullMsg") 账号与密码不能为空
            .button-submit
                el-button(type="primary",@click="submitLogin") 立即登录
        WarningDialog(:warningText="warningText",:dialogTableVisible="showWarning",@closeWarning="closeWarning()")
</template>
<script>
    export default {
        name: 'Login',
        data () {
            return {
                user:{
                    userName:       '',
                    password:       ''
                },
                errShow:            false,
                nullMsg:            false,
                loginObject:        {},         //返回的数据对象
                warningText:        '',          //警告文字
                showWarning:        false,       //警告显隐
            }
        },
        methods:{
            async submitLogin(){
                if(this.user.username && this.user.password){       //如果账户密码不为空才请求数据
                    //跳转到绑定设备
                    let params = {
                        orgId:1,
                        userName:'ceshi',
                        password:123,
                        deviceMac:'12345611'
                    }
                    this.user.userName = params.userName;
                    this.user.password = params.password;
                    const res = await this.$axios.getLogin(params);
                    this.loginObject = Object.assign({},res);
                    sessionStorage.setItem("accessToken",this.loginObject.data.accessToken);        //存储token
                    localStorage.setItem("userType",this.loginObject.data.userType);                //存储用户类型
                    if(this.loginObject.data.isMac===1){                //已绑定
                        this.$router.push({
                            path:'/Home'
                        })
                    }else{                                              //未绑定
                        if(this.loginObject.data.userType===0){         //老师
                            this.warningText = "绑定设备授权数量已用完,若需要继续绑定,请与系统管理员联系";
                            this.showWarning = true;
                        }else if(this.loginObject.data.userType===1){   //学生
                            this.warningText = "该设备尚未绑定,请先联系老师";
                            this.showWarning = true;
                        }
                    }
                    this.$router.push({                             //跳转到绑定设备页面
                        path:'/BindDevice'
                    })
                }else{                                              //为空则显示提示
                    this.nullMsg = true
                }
            },
            //警告框关闭
            closeWarning(){
                this.showWarning = false
            },
        },
        mounted(){
            
        }
        
    }
</script>
<style lang="stylus">
.login   
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
    .login-content
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
        h3.login-title
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
        .err-msg,.null-msg
            color #e46969
            font-size 30px
            width 560px
            margin 10px auto
        .button-submit
            width 560px
            margin 40px auto
            button
                width 100%
                height 100px
                font-size 35px
        .remind
            width 560px
            margin 40px auto
            text-align center
            color #909399
            div
                margin 25px 0
                font-size 30px
</style>

