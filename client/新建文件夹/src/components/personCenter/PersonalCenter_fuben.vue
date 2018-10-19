<template lang="pug">
	div.personalCenter
	  div.line
	       p.navigation 
	         img.imgFl(:src="imgGb" @click="Goback")
	         img.imgFr(:src="imglj")
	       img.imgCity(:src="city")
	  div.name_text
	       p.text  张建荣
	       span.figureHead
	            img.imgLogo(:src="imgLogo")
	  el-row.content
	        el-col.ul(:span="24") 
	           el-col.cross(:span="24")
	              span
	                 img.pan(:src="imgpanb")
	              span.dataName 个人资料
	              b.into(@click="personalData")
	           el-col.cross(:span="24")
	              span
	                 img.pan(:src="imgPassword")
	              span.dataName 修改密码
	              b.into(@click="skipPassWord")
	  el-col.btnParent(:span="24") 
	        div.btn(:span="24" @click="open") 退出       
</template>
<script>
import imgCity from '../../../static/img/cityCenter.png';
import gb from '../../../static/img/gb.png';
import lj from '../../../static/img/lj.png';
import logo from '../../../static/img/logo.png'
import panb from '../../../static/img/panb.png'
import password from '../../../static/img/passwordblue.png'
export default {
	name: 'personalCenter',
	data() {
		return {
			city: imgCity,
			imgGb: gb,
			imglj: lj,
			imgLogo:logo,
			imgpanb:panb,
			imgPassword:password,
			dialogVisible: false
		}
	},
	methods: {
	        Goback:function(){
	        	this.$router.push({name:'Home'});
	        },
            skipPassWord:function(){
				this.$router.push({name:'PassWord'});
            },
            personalData:function(){
				// this.$router.push({name:'PersonalData'});
				this.$router.push({name:'PersonalStudent'});
            },
	        open:function(){
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
.personalCenter {
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    background: #e5e5e5;
    overflow: hidden;
    box-sizing: border-box;
	.line {
		width: 100%;
		background: #138be7;
		.navigation {
			overflow: hidden;
			padding: 0.3rem;
			.imgFl {
				float: left;
				width: 2%;
				cursor:pointer;
			}
			.imgFr {
				float: right;
				width: 3.5%;
				cursor:pointer;
			}
		}
		.imgCity {
			width: 100%;
			padding-top:1rem;
		}
	}
	.name_text{
		position: relative;
		box-sizing: border-box;
		min-height: 2rem;
		background:#fff;
		padding-top: 1rem;
		.text{
           text-align: center;
           font-size: 0.38rem;
		}
		.figureHead{
		    box-sizing: border-box;
		    position: absolute;
		    top: -50%;
		    width: 200px;
		    height: 200px;
		    background: #fff;
		    left: 50%;
		    transform: translate(-50%,0%);
		    border-radius: 50%;
		    display: block;
		    overflow: hidden;
		    .imgLogo{
		    	display: block;
    			width: 100%;
		    }	
		}
	}
	.content{
		padding: 0.2rem;
		.ul{
           background: #fff;
           .cross{
			      position:relative;
			      padding: 20px;
    			  border-bottom: 1px solid #e5e5e5;
    			  padding:30px;
			 .pan{
	           	  width: 3.2%;
	    		  vertical-align: bottom;
              }
	         .dataName{
	           	 padding-left: 20px;
	           	 font-size: .38rem;
	          }
	          .into{
	          	position:absolute;
	          	right:20px;
	          	top:10px;
	          	display: block;
	          	width:30px;
	          	height:50px;
	          	background:url('../../../static/img/acj.png');
	          	background-size:100% 100%;
	          	transform: translate(0%,50%);
	          	cursor:pointer;
	          }
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
		.btn{
            padding:30px;
            text-align:center;
            color:#fff;
            background:#138be7;
            font-size: .38rem;
            cursor: pointer;
		}
	}
}
.el-message-box{
	transform:scale(2)!important;
    -ms-transform:scale(2)!important;
    -webkit-transform:scale(2)!important;
    -o-transform:scale(2)!important;
    -moz-transform:scale(2)!important;
}
</style>
