<!-- 
* name: 课件
* author: fjd
* time: 2018-7-31
-->
<template lang="pug">
    <div class="course">
        Header(title="老师课件")
        .group-div
            <el-input placeholder="老师名称" prefix-icon="el-icon-search"  class="input-with-select" v-model="keyword">
                <el-button slot="append" @click="onsearchHandle">搜索</el-button>
            </el-input>

        <!-- 复选框 -->
        .sort-div
            <div class="sort-title">老师姓名</div>
            <el-checkbox-group  v-model="sortCheckList" @change="handleCheckedTeachChange">
                <el-checkbox v-for="(item,key) in teachersList" :label="item" :key="key">{{item}}</el-checkbox>
            </el-checkbox-group>
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

    template(v-if="status ===1")
        <section class="uploadBtn" @click="showUpload = true">
            <div class="prel">
                <div class="upBox">
                    <p>+</p>
                    <a href="javascript:" class="itemBtn" style="display: inline-block;">上传课件</a>
                </div>
            </div>   
        </section>   
        <el-dialog title="上传课件" :visible.sync="showUpload">
            <el-form :model="form">
                <el-form-item label="课程名称">
                    <el-input v-model="form.name" maxlength=20 type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  placeholder="请输入内容最多20个字" >
                    </el-input>
                </el-form-item>
                <el-form-item label="所属科目">
                    <el-select v-model="form.region" placeholder="请选择科目">
                        <el-option label="电控系统" value="电控系统"></el-option>
                        <el-option label="底盘系统" value="底盘系统"></el-option>
                        <el-option label="车身系统" value="车身系统"></el-option>
                        <el-option label="空调系统" value="空调系统"></el-option>
                        <el-option label="电器系统" value="电器系统"></el-option>
                        <el-option label="发动机系统" value="发动机系统"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上传课件">
                    p.addTip *请上传PPT、PDF文件，大小限制在3M内
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :multiple="true" :on-progress="handlePreview" :on-remove="handleRemove" :show-file-list="true" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :auto-upload="true" list-type="picture">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    
                    // <el-upload class="avatar-uploader" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-preview="handlePreview" :on-remove="handleRemove" >
                    //     <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    // </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                // <el-button @click="showUpload = false">取 消</el-button>
                <el-button type="primary" @click="showUpload = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>
<script>
    export default {
        name: 'course',
        data () {
            return {
                keyword:                '',
                status:                 1, //为1的时候是教师版   
                selectType:             0,                                                       
                checkAll:               false,                                    
                sortCheckList:          [''],        
                imageUrl:               '', 
                // imageUrl:               'static/img/kj.jpg',                                                 
                teachersList:           ['陈松鱼', '陈松', '陈的鱼', '黄盖','黄盖啊','周瑜啊'],    
                checkedSubject:         ['电控系统'],                                         
                Subjects:               ['电控系统', '底盘系统', '车身系统', '空调系统','电器系统','发动机系统'], 
                isIndeterminate:        true,
                getKejianItems:           {},
                resData :               {
                    "kejian_zh": [
                        {
                            "tit": "汽车空调的运行原理以及空调结构解析",
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
                            "tit": "8汽车空调的运行原理以及空调结构解析",
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
                },
                showUpload:             false, 
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                // this.imageUrl = URL.createObjectURL(file.raw);
                // this.imageUrl ="static/img/kj.jpg"
		    },
	        beforeAvatarUpload(file) {
                // console.log(file)

                let fileName = file.name.lastIndexOf(".");//取到文件名开始到最后一个点的长度
                let fileNameLength = file.name.length;//取到文件名长度
                let fileFormat = file.name.substring(fileName + 1, fileNameLength);//截

                var this_ = this
				var reader = null;
		        const isLt2M = file.size / 1024 / 1024 < 3;
		        if (!isLt2M) {
		            this.$message.error('上传文件大小不能超过 3MB!');
		            return false
		        }

                if(fileFormat.toLowerCase()==='pdf'||fileFormat.toLowerCase()==='ppt')
                {
                    reader = new window.FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = function (e) {
                        // this_.uploadResques(e.target.result,file)
                    }
                }else{
                    this.$message.error('请上传PPT、PDF文件');return false;
                }
	        },
	        // uploadResques:function(baseFile,file){//上传参数
	        // 	var params={
	        // 		reqAct:'uploadPic',
	        // 		file:baseFile
	        // 	}
	        // 	return new Promise(resolve =>{
			//         	$http.post('/csc-demo/p/parts',qs.stringify(params)).then(data => {
			//         		console.log(2112)
		    //             resolve(data)
           	//  		})
	        // 	})
            // },
            
            handleRemove(file, fileList) {
                // console.log(file, fileList);
            },
            handlePreview(event, file, fileList) {
                // console.log('hah');
            },
            onsearchHandle() {

            },
            handleCheckedTeachChange(value) {
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
.course        
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
        clear both
        overflow hidden
        .headBox
            border-bottom 1px solid #ccc    
        .tit
            display inline-block
            width 17%
            height 100px
            line-height 100px
            text-align center
            float left
        .BoxChoic
            display inline-block
            height 100px
            line-height 100px
            margin-left 50px
            span 
                width 165px
                height 65px
                line-height 65px
                text-align center
                color #555
                display inline-block
            span.active
                background  #138BE7
                color #fff
                border-radius 10px   
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
        position fixed
        right  2%
        bottom  2%
        font-size  14px
        z-index 500
        border-radius  150px
        .prel
            position relative
            width  170px
            height  170px
            color  #fff
            background  #148ce8
            z-index  500
            border-radius  150px
            border: 12px solid #BCDEF8;
            // box-shadow 1px 2px 25px #148ce8
            .upBox
                width  150px
                height  150px
                // background #148ce8
                border-radius 50px
                position absolute
                top 50%
                left 50%
                margin -43% 0 0 -45%
                text-align  center
                p
                    text-align center
                    font-size 60px
                .itemBtn
                    color #fff
                    text-decoration none
    .el-dialog__wrapper
        .el-dialog__close
            font-size 60px
        .el-dialog__header
            text-align center
            padding-top 50px
            .el-dialog__title
                font-size 40px
                font-weight 900
        .el-dialog__body
            padding 30px 60px
            .el-textarea__inner
            .el-form-item__label
                font-size 32px
                margin-bottom 20px
                display: block
                float: none
                text-align: left
            .el-input__inner
                height 70px
                width 100%
            .el-select
                width 100%
            .addTip 
                font-size 15px
                color #ccc
            .el-upload 
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
        .el-button--primary
            width 90%
            height 90px
            display block
            border-radius 15px
            margin 20px 0 30px 0        
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
.el-select-dropdown 
    .el-select-dropdown__item
        height 60px   
        line-height 60px         
</style>

