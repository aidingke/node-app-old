<template lang="pug">
    .student-editor
        Header(title="个人资料")
        .container
            nav
                span.left 班级信息
            ul
                li
                    .attribute 学号
                        i *
                    .content
                        el-input(v-model="studentObj.num")
                li
                    .attribute 系别
                        i *
                    .content
                        el-select(v-model="studentObj.tie" placeholder="系别")
                            el-option(v-for="item in tieList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value")
                li
                    .attribute 专业班级
                        i *
                    .content
                        el-select(v-model="studentObj.tie" placeholder="专业班级")
                            el-option(v-for="item in classList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value")
                li
                    .attribute 学习时间
                        i *
                    .content
                        .date
                            el-date-picker(v-model="studentObj.date"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期")
                li
                    .attribute 班主任
                        i *
                    .content
                        el-input(v-model="studentObj.headmaster" placeholder="班主任")
            nav
                span.left 基本信息
            ul
                li
                    .attribute 姓名
                        i *
                    .content
                        el-input(v-model="basicObj.num")
                li
                    .attribute 手机号码
                        i *
                    .content
                        el-select(v-model="basicObj.phone" placeholder="手机号码")
                            el-option(v-for="item in phoneList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value")
                li
                    .attribute 出生年月
                        i *
                    .content
                        el-select(v-model="basicObj.birth" placeholder="出生年月")
                            el-option(v-for="item in birthList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value")
                li
                    .attribute 性别
                        i *
                    .content
                        <el-radio v-model="basicObj.sex" label="1">男</el-radio>
                        <el-radio v-model="basicObj.sex" label="2">女</el-radio>
                li
                    .attribute 身份证号码
                        i *
                    .content
                        el-input(v-model="basicObj.cardNo")
                li
                    .attribute 照片
                        i *
                    .content(:style="{width:'110px',height:'110px'}")
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"><img v-if="imageUrl" :src="imageUrl" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i></el-upload>
                        span.addTip
                            | 请上传一张清晰的个人照片 
                            br
                            | 大小不超过2M
                li
                    .attribute 微信号
                    .content
                        el-input(v-model="basicObj.weixin")
                li
                    .attribute QQ
                    .content
                        el-input(v-model="basicObj.qq")
                li
                    .attribute 民族
                    .content
                        el-input(v-model="basicObj.nation")
                li
                    .attribute 政治面貌
                    .content
                        el-input(v-model="basicObj.outlook")
                li
                    .attribute 联系地址
                    .content
                        .address
                            el-select(v-model="basicObj[0].address.province" placeholder="省份") 
                                el-option(v-for="item in birthList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value")
                            span &nbsp;—&nbsp;
                            el-select(v-model="basicObj[0].address.city" placeholder="县/市") 
                                el-option(v-for="item in birthList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value")
                            span &nbsp;—&nbsp;
                            el-select(v-model="basicObj[0].address.area" placeholder="区") 
                                el-option(v-for="item in birthList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value")
                            .detail
                                el-input(v-model="basicObj[0].address.detail" , placeholder="详细地址")
            nav
                span.left 教育经历
                span.right(@click="addEducation") +
            ul
                li(v-for="(item,index) in educationalExperience" :key="index")
                    .attribute 学历{{index+1}}
                    .content
                        .education
                            .date
                                el-date-picker(v-model="item.date"
                                    type="daterange"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期")
                            span &nbsp;—&nbsp;
                            el-select(v-model="item.education",placeholder="学历")
                                el-option(v-for="item2 in education"
                                :key="item2.value"
                                :label="item2.label"
                                :value="item2.value")
                            span &nbsp;—&nbsp;
                            el-input(v-model="item.major",placeholder="专业名称")
                            .school
                                el-input(v-model="item.school",placeholder="毕业院校")
                                .dele(@click="deleEducation(index)")
                                    img(src="static/img/dele-item.png")
                        
</template> 
<script>
export default {
	name: 'StudentEditor',
	data() {
		return {
            imageUrl:      '',
            tieList: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }
            ],
            classList: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }
            ],
            phoneList: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }
            ],
            birthList: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }
            ],
            education: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }
            ],
            studentObj:[                    
                {
                    num:            '',     //学号
                    tie:            '',     //专业
                    class:          '',     //班级
                    date:           '',     //日期
                    headmaster:     '',     //班主任
                }
            ],
            basicObj:[                     //基本信息
                {
                    name:            '',   //姓名
                    phone:           '',   //手机号码
                    birth:           '',   //出生年月
                    sex:             '',   //性别
                    cardNo:          '',   //身份证号码
                    photo:           '',   //照片
                    weixin:          '',   //微信
                    qq:              '',   //qq
                    nation:          '',   //民族
                    outlook:         '',   //政治面貌
                    address: {             //联系地址
                        province:'',       //省
                        city:'',           //市
                        area:'',           //区
                        detail:''          //详细地址
                    },   
                }
            ],
            educationalExperience:[        //教育经历
                {
                    date:'',
                    education:'',
                    major:'',
                    school:''
                },
                {
                    date:'',
                    education:'',
                    major:'',
                    school:''
                }
            ]

		}
	},
	watch:{
	},
	methods: {
            addEducation(){                                 //添加教育经历
                this.educationalExperience.push({
                    date:'',
                    education:'',
                    major:'',
                    school:''
                })
            },
            deleEducation(index){                           //删除当前教育经历
                this.educationalExperience.splice(index,1);
            },
		    handleAvatarSuccess(res, file) {
		    	this.imageUrl = URL.createObjectURL(file.raw);
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
    .student-editor
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
                span.right
                    float right
                    font-size 60px
                    color #138BE7
            ul 
                font-size 28px
                overflow auto
                margin-bottom 40px
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
                        line-height 60px
                        display inline-block
                        .address    //地址
                            height auto
                            .detail
                                margin-top 50px
                                .el-input
                                    width 100%
                            .el-input
                                width 300px
                        .education
                            display flex
                            flex-direction row
                            flex-wrap wrap
                            .school
                                flex 1
                                margin-top 20px
                                .el-input
                                    width 908px
                                    float left
                                .dele
                                    border 1px solid #dcdfe6
                                    margin-left 20px
                                    width 65px
                                    height 70px
                                    text-align center
                                    float left
                                    img
                                        max-width 100%
                                        vertical-align middle
                            .el-input
                                width 250px
                        .avatar-uploader
                            display inline-block
                            .el-upload
                                border 1px solid #dcdfe6
                                border-radius 8px
                                &:active
                                    border 1px solid #1F7FC8
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
                        .date
                            display inline-block
                            .el-date-editor
                                width 400px
                                height 70px
                                line-height 70px
                                .el-range__icon
                                    margin-left 10px
                                    margin-right 10px
                                .el-range-separator
                                    line-height 60px
                                .el-range__close-icon
                                    line-height 65px
</style>
