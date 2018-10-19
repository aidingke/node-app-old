<!-- 
* name: 技能考证
* author: fjd
* time: 2018-7-31
-->
<template lang="pug">
    <div class="Skill">
        <!-- 导航 --> 
        <Header title='技能考证'></Header> 
        <!-- 导航 -->
        <appNav :nameNumber="nameNumber"></appNav>
        
        .group-div
            <el-input placeholder="题目关键字" prefix-icon="el-icon-search"  class="input-with-select" v-model="keyword">
                <el-button slot="append" @click="onsearchHandle">搜索</el-button>
            </el-input>

        <!-- 复选框 -->
        .sort-div
            <div class="sort-title">科目</div>
            <el-checkbox-group  v-model="checkedSubject" @change="handleCheckedSubjectsChange">
                <el-checkbox v-for="(item,key) in Subjects" :label="item" :key="key">{{item}}</el-checkbox>
            </el-checkbox-group>

        <div class="sortBox">
            <div class="headBox">
                <div class="tit">排序</div>
                <div class="BoxChoic">
                    <span :class="{'active':selectType==0}" @click="selectTypeFn(0)">综合排序</span>
                    <span :class="{'active':selectType==1}" @click="selectTypeFn(1)">最新发布</span>
                </div>
            </div>
            <div class="bodyBox">
                <ul class="el-row">
                    <li class="el-col el-col-6" v-for="(item,index) in selectKejian">
                        <div class="kejianBox"> </div>
                        <h5> {{item.tit}}</h5>
                        <p><span>{{item.author}}</span> <i>{{item.time}}</i></p>
                    </li>
                </ul>
            </div>
        </div>
        <section class="uploadBtn">
            <div class="prel">
                <div class="upBox">
                    <p>+</p>
                    <a href="javascript:" class="itemBtn" style="display: inline-block;">上传课件</a>
                </div>
            </div>   
        </section>        
    </div>

