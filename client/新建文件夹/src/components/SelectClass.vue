<!-- 
* name: 选择班级
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .select
        Header(title="选择班级")
        .container
            el-row
                el-col(:span="12",v-for="(item,index) in list",:key="index") 
                    .item
                        h3 {{item.tie}}
                        .left-top {{item.class}}
                        .button-item
                            div
                                el-button(plain) 学生({{item.studentNum}})
                                |
                                el-button(plain) 编辑课程
                |
                el-col(:span="12")
                    .item(@click="handleDialog()")
                        .add
                            img(src="static/img/add.png")
                        .text 添加新班级
                        
        NotInfo(v-if="list.length==0",
            notClass="暂无相关班级信息",
            addText="请先添加班级及成员",
            elButton="添加班级",
            defaultImg="/static/img/not-class-default.png",
            @start="start")
            
        el-dialog(:visible.sync="dialogTableVisible" width="345px")
            .window
                h3  班级名称

                .learning-name  学习时间

                el-input.date(v-model="startDate",placeholder="开始时间",suffix-icon="el-icon-date",@focus="calendarStartShow = true")
                calendar(v-model="calendarStartShow"
                    :defaultDate="defaultDate"
                    @change="handelStartChange")

                span.dateSeparate 至

                el-input.date(v-model="endDate",placeholder="结束时间",suffix-icon="el-icon-date",@focus="calendarEndShow = true")
                calendar(v-model="calendarEndShow"
                    :defaultDate="defaultDate"
                    @change="handelEndChange")

                .tie 系别

                el-select(v-model="className" placeholder="请输入班级名称")
                    el-option(v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value")

                .prof-class 专业班级

                el-input(v-model="profClass" placeholder="请输入班级名称")

                .headmaster 班主任

                el-select(v-model="teacher" placeholder="请选择老师")
                    el-option(v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value")

                .button-item
                    div
                        el-button(type="primary") 确定
                        |
                        el-button(plain="",@click="dialogTableVisible = false") 取消
</template>
<script>
    export default {
        name: 'SelectClass',
        props: {
			value: {
				type:       Boolean,
				default:    false
			},
			closeByClickmask: {
				type:       Boolean,
				default:    true
			},
			format: {
				type:       String,
				default:    "yyyy-MM-dd"
			},
			defaultDate: {
				type:       Date,
        		default:    null
			},
			maxDate:{
				type:       Date,
        		default:    null
			},
			minDate:{
				type:       Date,
        		default:    null
			},
			month: {
				type:       Array,
        		default:function(){
        			return  ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        		}
			},
			week: {
				type:       Array,
        		default:function(){
        			return  ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        		}
			}
		},
        data () {
            return {
                time:               '',
                dialogTableVisible: false,
                calendarStartShow:  false,      //开始日期 显隐
                calendarEndShow:    false,      //结束日期 显隐
                startDate:          '',         //开始日期 v-model
                endDate:            '',         //结束日期 v-model
                profClass:          '',
                className:          '',
                options1: [{
                    value:          '选项1',
                    label:          '黄金糕'
                }, {
                    value:          '选项2',
                    label:          '双皮奶'
                }, {
                    value:          '选项3',
                    label: '蚵仔煎'
                }, {
                    value:          '选项4',
                    label:          '龙须面'
                }, {
                    value:          '选项5',
                    label:          '北京烤鸭'
                }],
                options2: [{
                    value:          '选项1',
                    label:          '黄金糕'
                }, {
                    value:          '选项2',
                    label:          '双皮奶'
                }, {
                    value:          '选项3',
                    label:          '蚵仔煎'
                }, {
                    value:          '选项4',
                    label:          '龙须面'
                }, {
                    value:          '选项5',
                    label:          '北京烤鸭'
                }],
                teacher:            '',
                list:[
                    /* {
                        tie:        '18级汽车空调专修',
                        studentNum: '8',
                        class     : '1班',
                    },
                    {
                        tie:        '18级汽车空调专修',
                        studentNum: '25',
                        class     : '2班',
                        
                    },
                    {
                        tie:        '18级汽车空调专修',
                        studentNum: '0',
                        class     : '3班',
                    },
                    {
                        tie:        '18级汽车空调专修',
                        studentNum: '25',
                        class     : '4班',

                    },
                    {
                        tie:        '18级汽车空调专修',
                        studentNum: '15',
                        class     : '5班',
                    } */
                ],
            }
        },
        methods:{
            handleDialog(){
                this.dialogTableVisible = true;
            },
            //开始日期
            handelStartChange(val){
                let date = new Date(val);  
                let date_value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();  
                console.log(date_value,'**');
                this.startDate = date_value;
            },
            //结束日期
            handelEndChange(val){
                let date = new Date(val);  
                let date_value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();  
                console.log(date_value,'**');
                this.endDate = date_value;
            },
            start(){
            }
        }
    }
</script>
<style lang="stylus">
.select
    .container
        height 100%
        position fixed
        left 0
        right 0
        background-color #efefef
        .item
            border 1px solid #eeee
            margin 30px 30px
            background: #fff
            position relative
            &:after
                width 0
                height 0
                content ''
                position absolute
                top 0
                left 0
                border-top 100px solid #e6a23c
                border-right 100px solid transparent
            h3
                font-size 35px
                margin 50px 0
                text-align center
            .left-top
                position absolute
                top 15px
                left 15px
                color #fff
                z-index 999
                transform rotate(-45deg)
            .button-item
                margin 50px 0
                div
                    margin 0 auto
                    width 600px
                    text-align center
                    .el-button
                        padding 35px  0
                        width 250px
                        font-size 30px
                        &:last-child
                            margin-left 20px
            .add
                text-align center
                width 80px
                height 80px
                margin 62px auto
                img 
                    max-width 100%
            .text
                text-align center
                margin 52px 0
                font-size 30px
    /* .default-container
        height 100%
        position fixed
        left 0
        right 0
        background #fff
        .default
            width 400px
            position absolute
            left 50%
            top 30%
            transform: translate(-50%,-50%)
            img
                max-width 100%
            .not-class
                font-size 40px
                text-align center
                color #9b9b9b
                margin 30px 0 0 0
            .add-text
                font-size 20px
                text-align center
                color #a5a5a5
                margin 30px 0 50px 0
            .el-button
                width 100%
                padding 30px 20px
                font-size 30px */
    .window
        padding 50px
        h3
            font-size 40px
            color #000
            text-align center
        .learning-name 
            font-size 30px
            margin 30px 0
        .date
            width 218px
        .dateSeparate
            margin 0 15px
            font-size 30px
        .tie
            font-size 30px
            margin 30px 0
        .el-select
            width 100%
        .el-date-editor--daterange.el-input__inner
            width 100%
            height 60px
            line-height 60px
            .el-range-separator
                line-height 60px
                height 60px
        .prof-class
            font-size 30px
            margin 30px 0
        .headmaster
            font-size 30px
            margin 30px 0
        .button-item
            margin-top 50px
            div
                margin 0 auto
                width 504px
                text-align center
                .el-button
                    padding 35px  90px
                    font-size 30px
                    &:last-child
                        margin-left 20px   
</style>
