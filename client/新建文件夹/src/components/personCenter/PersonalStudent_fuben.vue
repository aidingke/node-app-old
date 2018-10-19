<template lang="pug">
    .personal-student
        Header(title="个人资料")         
        div.studentMessage
            div.list(v-for="items in arrStudent")
            div.title {{items.section}}
            ul(v-for="item in items.arr")
            li {{item.tittle}}
            li(v-if="item.type!='img'") {{item.content}}
            li(v-if="item.type=='img'")
                img(:src="item.content")                     
        el-col.btnParent(:span="24") 
            div.btn(:span="24" @click="edit") 编辑   
</template>
<script>
import lj from '../../../static/img/lj.png';
import logo from '../../../static/img/logo.png';
import panb from '../../../static/img/panb.png';
import rightpw  from '../../../static/img/success.png';
export default {
	name: 'personal-student',
	data() {
		return {
			imglj: lj,
			imgLogo:logo,
			imgpanb:panb,
			imgRightpw:rightpw,
            arrStudent:[
                   {  
	               	 section:'班级信息',  
	             	 arr:[
			              {
			              	tittle:'学号',
			              	content:'0021545664',
			              	type:'text'
			              },
			              {
			              	tittle:'系别',
			              	content:'计算机系',
			              	type:'text'
			              },
			              {
			              	tittle:'专业班级',
			              	content:'汽车专修2班',
			              	type:'text'
			              },
			              {
			              	tittle:'班主任',
			              	content:'周海媚',
			              	type:'text'
			              }
			            ]
		             },
		             {  
		               section:'基本信息',  
		             	arr:[
				              {
				              	tittle:'姓名',
				              	content:'张海涛',
				              	type:'text'
				              },
				              {
				              	tittle:'手机号码',
				              	content:'15989215864',
				              	type:'text'
				              },
				              {
				              	tittle:'职务',
				              	content:'电控电子任课老师',
				              	type:'text'
				              },
				              {
				              	tittle:'邮箱',
				              	content:'2927809260@qq.com',
				              	type:'text'
				              },
				              {
				              	tittle:'入职时间',
				              	content:'1989-05-16',
				              	type:'text'
				              },
				              {
				              	tittle:'性别',
				              	content:'男',
				              	type:'text'
				              },
				              {
				              	tittle:'照片',
				              	content:rightpw,
				              	type:'img'
				              },
				              {
				              	tittle:'职称',
				              	content:'计算机设计',
				              	type:'text'
				              },
				              {
				              	tittle:'微信号',
				              	content:'15989215884',
				              	type:'text'
				              },
				              {
				              	tittle:'QQ',
				              	content:'2927809260',
				              	type:'text'
				              },
				              {
				              	tittle:'民族',
				              	content:'汉',
				              	type:'text'
				              },
				              {
				              	tittle:'政治面貌',
				              	content:'团员',
				              	type:'text'
				              },
				               {
				              	tittle:'联系地址',
				              	content:'广东省广州市天河区黄埔大道东320号1层202',
				              	type:'text'
				              }
				            ]
		            },
		            {  
		               section:'教育经历',  
		             	arr:[
				              {
				              	tittle:'学历1',
				              	content:'2014-09至2016-07 ——大专—— 广州市第十九中学',
				              	type:'text'
				              },
				              {
				              	tittle:'学历2',
				              	content:'2014-09至2016-07 ——高中—— 广州市第十九中学',
				              	type:'text'
				              }
				            ]
		            }
            ]
		}
	},
	methods: {
	        Goback:function(){
	        	this.$router.push({name:'PersonalCenter'});
	        },
	        errorTip:function(content){
		        this.$alert(content, '提示', {
		          confirmButtonText: '知道了',
		          callback: action => {

		          }
		        });
		    },
		    edit:function(){
		    	this.$router.push({name:'StudentEditor'});
		    }
	},
	created:function(){
		let type=sessionStorage.getItem('type');
		this.who=type;
	}
}
</script>
<style lang="stylus">
.personalStudent {
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
		.imgCity {
			width: 100%;
			padding-top:1rem;
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

	.studentMessage{
		width: 100%;
	    overflow: hidden;
	    overflow-y: auto;
	    width: 100%;
	    height: 90%;
	    background:#e5e5e5;
	    .list{
	    	background:#fff;
	    	margin-top:.5rem;
		    .title{
				font-size: .4rem;
	            padding: 0.3rem 0.5rem;
	            border-bottom: 1px solid #e5e5e5;
	            border-top: 1px solid #e5e5e5;
			}
			ul{
				width:100%;
				overflow:hidden;
				font-size: .38rem;
				li{
					float:left;
					box-sizing:border-box;
					padding:0.45rem 0.6rem;

				}
				li:nth-child(1){
					width:20%;
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
				}
			}
	    }
	    .list:nth-child(1){
	    	margin-top:0px;
	    }
	}
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
