<template lang="pug">
	div.StudentEditor
	  Header(title="个人资料")
	  div.editorContent
	   div.editorChild(v-for="items in stundentArr")
	     div.titte {{items.section}}
	     div.content
	       div.contentItem(v-for="item in items.arr") 
	        ul(v-if="item.type=='text'")
	          li {{item.tittle}}
	            span(v-if="item.Required") *
	          li 
	           input.input(type="text" v-model="item.content" :placeholder="item.tip")
	        ul(v-if="item.type=='radio'")
	          li {{item.tittle}}
	           span(v-if="item.Required") *
	          li
	           <el-radio v-model="item.content" label="1">男</el-radio>
	           <el-radio v-model="item.content" label="2">女</el-radio>
	        ul(v-if="item.type=='studyTime'") 
	          li {{item.tittle}}
	           span(v-if="item.Required") *
	          li.studyTime
	            <el-date-picker class="studyTime" v-model="item.contentStart" type="date" :placeholder="item.startTip"> </el-date-picker>
	            <span>至</span>
	            <el-date-picker class="studyTime" v-model="item.contentEnd" type="date" :placeholder="item.endTip"> </el-date-picker>
	        ul(v-if="item.type=='time'") 
	          li {{item.tittle}}
	           span(v-if="item.Required") *
	          li
	            <el-date-picker v-model="item.content" type="date" :placeholder="item.tip"> </el-date-picker>
	        ul(v-if="item.type=='img'")
	          li {{item.tittle}}
	           span(v-if="item.Required") *
	          li
	           <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"><img v-if="item.content" :src="item.content" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i></el-upload>
	           span.addTip 请上传一张清晰的个人照片 </br>大小不超过2M
	        ul(v-if="item.type=='select'")
	         li {{item.tittle}}
	          span(v-if="item.Required") *
	         li.series 
	          <el-select v-model="item.content" :placeholder="item.tip">
	             <el-option v-for="item in item.option" :key="item.value" :label="item.label":value="item.value"></el-option>
	          </el-select>
	        div.select(v-if="item.type=='address'")
	            ul
	              li 联系地址
	               span(v-if="item.Required") *  
	              li.selectList 
	               <el-select v-model="item.contentPro" placeholder="省份">
	                 <el-option v-for="obj in item.prOption" :key="obj.value" :label="obj.label":value="obj.value"></el-option>
	               </el-select>
	               <span class="span">-</span>
	               <el-select v-model="item.contentCity" placeholder="县/市">
	                 <el-option v-for="obj in item.cityOption" :key="obj.value" :label="obj.label":value="obj.value"></el-option>
	               </el-select>
	               <span class="span">-</span>
	               <el-select v-model="item.contentArea" placeholder="区">
	                 <el-option v-for="obj in item.areaOption" :key="obj.value" :label="obj.label":value="obj.value"></el-option>
	               </el-select>
	            ul
	              li
	              li
	               input.address(type="text" v-model="item.address" :placeholder="item.tip")
	   div.edExperience
	     div.titte 教育经历
	         span.span(@click="addExperience") +
	     div.contentExperience(v-for="(items,index) in schoolExperience")
	         ul.ul
	          li.sectionOne {{items.name + (index+1)}}
	          li
	           <el-date-picker class="studyExp" v-model="items.contentStart" type="date" :placeholder="items.startTip"> </el-date-picker>
	           <span>至</span>
	           <el-date-picker class="studyExp" v-model="items.contentEnd" type="date" :placeholder="items.endTip"> </el-date-picker>
	           <span>-</span>
	           <el-select v-model="items.content" placeholder="学历">
	             <el-option v-for="obj in items.option" :key="obj.value" :label="obj.label":value="obj.value"></el-option>
	           </el-select>
	           <span>-</span>
	           input.professionalName(type="text" placeholder="填写专业名称" v-model="items.professionalName")
	         ul.ul
	            li 
	            li
	             input.schoolAddress(type="text" placeholder="填写毕业院校" v-model="items.schoolName")
	             span.close(@click="closeExperience(items,index)") X
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
import $http from 'axios'
import qs from 'qs'
export default {
	name: 'StudentEditor',
	data() {
		return {
			imgGb: gb,
			imglj: lj,
			imgLogo:logo,
			imgpanb:panb,
			imgMore:morePng,
			triggerShow:false,
			imgRightpw:rightpw,
            litte:'个人资料',
            value:'',
            schoolExperience:[], //教育经历  
            stundentArr:[ // 班级信息和基本信息
              {
 				section:'班级信息',
 				arr:[
	              {
	              	tittle:'学号',
	              	content:'',
	              	type:'text',
	              	Required:true,
	              	tip:'填写学号'
	              },
	              {
	              	tittle:'系别',
	              	content:'',
	              	type:'select',
	              	Required:true,
	              	tip:'请选择类别',
	              	option:[
	              	    {
				          value: '计算机系',
				          label: '计算机系'
			            },
			            {
				          value: '土木系',
				          label: '土木系'
			            },
			            {
				          value: '建筑信息系',
				          label: '建筑信息系'
			            },
			             {
				          value: '机电系',
				          label: '机电系'
			            },
	              	]
	              },
	              {
	              	tittle:'专业班级',
	              	content:'',
	              	type:'select',
	              	Required:true,
	              	tip:'请选择专业班级',
	              	option:[
	              	    {
				          value: '汽车1',
				          label: '汽车1'
			            },
			            {
				          value: '飞机二',
				          label: '飞机二'
			            },
			            {
				          value: '单车1',
				          label: '单车1'
			            },
			             {
				          value: '飞船1',
				          label: '飞船1'
			            },
	              	]
	              },
	              {
	              	tittle:'学习时间',
	              	contentStart:'',
	              	contentEnd:'',
	              	startTip:'起始时间',
	              	endTip:'结束时间',
	              	type:'studyTime',
	              	Required:true,
	              },
	              {
	              	tittle:'班主任',
	              	content:'',
	              	type:'text',
	              	Required:true,
	              	tip:'填写班主任姓名'
	              }
			    ]  
              },
              {
 				section:'基本信息',  
 				arr:[
		          {
	              	tittle:'姓名',
	              	content:'',
	              	type:'text',
	              	Required:true,
	              	tip:'填写姓名'
	              },
	              {
	              	tittle:'手机号码',
	              	content:'',
	              	type:'text',
	              	Required:true,
	              	tip:'填写手机号码'
	              },
	              {
	              	tittle:'出生年月',
	              	content:'',
	              	type:'time',
	              	Required:true,
	              	tip:'填写出生年月'
	              },
	              {
	              	tittle:'性别',
	              	content:'',
	              	type:'radio',
	              	Required:true,
	              	tip:'请选择性别'
	              },
	              {
	              	tittle:'身份证',
	              	content:'',
	              	type:'text',
	              	Required:true,
	              	tip:'填写身份证'
	              },
	              {
	              	tittle:'照片',
	              	content:'',
	              	type:'img',
	              	Required:true,
	              	tip:'请添加相片'
	              },
	              {
	              	tittle:'微信号',
	              	content:'',
	              	type:'text',
	              	Required:false,
	              	tip:'填写微信号'
	              },
	               {
	              	tittle:'QQ',
	              	content:'',
	              	type:'text',
	              	Required:false,
	              	tip:'填写QQ号'
	              },
	              {
	              	tittle:'民族',
	              	content:'',
	              	type:'text',
	              	Required:false,
	              	tip:'填写民族'
	              },
	              {
	              	tittle:'政治面貌',
	              	content:'',
	              	type:'text',
	              	Required:false,
	              	tip:'填写政治面貌'
	              },
	               {
	              	tittle:'联系地址',
	              	contentPro:'',
	              	contentCity:'',
	              	contentArea:'',
	              	type:'address',
	              	Required:false,
	              	tip:'填写详细地址',
	              	address:'',
	              	prOption:[
						{
		                  value: '北京',
				          label: '北京'
		              	},
		              	{
		                  value: '上海',
				          label: '上海'
		              	},
		              	{
		                  value: '广东',
				          label: '广东'
		              	},
		              	{
		                  value: '四川',
				          label: '四川'
		              	},
	              	],
	              	cityOption:[
	              	   {
		                  value: '广州',
				          label: '广州'
		              	},
		              	{
		                  value: '深圳',
				          label: '深圳'
		              	},
		              	{
		                  value: '茂名',
				          label: '茂名'
		              	},
	              	],
	              	areaOption:[
	              	    {
		                  value: '白云区',
				          label: '白云区'
		              	},
		              	{
		                  value: '荔湾区',
				          label: '荔湾区'
		              	},
		              	{
		                  value: '天河区',
				          label: '天河区'
		              	}, 
	              	]
	              }
 				]
              }
            ]
		}
	},
	watch:{
		stundentArr:{
			handler:function(data,oldItem){
				data[1].arr[1].content=data[1].arr[1].content.replace(/[^1-9]/g,''); // 手机号码只能输入数字
			    data[1].arr[4].content=data[1].arr[4].content.replace(/[\u4e00-\u9fa5]/ig,'')// 身份证号不能输入中文
				data[1].arr[6].content=data[1].arr[6].content.replace(/[\u4e00-\u9fa5]/ig,'')// 微信号不能输入中文
			    data[1].arr[7].content=data[1].arr[7].content.replace(/[\u4e00-\u9fa5]/ig,'')// QQ号不能输入中文
			},
			deep:true
		}
	},
	methods: {
		    handleAvatarSuccess(res, file) {
		    	this.stundentArr[1].arr[5].content=URL.createObjectURL(file.raw);
		    },
	        beforeAvatarUpload(file) {
	        	var this_ = this
				var reader = null;
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		            this.$message.error('上传头像图片大小不能超过 2MB!');
		            return false
		        }
				reader = new window.FileReader()
				reader.readAsDataURL(file)
				reader.onload = function (e) {
                    // this_.uploadResques(e.target.result,file)
				}
	        },
	        uploadResques:function(baseFile,file){// 上传参数
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
	        	this.$router.push({name:'PersonalStudent'});
	        },
	        errorTip:function(content){
		        this.$alert(content, '提示', {
		          confirmButtonText: '知道了',
		          callback: action => {

		          }
		        });
		    },
		    closeExperience:function(obj,index){
		    	this.schoolExperience.splice(index,1);  
		    },
		    addExperience:function(){
		        const obj={
		               	  name:'学历',
		               	  time:'',
		               	  content:'',
		               	  schoolName:'',
		               	  professionalName:'',
		               	  contentStart:'',
			              contentEnd:'',
			              startTip:'起始时间',
			              endTip:'结束时间',
			              tip:'填写详情地址',
		               	  option:[
		               	    {
		               	       value: '本科',
						       label: '本科'
		               	    },
		               	    {
		               	       value: '专科',
						       label: '专科'
		               	    },
		               	    {
		               	       value: '高中',
						       label: '高中'
		               	    },
		               	     {
		               	       value: '初中',
						       label: '初中'
		               	    },
		               	     {
		               	       value: '小学',
						       label: '小学'
		               	    }
		               	  ]
               };
		    	this.schoolExperience.push(obj)
		    },
		    teacherSave:function(){
		    	      var data=this.stundentArr,
	                      re=/^1\d{10}$/,//手机号码正则
	                      emailExp=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,//邮件正则
	                      qqPattern = /^[1-9][0-9]{4,10}$/,//QQ正则
	                      identity=/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;//身份证正则
	                      if(!data[0].arr[0].content){// 学号
		                    this.errorTip('请填写学号');
		                  	return false;
	                      } 
	                      if(!data[0].arr[1].content){// 系别
	                      	  this.errorTip('请选择系别');
		                  	  return false;
	                       }
	                       if(!data[0].arr[2].content){// 专业班级
	                      	  this.errorTip('请选择专业班级');
		                  	  return false;
	                       }
	                       if(!data[0].arr[3].contentStart){// 学习时间起始时间
	                      	  this.errorTip('请选择起始时间');
		                  	  return false;
	                       }
	                       if(!data[0].arr[3].contentEnd){// 学习时间结束时间
	                      	  this.errorTip('请选择结束时间');
		                  	  return false;
	                       }
	                       if(!data[0].arr[4].content){// 班主任
	                      	  this.errorTip('请填写班主任');
		                  	  return false;
	                       }
	                       if(!data[1].arr[0].content){// 姓名
	  						  this.errorTip('请填写姓名');
		                  	  return false;
	                       }
	                       if(!data[1].arr[1].content){// 手机号码
  								this.errorTip('请填写手机号码');
		                  	    return false;
	                       }
	                       if(data[1].arr[1].content){// 手机号码验证
	                       	  if(!re.test(data[1].arr[1].content)){
                       			 this.errorTip('填写手机号码有误');
		                  	     return false;
	                       	  }
	                       }
	                       if(!data[1].arr[2].content){// 出生年月
 	  							this.errorTip('请选择出生年月');
		                  	    return false;
	                       }
	                       if(!data[1].arr[3].content){// 性别
 	  							this.errorTip('请选择性别');
		                  	    return false	                       	
	                       }
	                       if(!data[1].arr[4].content){// 身份证号码
 	  							this.errorTip('请填写身份证号码');
		                  	    return false
	                       }
	                       if(data[1].arr[4].content){// 身份证验证
	                       	 if(!identity.test(data[1].arr[4].content)){
 	  							this.errorTip('填写身份证号码有误');
		                  	    return false
	                       	  }
	                        }
	                       if(!data[1].arr[5].content){// 上传照片
 	  							this.errorTip('请选择一张清晰个人照');
		                  	    return false
	                       }
	                       if(data[1].arr[7].content){// QQ号验证
	                       	 if(!qqPattern.test(data[1].arr[7].content)){
 	  							  this.errorTip('填写QQ号有误');
		                  	     return false
	                       	 }
	                       }
	                       let arr=['contentArea','contentCity','contentPro','address'] // 填写或选了一项,就要完善联系地址
						   let i= 0;	
							arr.forEach(function(item,index,array){
								if(data[1].arr[10][item]){
									i++;
								}
							})
							if(i>=1){
								if(arr.length!==i){
									this.errorTip('请完善联系地址信息');
									return false;
							    }
							}
							let experienceArr=this.schoolExperience // 填写或选择一项,就要完善该教育经历
							let arrData=['content','schoolName','professionalName','contentStart','contentEnd'];
							let arrDataNum=[];
							let perfect=true;
							if(experienceArr.length>0){
								for(let k=0;k<experienceArr.length;k++){
									arrDataNum.push(0);
								}
								arrData.forEach(function(item,index,array){
									for(let i=0;i<experienceArr.length;i++){
									    if(experienceArr[i][item]){
									    	arrDataNum[i]++;
									    }
									}
								})
								for(let i=0;i<arrDataNum.length;i++){
									if(arrDataNum[i]>=1){
										if( arrData.length!=arrDataNum[i]){
											perfect=false;
											break;
										}
									}
								}
								if(!perfect){
									this.errorTip('请完善教育经历');
									return false;
								}
							}
							// 请求自己写。
		    	        this.$router.push({name:'PersonalStudent'});
		         }
	},
	created:function(){
		let type=sessionStorage.getItem('type');
		this.who=type;
	}
}

