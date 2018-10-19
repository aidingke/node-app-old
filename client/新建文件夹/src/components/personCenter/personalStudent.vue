<template lang="pug">
    .personal-student
        Header(title="个人资料")         
        .container
            nav
                .left 班级信息
            ul
                li(v-for="(item,index) in studentInfo.classInfo" :key="index")
                    span.attribute {{item.attr}}  
                    span(v-if="item.type!='img'",class="content") {{item.content}}  
                    span(v-else class="content" :style="item.type=='img'?styleObject:''")
                        a(href="javascript:void(0)")
                            img(:src="item.content")
            nav
                .left 基本信息
            ul
                li(v-for="(item,index) in studentInfo.basicInfo" :key="index")
                    span.attribute {{item.attr}}
                    span(v-if="item.type!='img'",class="content") {{item.content}}  
                    span(v-else class="content" :style="item.type=='img'?styleObject:''")
                        a(href="javascript:void(0)")
                            img(:src="item.content")
            nav
                span.left 教育经历
            ul
                li(v-for="(item,index) in studentInfo.educationalExperience" :key="index")
                    span.attribute {{item.educationIndex}}  
                    span.content {{item.time}}  {{item.education}} {{item.major}}  {{item.major}} {{item.school}}
            FixedButton(buttonText='编辑', @listenToChildEvent="edit")
</template>
<script>
export default {
	name: 'PersonalStudent',
	data() {
		return {
            styleObject:{
                height:'130px',
                lineHeight:'130px'
            },
            studentInfo:{                  //学生信息
                classInfo:[                //班级信息
                    {                
                        attr:'学号',
                        content:'06011250',
                        type:'text'
                    },
                    {                
                        attr:'系别',
                        content:'计算机系',
                        type:'text'
                    },
                    {                
                        attr:'专业班级',
                        content:'汽车专修2班',
                        type:'text'
                    },
                    {                
                        attr:'入学时间',
                        content:'2017-05至2018-07',
                        type:'text'
                    },
                    {                
                        attr:'班主任',
                        content:'周海鸿',
                        type:'text'
                    },
                ],
                basicInfo:[          //基本信息
                    {                
                        attr:'姓名',
                        content:'陈小杰',
                        type:'text'
                    },
                    {                
                        attr:'手机号码',
                        content:'1344302876',
                        type:'text'
                    },
                    {                
                        attr:'出生年月',
                        content:'1986-10',
                        type:'text'
                    },
                    {                
                        attr:'性别',
                        content:'男',
                        type:'text'
                    },
                    {                
                        attr:'身份证号码',
                        content:'445122199611095977',
                        type:'text'
                    },
                    {                
                        attr:'照片',
                        content:'static/img/success.png',
                        type:'img'
                    },
                    {                
                        attr:'微信号',
                        content:'SIEEOPW',
                        type:'text'
                    },
                    {                
                        attr:'QQ',
                        content:'27482561',
                        type:'text'
                    },
                    {                
                        attr:'民族',
                        content:'汉',
                        type:'text'
                    },
                    {                
                        attr:'政治面貌',
                        content:'团员',
                        type:'text'
                    },
                    {                
                        attr:'联系地址',
                        content:'广东省广州市天河黄埔大道东320号1层302',
                        type:'text'
                    },
                ],
                educationalExperience:[
                    {
                        educationIndex:'学历1',
                        time:'2013-09至2016-07',
                        education:'大专',
                        major:'汽车空调专修',
                        school:'广州市第十九中学'
                    },
                    {
                        educationIndex:'学历2',
                        time:'2009-01至2013-07',
                        education:'高中',
                        major:'',
                        school:'广州市第十一中学'
                    }
                ]
            } 
		}
	},
	methods: {
	        goback(){
	        	this.$router.push({name:'PersonalCenter'});
	        },
	        errorTip(content){
		        this.$alert(content, '提示', {
		          confirmButtonText: '知道了',
		          callback: action => {

		          }
		        });
		    },
            edit(data){
                console.log(data);
                this.$router.push({
                    path:'/StudentEditor'
                })
            }
	},
	created:function(){
		let type=sessionStorage.getItem('type');
		this.who=type;
	}
}
</script>
<style lang="stylus">
    .personal-student
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
                margin-bottom 40px
                li 
                    padding 30px 30px
                    background #fff
                    overflow hidden
                    display flex
                    position relative
                    color #000
                    span.attribute
                        flex 1
                        height 0.6rem
                        line-height 0.6rem
                    span.content
                        flex 3
                        height 0.6rem
                        line-height 0.6rem
                        a
                            width:200px;
                            height:200px;
                            img
                                max-width:100%
</style>
