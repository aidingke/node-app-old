<template lang="pug">
    .personalCenter
        .line
            p.navigation 
                img.img-fl(src="static/img/gb.png" @click="goback")
                img.img-fr(src="static/img/lj.png")
            img.imgCity(src="static/img/cityCenter.png")
        .name-text
            p.text  张建荣
            span.figure-head
                img.img-logo(src="static/img/logo.png")
        el-row.content
            el-col.ul(:span="24") 
                el-col.cross(:span="24")
                    span
                        img.pan(src="static/img/panb.png")
                    span.data-name 个人资料
                    b.into(@click="personalData")
                el-col.cross(:span="24")
                    span
                        img.pan(src="static/img/passwordblue.png")
                    span.data-name 修改密码
                    b.into(@click="skipPassWord")
        el-col.btn-parent(:span="24") 
            .btn(:span="24" @click="signOut") 退出       
</template>
<script>
export default {
	name: 'personalCenter',
	data() {
		return {
			dialogVisible: false
		}
	},
	methods: {
	        goback(){
	        	this.$router.push(
                    {
                        path:'Home'
                    }
                );
	        },
            skipPassWord(){
				this.$router.push(
                    {
                        path:'PassWord'
                    }
                );
            },
            personalData(){
				this.$router.push(
                    {
                        path:'PersonalStudent'
                    }
                );
            },
	        signOut(){
		        this.$confirm('确定退出登录？', '提示', {
		           cancelButtonText: '取消',
		           confirmButtonText: '退出',
			    }).then(() => {
			        this.$router.push({name:'StartPage'});
			    }).catch(() => {
			        
			    });
		    }
	    }
	}
</script>
<style lang="stylus">
.personalCenter 
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    padding-bottom 1rem
    background #e5e5e5
    overflow hidden
    box-sizing border-box
	.line 
        width 100%
        background #138be7
		.navigation 
            overflow hidden
            padding 0.3rem
			.img-fl
                float left
                width 2%
                cursor pointer
			
			.img-fr
                float right
                width 3.5%
                cursor pointer
		
		.img-city 
            width: 100%
            padding-top:1rem
    .name-text
        position relative
        box-sizing border-box
        min-height 2rem
        background #fff
        padding-top 1rem
        .text
           text-align center
           font-size 0.38rem
		
		.figure-head
            box-sizing border-box
            position absolute
            top -50%
            width 200px
            height 200px
            background #fff
            left 50%
            transform translate(-50%,0%)
            border-radius 50%
            display block
            overflow hidden
            .img-logo
                display block
                width 100%
	
	.content
        padding 0.2rem
		.ul
            background #fff
            .cross
                position relative
                padding 20px
                border-bottom 1px solid #e5e5e5
                padding 30px
			.pan
                width 3.2%
                vertical-align bottom
              
	        .data-name
	           	padding-left 20px
	           	font-size .38rem
	          
	        .into
	          	position absolute
	          	right 20px
	          	top 10px
	          	display block
	          	width 30px
	          	height 50px
	          	background url('../../../static/img/acj.png')
	          	background-size 100% 100%
	          	transform translate(0%,50%)
	          	cursor pointer
	          
	.btn-parent
		position absolute
		bottom 0
		left 0
		width 100%
		background #fff
		padding 20px
		.btn
            padding 30px
            text-align center
            color #fff
            background #138be7
            font-size .38rem
            cursor pointer
</style>