</template>
<script>
// import nav from 'Qnav'
import Nav from '@/components/technology/Qnav'

    export default {
        name: 'skill',
        components:{
            "appNav":Nav
        },
        data () {
            return {
                keyword:                '',
                selectType:             0,                                                       
                checkAll:               false,                                                   
                sortCheckList:          [''],
                checkedSubject:         ['高级'],                                         
                Subjects:               ['中级', '高级', '技师', '高级技师','终极技师'], 
                isIndeterminate:        true,
                getKejianItems:         {},
                nameNumber:             1,//如果是数字1就展示 问题菜单
                resData :{
                    "kejian_zh": [
                        {
                            "tit": "SKILL汽车空调的运行原理以及空调结构解析",
                            "author": "1张敬涛",
                            "time": "2018-05-15"
                        }, {
                            "tit": "2汽车空调的运行原理以及空调结构解析",
                            "author": "2张敬涛",
                            "time": "2018-05-15"
                        },
                        {
                            "tit": "3汽车空调的运行原理以及空调结构解析",
                            "author": "3张敬涛",
                            "time": "2018-05-15"
                        },
                        {
                            "tit": "4汽车空调的运行原理以及空调结构解析",
                            "author": "4张敬涛",
                            "time": "2018-05-15"
                        },
                        {
                            "tit": "5汽车空调的运行原理以及空调结构解析",
                            "author": "5张敬涛",
                            "time": "2018-05-15"
                        },
                        {
                            "tit": "6汽车空调的运行原理以及空调结构解析",
                            "author": "6张敬涛",
                            "time": "2018-05-15"
                        },
                        {
                            "tit": "7汽车空调的运行原理以及空调结构解析",
                            "author": "7张敬涛",
                            "time": "2018-05-15"
                        }, {
                            "tit": "8汽车空调的运行原理以及空调结构解析",
                            "author": "8张敬涛",
                            "time": "2018-05-15"
                        }
                    ]
                },
                resData2 :               {
                    "kejian_zh": [
                        {
                            "tit": "Skill8汽车空调的运行原理以及空调结构解析",
                            "author": "1张敬涛",
                            "time": "2018-05-15 18:00:22"
                        }, {
                            "tit": "7汽车空调的运行原理以及空调结构解析",
                            "author": "2张敬涛",
                            "time": "2018-05-15 18:00:22"
                        },
                        {
                            "tit": "6汽车空调的运行原理以及空调结构解析",
                            "author": "3张敬涛",
                            "time": "2018-05-15 18:00:22"
                        },
                        {
                            "tit": "5汽车空调的运行原理以及空调结构解析",
                            "author": "4张敬涛",
                            "time": "2018-05-15 18:00:22"
                        },
                        {
                            "tit": "4汽车空调的运行原理以及空调结构解析",
                            "author": "5张敬涛",
                            "time": "2018-05-15 18:00:22"
                        },
                        {
                            "tit": "3汽车空调的运行原理以及空调结构解析",
                            "author": "6张敬涛",
                            "time": "2018-05-15 18:00:22"
                        },
                        {
                            "tit": "2汽车空调的运行原理以及空调结构解析",
                            "author": "7张敬涛",
                            "time": "2018-05-15 18:00:22"
                        }, {
                            "tit": "1汽车空调的运行原理以及空调结构解析",
                            "author": "8张敬涛",
                            "time": "2018-05-15 18:00:22"
                        }
                    ]
                }	
            }
        },
        methods: {
            onsearchHandle() {

            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            handleCheckedSubjectsChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            selectTypeFn(type){ //实现切换TAB
		      this.selectType = type
            },
            async getCourSewareIndex(){
                // const res = await this.$axios.getHelperIndex();
                this.getKejianItems.data1 = this.resData.kejian_zh;
            },
            async getCourSewareDescIndex(){
                // const res = await this.$axios.getHelperIndex();
                this.getKejianItems.data2 = this.resData2.kejian_zh;
            }
        },
        created(){
            this.getCourSewareIndex();
            this.getCourSewareDescIndex();
		},
        computed:{
            selectKejian(){
                if(this.selectType == 0){
                    return this.getKejianItems.data1
                }else if(this.selectType == 1){
                    return this.getKejianItems.data2
                }else{
                    
                }

		    }
        }
    }
</script>
<style lang="stylus">
.Skill        
    .group-div
        padding 30px
        background #efefef
        input 
            width 100%
            height 90px
            font-size 35px
            text-indent 65px
        button
            width 180px
            height 90px
            font-size 35px
            color #fff
            background #138be7
        .el-input__icon
        .el-input__prefix
            font-size 50px
            width 70px 
    .sort-div
        display flex
        padding 30px 0 0 0
        font-size 30px
        border-bottom 1px solid #d3d6db
        .sort-title
            width 17%
            text-align center
        .el-checkbox-group
            flex 1
            .el-checkbox
                font-size 30px
                margin-left 50px
                margin-bottom 15px
                width 250px
                .el-checkbox__label
                    font-size 30px
                    padding-left 30px
                    color #303133
                .el-checkbox__inner
                    width 50px
                    height 50px
                .el-checkbox__inner::after
                        border-width 3px
                        height 32px
                        left 16px
                        width 13px
    .sortBox
        clear: both;
        overflow: hidden;
        .headBox
            border-bottom 1px solid #ccc
            font-size 30px
        .tit
            display: inline-block;
            width: 17%;
            height: 100px;
            line-height:100px;
            text-align: center;
            float: left;
        .BoxChoic
            display inline-block
            height 100px
            line-height 100px
            margin-left 50px
            span 
                width :165px;
                height :65px;
                line-height:65px;
                text-align:center;
                color:#555;
                display inline-block;
            span.active
                background  #138BE7;
                color:#fff;
                border-radius:10px;   
        .bodyBox
            clear both
            padding 30px
            overflow hidden        
            li
                padding 0 10px 40px 
               .kejianBox
                    height 240px
                    border-radius 10px
                    background #E7F3FC 
                h5
                    color #666
                    font-size 12px
                    padding 10px 0 10px 0
                    width auto
                    font-weight 300
                    line-height 45px
                p
                    margin-top 10px
                    clear both
                    span
                        color #67C23A
                        font-size 18px
                        font-weight 900
                    i 
                        font-style normal
                        font-size 12px
                        color #999
                        float right    
    .uploadBtn
        position: fixed;
        right: 2%;
        bottom: 2%;
        font-size: 14px;
        z-index: 500;
        border-radius: 150px;
        .prel
            position relative
            width: 170px;
            height :170px;
            color: #fff;
            background :#148ce8;
            z-index: 500;
            border-radius: 150px;
            box-shadow:1px 2px 25px #148ce8;
            .upBox
                width: 1.5rem;
                height: 1.5rem;
                background: #148ce8;
                border-radius: 1.5rem;
                position: absolute;
                top: 50%;
                left: 50%;
                margin:-43% 0 0 -45%;
                text-align: center;
                p
                    text-align:center;
                    font-size:60px;
                .itemBtn
                    color: #fff;
                    text-decoration: none;

</style>