</script>
<style lang="stylus">
.StudentEditor {
	font-family: "Microsoft YaHei" ! important;
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    background: #e5e5e5;
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 6.5rem;
    .edExperience{
		width: 100%;
		background: #fff;
		margin-top: 0.5rem;
		.titte{
			border-bottom:1px solid #e5e5e5;
			position:relative;
            .span{
				position: absolute;
				right: 0.4rem;
				top: 0.1rem;
				font-size: .7rem;
				color: #138be7;
				cursor: pointer;
            }
		}
		.contentExperience{
			padding-bottom: .4rem;
			.ul{
			   width:100%;
			   li:nth-child(1){
					width:15%;
					padding-right:0px;
			   }
			   li:nth-child(2){
					width:85%;
					position:relative;
					padding-left:0px;
					.el-select{
						width:25%;
					}
					.professionalName{
						width: 30%;
						height: 1.0rem;
						border: 1px solid #e5e5e5;
						margin-bottom: 12px;
						padding: 0.25rem 0.45rem;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						border-radius: 0.05rem;
						font-size: 0.35rem;
					}
					.schoolAddress{
						width:90%;
						height: 1.0rem;
						border: 1px solid #e5e5e5;
						margin-bottom: 12px;
						padding: 0.25rem 0.45rem;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						border-radius: 0.05rem;
						font-size: 0.38rem;
					}
					.close{
						position: absolute;
					    top: 50%;
					    padding: .21rem .2rem;
					    border: 1px solid #ccc;
					    color: #ccc;
					    cursor: pointer;
					    transform: translate(50%,-30%);
					}
					.studyExp{
						width:21%;
						input{
							font-size: .3rem;
						}
					}
					.el-select{
						width: 15%;
					}
				
				}	
			}
		}
    }
	.line {
		position: absolute;
	    width: 100%;
	    background: #138be7;
	    z-index: 1000;
	    left: 0;
	    top: 0;
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
		z-index: 1000;
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
	    .editorChild{
	    	background: #fff;
            padding-bottom: .5rem;  
	    }
	    .editorChild:nth-child(1){
            margin-top:0.0rem;
	    }
	    .editorChild:nth-child(2){
			margin-top:.5rem;
			border-top:1px solid #e5e5e5;;  
	    }
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
				width:22%;
				margin-top: .3rem;
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
				.el-input--prefix .el-input__inner{
					padding-left: 0.5rem;
				}
				.el-input__icon{
					width: 0.35rem;
					line-height: 1.0rem;
				    font-size: .35rem;
				    margin-left: .05rem;
				   
				}
				.el-input__inner{
					height: 1.0rem;
				    line-height: 1.0rem;
				    font-size: 0.35rem;
				}
				.el-icon-circle-close{
					display:none;
				}
				.el-date-editor.el-input, .el-date-editor.el-input__inner{
					width: 80%;
					margin-bottom: 10px;
				}
			     .el-select{
			     	width: 80%;
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
				.studyTime{
						width:33.5%!important;
						input{
							font-size:.35rem;
						}
			    }
			    	.avatar-uploader{
						float:left!important;
					}
			}
		}
	  .select{
	  	.selectList{
		  	 .span{
		  	 	float:left;
		  	 	margin-top: .15rem;
			    margin-left: .1rem;
			    margin-right: .1rem;
			    color: #ccc;
		  	 }	
		  	 .el-select{
		  	 	float:left;
		  	 	width:20%!important;
		  	 }
	  	}
	    .address{
	    	border: 0.01rem solid #e5e5e5;
		    width: 100%;
		    padding: 0.25rem 0.45rem;
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
		    border-radius: 0.05rem;
		    font-size: 0.38rem;
	    }	
	  }
	}
}
.el-date-picker__header{
	margin: .5rem!important;
}
.el-date-picker__header--bordered{
	padding-bottom: 0.4rem;
}
.el-month-table td .cell, .el-year-table td .cell{
	width: 1.8rem;
		height: 1.22rem;
}
.el-select-dropdown__item{
	height: 0.5rem;
	line-height: 0.5rem;
	font-size: .3rem;
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
