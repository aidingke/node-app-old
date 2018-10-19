<template lang="pug">
	div.personalData
	  Header(title="个人资料")
	  div.editorContent
	     div.titte 基本信息
	     div.content
	       div(v-for="items in arr") 
	        ul(v-if="items.type=='input'")
	          li {{items.name}}
	            span(v-if="items.Required") *
	          li 
	           input.input(type="text" v-model="items.val" :placeholder="items.tip")
	        ul(v-if="items.type=='radio'")
	          li {{items.name}}
	           span(v-if="items.Required") *
	          li
	           <el-radio v-model="items.val" label="1">男</el-radio>
	           <el-radio v-model="items.val" label="2">女</el-radio>
	        ul(v-if="items.type=='select'") 
	          li {{items.name}}
	          li
	            <el-date-picker v-model="items.val" type="date" placeholder="选择日期"> </el-date-picker>
	        ul(v-if="items.type=='photo'")
	          li {{items.name}}
	          li
	           <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"><img v-if="imageUrl" :src="imageUrl" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i></el-upload>
	           span.addTip 请上传一张清晰的个人照片 </br>大小不超过2M    
	  el-col.btnParent(:span="24") 
	    div.btn(:span="24" @click="teacherSave") 保存   
</template>
<script>
import gb from '../../../static/img/gb.png';
import lj from '../../../static/img/lj.png';
import logo from '../../../static/img/logo.png';
import panb from '../../../static/img/panb.png';
import rightpw  from '../../../static/img/success.png';
import morePng from '../../../static/img/more.png';
export default {
	name: 'personalData_fuben',
	data() {
		return {
			imgGb: gb,
			imglj: lj,
			imgLogo:logo,
			imgpanb:panb,
			imgRightpw:rightpw,
            imageUrl:'',
            imgMore:morePng,
            value1:'',
            arr:[
             {
             	name:'姓名',
             	type:'input',
             	val:'',
             	Required:true,
             	tip:'请填写姓名'
             },
             {
             	name:'手机号码',
             	type:'input',
             	val:'',
             	Required:true,
             	tip:'请填写手机号码'
             },
             {
             	name:'职务',
             	type:'input',
             	val:'',
             	Required:true,
             	tip:'请填写职务'
             },
             {
             	name:'性别',
             	type:'radio',
             	val:'',
             	Required:true,
             	tip:'请填写性别'
             },
             {
             	name:'邮箱',
             	type:'input',
             	val:'',
             	Required:true,
             	tip:'请填写邮箱'
             },
             {
             	name:'入职时间',
             	type:'select',
             	val:'',
             	Required:false,
             	tip:'请选择入职时间'
             },
             {
             	name:'出生年月',
             	type:'select',
             	val:'',
             	Required:false,
             	tip:'请选择出生年月'
             },
             {
             	name:'照片',
             	type:'photo',
             	val:'',
             	Required:false,
             	tip:'请添加照片'
             },
              {
             	name:'职称',
             	type:'input',
             	val:'',
             	Required:false,
             	tip:'请填写职称'
             },
              {
             	name:'微信号',
             	type:'input',
             	val:'',
             	Required:false,
             	tip:'请填写微信号'
             },
             {
             	name:'QQ',
             	type:'input',
             	val:'',
             	Required:false,
             	tip:'请填写QQ号'
             }
            ]
		}
	},
	watch:{
		arr:{
			handler:function(item,oldItem){
				item[1].val=item[1].val.replace(/[^1-9]/g,''); // 手机号码只能输入数字
				item[4].val=item[4].val.replace(/[\u4e00-\u9fa5]/ig,'') // 邮箱不能输入中文
				item[9].val=item[9].val.replace(/[\u4e00-\u9fa5]/ig,'')	// 微信号不能输入中文
			    item[10].val=item[10].val.replace(/[\u4e00-\u9fa5]/ig,'') // QQ号不能输入中文
			},
			deep:true
		}
	},
	methods: {
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
	        uploadResques:function(baseFile,file){//上传参数
	        	var params={
	        		reqAct:'uploadPic',
	        		file:baseFile
	        	}
	        	return new Promise(resolve =>{
			        	$http.post('/csc-demo/p/parts',qs.stringify(params)).then(data => {
			        		console.log(2112)
		                resolve(data)
           	 		})
	        	})
	        },
	        Goback:function(){
	        	this.$router.push({name:'PersonalData'});
	        },
	        errorTip:function(content){
		        this.$alert(content, '提示', {
		          confirmButtonText: '知道了',
		          callback: action => {

		          }
		        });
		    },
		    teacherSave:function(){
                  var data=this.arr,
                      re=/^1\d{10}$/,
                      emailExp=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                      qqPattern = /^[1-9][0-9]{4,10}$/;
                 if(!data[0].val){ // 姓名
                    this.errorTip('请填写姓名');
                  	return false;
                 }
                 if(!data[1].val){ // 手机号码
					this.errorTip('请填写手机号码');
                  	return false;
                 }
                 if(!re.test(data[1].val)){ // 手机号码验证
					this.errorTip('填写手机号码有误');
					return false;
   				 }
                 if(!data[2].val){// 职务
					this.errorTip('请填写职务');
                  	return false;
                 }
                 if(!data[3].val){ // 性别
					this.errorTip('请选择性别');
                  	return false;
                 }
                 if(!data[4].val){ // 邮箱
					 this.errorTip('请填写邮箱');
                  	 return false;
                 }
   				 if(!emailExp.test(data[4].val)){ // 邮箱验证
					this.errorTip('填写邮箱有误');
					return false;
   				 }
   				 if(data[10].val){
   				 	if(!qqPattern.test(data[10].val)){ // QQ号验证
						this.errorTip('填写QQ号有误');
						return false;
   				 	}
   				 }
		    	this.$router.push({name:'PersonalData'});
		    }
	},
	created:function(){
		let type=sessionStorage.getItem('type');
		this.who=type;
	}
}
</script>
<style lang="stylus">
.personalData {
	font-family: "Microsoft YaHei" ! important;
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
	.line {
		width: 100%;
		background: #138be7;
		position:relative;
		.navigation {
			overflow: hidden;
			padding: 0.3rem;
			font-size: 0.38rem;
		    text-align: center;
		    color: #fff;
			.imgFl {
				float: left;
				width: 2%;
				cursor:pointer;
			}
			.imgFr {
				float: right;
				width: 3.0%;
				cursor:pointer;
			}
		}
		.imgCity {
			width: 100%;
			padding-top:1rem;
		}
		.trigger{
			background #fff;
			width 240px;
			position absolute;
			right 0.1rem;
			top 88px;
			z-index 999;
			border 1px solid #e3e3e3;
			span{
				padding 35px 50px;
                font-size 30px;
                display block;
			}
			span:nth-child(1){
			  border-bottom 1px solid #e3e3e3
			}
			span:after{
  				content ''
                position absolute
                width 0
                height 0
                top -15px
                right 35px
                border-bottom 20px solid #fff;
                border-left 20px solid transparent;
                border-right 20px solid transparent;
			}
		}
	}
	.btnParent{
		position:absolute;
		bottom:0;
		left:0;
		width:100%;
		background:#fff;
		padding:20px;
		border-top: 1px solid #e5e5e5;
		.btn{
            padding:30px;
            text-align:center;
            color:#fff;
            background:#138be7;
            font-size: .38rem;
            cursor: pointer;
		}
	}
	.editorContent{
		font-size:.38rem;
		overflow: hidden;
	    overflow-y: auto;
	    width: 100%;
	    height: 90%;
	    padding-bottom: 10rem;
		.titte{
			font-size: 0.4rem;
		    padding: 0.3rem 0.5rem;
		    border-bottom: 0.01rem solid #e5e5e5;
		}
		ul{
			width:100%;
			overflow:hidden;
			font-size: .38rem;
			li{
				float:left;
				box-sizing:border-box;
				padding:0.7rem 0.6rem;
				padding-bottom: 0.2rem;
				.input{
					border: 1px solid #e5e5e5;
				    width: 80%;
				    padding: .25rem .45rem;
				    box-sizing: border-box;
				    border-radius: 5px;
				    font-size: .38rem;
				}

			}
			li:nth-child(1){
				width:25%;
				span{
					color:red;
					margin-left: 10px;
				}
			}
			li:nth-child(2){
				width:70%;
				img{
					width:1.2rem;
					height:1.2rem;
					border:1px solid #e5e5e5;
					padding:10px;
					box-sizing:border-box;
					border-radius: 5px;
				}
				.add{
					width: 1.5rem;
				    height: 1.5rem;
				    border: 0.01rem solid #e5e5e5;
				    font-size: 1.0rem;
				    text-align: center;
				    display: block;
				    color: #e5e5e5;
				    border-radius: 5px;
				    cursor: pointer;
				    float: left;
				}
				.addTip{
					font-size: 0.3rem;
				    float: left;
				    padding-left: 20px;
				    padding-top: 50px;
				    color: #ccc;
				}
				.el-radio{
					font-size: .38rem
					transform:scale(2.5)!important;
				    -ms-transform:scale(2.5)!important;
				    -webkit-transform:scale(2.5)!important;
				    -o-transform:scale(2.5)!important;
				    -moz-transform:scale(2.5)!important;
				    font-family: "Microsoft YaHei"!important;
				    margin-left: .55rem;
				}
				.el-input{
					transform:scale(3)!important;
				    -ms-transform:scale(2)!important;
				    -webkit-transform:scale(2)!important;
				    -o-transform:scale(2)!important;
				    -moz-transform:scale(2)!important;
				    font-family: "Microsoft YaHei"!important;
				}
				.el-input__inner{
					height: 0.5rem;
    				line-height: 0.5rem;
    				font-size: .15rem;
				}
				.el-date-editor.el-input, .el-date-editor.el-input__inner{
					margin-left: 1.7rem;
					width: 40%;
					margin-bottom: 10px;
				}
				.avatar-uploader{
					float:left;
				}	
				.avatar-uploader .el-upload {
				    border: 1px dashed #d9d9d9;
				    border-radius: 6px;
				    cursor: pointer;
				    position: relative;
				    overflow: hidden;
				}
				.avatar-uploader .el-upload:hover {
				    border-color: #409EFF;
				}
				.avatar-uploader-icon {
				    font-size: 28px;
				    color: #8c939d;
				    width: 178px;
				    height: 178px;
				    line-height: 178px;
				    text-align: center;
				}
				.avatar {
				    width: 178px;
				    height: 178px;
				    display: block;
				}
			}
		}
	}
}
.el-date-table td span{
	top: 15px;
	width: 0.5rem;
	height: 0.5rem
	line-height: 0.45rem;
}
.el-date-table td{
  height: 1.0rem;
}
.el-date-picker table{
 font-size: .3rem;
}
.el-picker-panel__content{
  margin: 0rem;
}
.el-date-picker .el-picker-panel__content{
	width: 6.9rem;
}
.el-date-table th{
	padding: 0.25rem;
}
.el-date-picker__header{
	margin: 0.12rem;
}
.el-picker-panel__icon-btn,.el-picker-panel__icon-btn,.el-date-picker__header-label{
	font-size: .3rem;
}
.el-date-picker{
	width: 6.9rem;
}
.el-message-box{
	transform:scale(2)!important;
    -ms-transform:scale(2)!important;
    -webkit-transform:scale(2)!important;
    -o-transform:scale(2)!important;
    -moz-transform:scale(2)!important;
    font-family: "Microsoft YaHei"!important;
}
</style>
