<!-- 
* name: 教师版技术培训
* author: fjd
* time: 2018-7-31
-->
<template>
   	<div class="TeachTraining">
		<!-- 导航 --> 
        <Header title='教师版技术培训'></Header>    
        <!-- 导航 -->
        <appNav :nameNumber="nameNumber" v-on:tabValue="updateTabValue($event)"></appNav>

		<!-- 报名培训 -->
		<div class="passBox" v-if="tabValue===1">
			<div class="selectBox" v-for="(item,index) in resData1" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiScore">
						<span class="default">
							{{item.nums}}
							<p>报名人数</p>
						</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 历史培训 -->
		<div class="passBox" v-if="tabValue===2">
			<div class="selectBox" v-for="(item,index) in resData2" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiScore">
						<span class="default">
							{{item.nums}}
							<p>报名人数</p>
						</span>
					</div>
				</div>
			</div>
		</div>

		<el-dialog title="新增培训" :visible.sync="showAdd">
            <el-form :model="form">
                <el-form-item label="培训时间">
                    <el-date-picker
						v-model="form.time"
						type="daterange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>						
                </el-form-item>
				<el-form-item label="主题">
                    <el-input v-model="form.name" maxlength=36 type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  placeholder="请输入主题，最多36个字" >
                    </el-input>
                </el-form-item>

				<el-form-item label="上传图片">
                    <p class="addTip">*请上传PPT、PDF文件，大小限制在3M内</p>
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :multiple="true" :on-progress="handlePreview" :on-remove="handleRemove" :show-file-list="true" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :auto-upload="true" list-type="picture">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar"><i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
				<el-form-item label="描述">
                    <el-input v-model="form.cont" maxlength=36 type="textarea" :autosize="{ minRows: 3, maxRows: 16}"  placeholder="请输入描述，最多36个字" >
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="AddInfo">确 定</el-button>
				<el-button @click="showAdd = false">取 消</el-button>
            </div>
        </el-dialog>
		<!-- 上传培训 -->
		<section class="uploadBtn" @click="openAddInfo">
            <div class="prel">
                <div class="upBox">
                    <p>+</p>
                    <a href="javascript:" class="itemBtn" style="display: inline-block;">新增培训</a>
                </div>
            </div>   
        </section> 
	</div>
</template>

<script>
import Nav from '@/components/technology/Tnav'
export default {
	name: 'TeachTraining',
	components:{
		"appNav":Nav
	},
    data(){
        return {
			tabValue: 				1, //切换tab标签
			nameNumber:             6,//如果是数字6就展示 培训菜单，即进行中、历史培训 
			showAdd:             	false, 
			form: {
				time: '',
				name:'',
				img:'',
				cont:''
			},
            resData1: [
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:91},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:92},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:93},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:94},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:52},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:32}		
			],
			resData2: [
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:32},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:52},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:94},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:93},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:92},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',nums:91}				
			]
        }
	},
	methods:{
		updateTabValue(type) { //切换考试状态
			this.tabValue = type
		},
		openAddInfo(){
			this.showAdd = true
		}
	},
	created(){
		// console.log(this.nameNumber)
	}
}
</script>


<style lang="stylus">
	.TeachTraining
		background :#eee;
		.selectBox
			margin-top 30px;
			background #fff;
			border-bottom 4px solid #ddd;
			padding 0 30px 0 30px;
			.passBox
				position relative
				padding 0 0 30px 0
				font-size 35px
				.head
					padding-top 25px
					color #555
				p
					font-size 30px	
				.comCol
					color #E7A544	
					margin-top 30px	
				.ctit
					color #888
				.kaoshiBtn
					position absolute
					right 2%
					bottom 15%
					.default
						background: #fff;
						border: 2px solid #ccc;
						padding: 30px 40px;
						border-radius: 50px;
				.kaoshiScore
					position absolute
					right 2%
					bottom 15%
					text-align center
					.default
						font-size 60px
						font-weight 900
						color #000
						p
							font-size 30px
							font-weight 300
							color #999
						i
							font-style: normal;
							font-size: 20px;
							font-weight: 300;
		.uploadBtn
			position fixed
			right  2%
			bottom  2%
			font-size  14px
			z-index 500
			border-radius  150px
			.prel
				position relative
				width  150px
				height  150px
				color  #fff
				background  #148ce8
				z-index  500
				border-radius  150px
				border: 12px solid #BCDEF8;
				.upBox
					width  150px
					height  150px
					border-radius 50px
					position absolute
					top 50%
					left 50%
					margin -50% 0 0 -50%
					text-align  center
					p
						text-align center
						font-size 60px
					.itemBtn
						color #fff
						text-decoration none	
		.el-dialog__wrapper
			.el-upload 
				border: 1px dashed #d9d9d9
				border-radius: 6px
				cursor: pointer
				position: relative
				overflow: hidden
				.avatar-uploader-icon
					font-size: 28px
					color: #8c939d
					width: 178px
					height: 178px
					line-height: 178px
					text-align: center
			.el-button--primary,.el-button--default
				width 47%
				height 90px
				display inline-block
				border-radius 10px
				margin 20px 0 30px 0  
				span	
					font-size 32px		
			.el-dialog
				width 65%
			.el-dialog__header
				text-align center
				padding-top 50px
				.el-dialog__title
					font-size 40px
					font-weight 900
			.el-dialog__body
				padding 30px 60px
				.el-form-item__label
					font-size 32px
					margin-bottom 20px
					display: block
					float: none
					text-align: left
				.el-input__inner
					height 70px
					width 100%	
					border none	
					input 
						height 60px
						line-height 60px
						width 86%
						margin-left 15px
						color #666
						border 1px solid #ccc
						// border-radius 15px 0 0 15px
						padding-left: 15px
					.el-dialog__headerbtn
						position static	
						line-height 60px
						height 60px
						border 1px solid #ccc
					.closeBtn
						position absolute
						font-size 50px	
						height: 82%
						right 3%
						border-left 1px solid #ccc
						padding-top 1%
						width: 7%							

</style>