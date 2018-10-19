<template lang='pug'>
    <div class="teacher-deditor">
        Header(title="个人资料")
        .container
            nav
                span.left 基本信息
            ul
                li
                    .attribute 姓名
                        i *
                    .content
                        el-input(v-model="personObj.name")
                li
                    .attribute 手机号码
                        i *
                    .content
                        el-input(v-model="personObj.phone")
                li
                    .attribute 职务
                        i *
                    .content
                        el-input(v-model="personObj.job" :disabled="true")
                li
                    .attribute 性别
                        i *
                    .content
                        <el-radio v-model="personObj.sex" label="1">男</el-radio>
                        <el-radio v-model="personObj.sex" label="2">女</el-radio>
                li
                    .attribute 邮箱
                        i *
                    .content
                        el-input(v-model="personObj.email" :disabled="true")
                li
                    .attribute 入职时间
                    .content
                        el-input(v-model="personObj.entryTime")
                li
                    .attribute 出生年月
                    .content
                        el-input(v-model="personObj.dateBirth")
                li
                    .attribute 照片
                    .content(:style="{width:'110px',height:'110px'}")
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"><img v-if="imageUrl" :src="imageUrl" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i></el-upload>
                        span.addTip
                            | 请上传一张清晰的个人照片 
                            br
                            | 大小不超过2M
                li
                    .attribute 职称
                    .content
                        el-input(v-model="personObj.academic")
                li
                    .attribute 微信号
                    .content
                        el-input(v-model="personObj.weixin")
                li
                    .attribute QQ
                    .content
                        el-input(v-model="personObj.qq")
            FixedButton(buttonText='保存', @listenToChildEvent="save")
        WarningDialog(:warningText="warningText",:dialogTableVisible="showWarning",@closeWarning="closeWarning()")
    </div>
</template>
<script>
export default {
	name: 'TeacherDeditor',
	data() {
        return {
            styleObject:{
                height:'130px',
                lineHeight:'130px'
            },
            imageUrl:'',
			majorClass:{
				color:'#f56c6c',
				margin:'0 5px'
			},
            personObj:{
				name:'张海涛',
				phone:'13434302874',
				job:'电控电子任课老师',
				sex:'1',
				email:'06011720@163.com',
				entryTime:'2016-05-06',
				dateBirth:'1986-05-07',
				photo:'',
                academic:'1986-05-07',
                weixin:'',
                qq:''
            },
            showWarning:false,
            warningText:''
        }
    },
    methods:{
        edit(){
            this.$router.push({
		    	path:'/TeacherDeditor'
            })
        },
        closeWarning(){
            this.showWarning = false
        },
        handleAvatarSuccess(res, file) {
		    this.imageUrl = URL.createObjectURL(file.raw);
		},
        beforeAvatarUpload(file) {
            var this_ = this
            var reader = null;
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                    this_.errorTip('上传头像图片大小不能超过,2MB!');
                return false
            }
            reader = new window.FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (e) {
                // this_.uploadResques(e.target.result,file)
            }
        },
        save(data){
            this.showWarning = true;
            let res = this.personObj,
                re=/^1\d{10}$/,
                emailExp=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                qqPattern = /^[1-9][0-9]{4,10}$/;
            if(!res.name){                          // 姓名
                this.warningText = '请填写姓名';
                return false;
            }
            if(!res.phone){                        // 手机号码
				this.warningText = '请填写手机号码';
                return false;
            }
            if(!re.test(res.phone)){             // 手机号码验证
				this.warningText = '填写手机号码有误';
				return false;
   			}
            if(!res.job){                        // 职务
				this.warningText = '请填写职务';
                return false;
            }
            if(!res.sex){                        // 性别
			    this.warningText = '请选择性别';
                return false;
            }
            if(!res.email){                        // 邮箱
				this.warningText = '请填写邮箱';
                return false;
            }
   			if(!emailExp.test(res.email)){        // 邮箱验证
				this.warningText = '填写邮箱有误';
				return false;
            }
   			if(res.qq){
   			    if(!qqPattern.test(res.qq)){   // QQ号验证
					this.warningText = '填写QQ号有误';
					return false;
   				}
   			}
		    this.$router.push(
                {
                    name:'PersonalData'
                }
            );
        }
    }
}
</script>
<style lang="stylus">
    .teacher-deditor
        .container 
            height 100%
            background #efefef
            nav
                height 88px
                line-height 88px
                font-size 30px
                padding 15px 30px
                background #fff
                border-bottom 1px solid #efefef
                span.left 
                    float left
                    color #909399
            ul 
                font-size 28px
                overflow auto
                li
                    padding 30px 30px
                    background #fff
                    overflow hidden
                    display flex
                    position relative
                    div.attribute
                        flex 1
                        height 60px
                        line-height 60px
                        font-size 30px
                        display inline-block
                        i
                            color #f56c6c
                    div.content
                        flex 3
                        height 60px
                        line-height 60px
                        display inline-block
                        .avatar-uploader
                            display inline-block
                            .el-upload
                                border 1px dashed #dcdfe6
                                border-radius 8px
                                &:active
                                    border 1px dashed #1F7FC8
                                .avatar-uploader-icon
                                    width 200px
                                    height 200px
                                    line-height 200px
                                    text-align center
                                    font-size 100px
                                    color #dcdfe6
                        .addTip
                            display inline-block
                            margin-left 50px
                            color #c0c4cc
                        .el-input
                            width 400px
                        a
                            width 200px
                            height 200px
                            img
                                max-width 100%
</style>
