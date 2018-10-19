<template lang="pug">
    .personal-data
        Header(title="个人资料")
        .container
            nav
                span.left 基本信息
            ul
                li(v-for="(item,index) in personObj" :key="index")
                    span.attribute {{item.attr}}
                    span.content(v-if="item.type!='img'") {{item.content}}
                    span.content(v-else :style="item.type=='img'?styleObject:''")
                        a(href="javascript:void(0)")
                            img(:src="item.content")
            FixedButton(buttonText='编辑', @listenToChildEvent="edit")
</template>
<script>
export default {
	name: 'PersonalData',
	data() {
        return {
            styleObject:{
                height:'130px',
                lineHeight:'130px'
            },
            personObj:[
                {
                    attr:'姓名',
                    content:'张海涛',
                    type:'text'
                },
                {
                    attr:'手机号码',
                    content:'15989215864',
                    type:'text'
                },
                {
                    attr:'职务',
                    content:'电控电子任课老师',
                    type:'text'
                },
                {
                    attr:'邮箱',
                    content:'2927809260@qq.com',
                    type:'text'
                },
                {
                    attr:'入职时间',
                    content:'2016-05-06',
                    type:'text'
                },
                {
                    attr:'出生年月',
                    content:'1989-05-16',
                    type:'text'
                },
                {
                    attr:'性别',
                    content:'男',
                    type:'text'
                },
                {
                    attr:'照片',
                    content:'static/img/success.png',
                    type:'img'
                },
                {
                    attr:'职称',
                    content:'计算机设计',
                    type:'text'
                },
                {
                    attr:'微信号',
                    content:'QIEKIP1245',
                    type:'text'
                },
                {
                    attr:'QQ',
                    content:'27452631',
                    type:'text'
                }
            ]
        }
    },
    methods:{
        edit(){
            this.$router.push({
		    	path:'/TeacherDeditor'
            })
        }
    }
}
</script>
<style lang="stylus">
    .personal-data
        .container 
            height: 100%;
            background: #efefef
            nav 
                height: 88px;
                line-height: 88px;
                font-size: 30px;
                padding: 15px 30px;
                background: #fff;
                border-bottom: 1px solid #efefef
                span.left 
                    float: left;
                    color: #909399;
            ul 
                font-size: 28px;
                overflow: auto;
                li 
                    padding: 30px 30px;
                    background: #fff;
                    overflow: hidden;
                    display: flex;
                    position: relative;
                    color: #000;
                    span.attribute
                        flex: 1;
                        height: 0.6rem;
                        line-height: 0.6rem;
                    span.content
                        flex: 3;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        a
                            width:200px;
                            height:200px;
                            img
                                max-width:100%
</style>
