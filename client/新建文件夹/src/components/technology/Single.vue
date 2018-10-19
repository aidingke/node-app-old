<!-- 
* name: 单选题库
* author: fjd
* time: 2018-7-31
-->
<template >
    <div class="Single">
		<!-- 导航 --> 
        <Header title='单选题库'></Header> 	
		<div class="headBox">
			<h3><span class="addTi" @click="openAddInfo">+</span>每道选择题分数为<input v-model="scores" placeholder="0" @keyup=keyUpFun />分</h3>
		</div>
		<div class="group-div">
            <el-input placeholder="题目关键字" prefix-icon="el-icon-search"  class="input-with-select" v-model="keyword">
                <el-button slot="append" @click="onsearchHandle">搜索</el-button>
            </el-input>
		</div>	
		<div class="selectBox">
			<div class="contentBox">
				<h3> 
					<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选({{checkVal}}/{{allVal}})</el-checkbox>
				</h3>
				<div class="timuBox" v-for="(item,index) in resData" :key="index">
					<el-checkbox-group v-model="item.checkedSingles" @change="handleCheckedSingleChange">
						<div class="timu" >
							<h4>
								<el-checkbox :checked="item.checkedSingles">{{index+1}}、{{item.name}}</el-checkbox>
								<span style="float:right;" @click="deleAnswers(index)"><img src="static/img/dele.png" /></span>
								<span style="float:right;" @click="editAnswers(index)"><img src="static/img/edit.png" /></span>
							</h4>
							<el-radio-group v-for="(itec,index) in item.arr" :key="index" v-model="item.answers">
								<el-radio :label="index" :checked="item.answers">{{itec}}</el-radio>
							</el-radio-group>
						</div>
					</el-checkbox-group>
				</div>	
			</div>
		</div>
		

		<div class="selectBox">
			<el-row>
				<el-button type="primary">提交</el-button>
			</el-row>	
		</div>


        <el-dialog title="新增单选题" :visible.sync="showAdd">
            <el-form :model="form">
                <el-form-item label="题目描述">
                    <el-input v-model="form.name" maxlength=20 type="textarea" :autosize="{ minRows: 2, maxRows: 4}"  placeholder="请输入题目描述，最多36个字" >
                    </el-input>
                </el-form-item>
				<div>	
					<p style="font-size:18px;">
						<span style="color:#3DA2FE;float:right" @click="addAnswers()">添加</span>
						<span>选项（勾选口默认该选项为正确答案）</span>
					</p>
					<el-radio-group v-model="form.radio">
						<div v-for="(items,indexTit) in form.answers" :key="indexTit">
							<el-radio :label="indexTit">{{indexTit==0?'A':indexTit==1?'B':indexTit==2?'C':indexTit==3?'D':indexTit==4?'E':indexTit==5?'F':''}}</el-radio>
							<input placeholder="答案" v-model="items.content"/>
							<i class="el-dialog__close el-icon el-icon-close closeBtn" @click="closeAnswers(indexTit)"></i>
						</div>
					</el-radio-group>
				</div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="AddInfo">确 定</el-button>
				<el-button @click="showAdd = false">取 消</el-button>
            </div>
        </el-dialog>
		<el-dialog :visible.sync="dialogTableVisible" center :show-close="false">
			<div class="success-dialog">
				<div class="content">
					<img src="static/img/success.png" />
					<div class="name"> 新增多选题成功</div>
					<div class="time" v-if="sendMsgDisabled">{{time+'s回到详情页'}}></div>
				</div>	
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="openAddInfo">再加一个</el-button>
					<el-button @click="dialogTableVisible = false">知道了</el-button>
				</span>
			</div>	
		</el-dialog>

		<div class="scoreAll">
			<p>
				<span class="big">{{checkScore}}</span>
				/<span>{{this.allScores}}</span>
			</p>
			<p>试卷分值</p>
		</div>



	</div>
</template>

<script>
export default {
    name:'Single',
    data(){
        return {
			keyword:                '',
			scores:					10,//输入框，每道题多少分
			checkScore:				0,//记录选中的分数
			allScores:				0,//记录总分数	
			editBtn:				0,
			dataVal:				'',
			keyNums:				4,
			checkVal:				0,//记录选择多少个题
			checkAll: 				false,
			isIndeterminate: 		true,
			showAdd:             	false, 
			dialogTableVisible: 	false,//发布成功弹窗				
            time:               	3,   //默认时间3S
            sendMsgDisabled:    	false,
			form: {
				radio: '',
				name: '',
				answers:[
					{
						title:'0',
						content:''
					},
					{
						title:'1',
						content:''
					},
					{
						title:'2',
						content:''
					},
					{
						title:'3',
						content:''
					}
				]
			},			
			resData: [
				{
					"name": "汽车空调的运行原理以及空调结构解析是什么？",
					"arr":['A.压缩机', 'B.冷凝器', 'C.车门', 'D.底盘'],
					"answers":1,
					"checkedSingles":true
				}, {
					"name": "汽车空调的运行原理是什么？",
					"arr":['A.1压缩机', 'B.冷凝器', 'C.车门', 'D.底盘'],
					"answers":3,
					"checkedSingles":true
				},
				{
					"name": "汽车空调结构解析是什么？",
					"arr":['A.2压缩机', 'B.冷凝器', 'C.车门', 'D.底盘'],
					"answers":2,
					"checkedSingles":true
				},
				{
					"name": "空调的运行原理是什么？",
					"arr":['A.3压缩机', 'B.冷凝器', 'C.车门', 'D.底盘'],
					"answers":1,
					"checkedSingles":true
				},
				{
					"name": "空调结构解析是什么？",
					"arr":['A.4压缩机', 'B.冷凝器', 'C.车门', 'D.底盘'],
					"answers":3,
					"checkedSingles":true
				}
			]
        }
	},
	methods: {
		//重新给数据赋值空
		openAddInfo(){
			this.form.name = ''
			this.form.radio = ''
			this.form.answers.forEach(function(v,i){
				v.title=i
				v.content=""
			})
			// console.log(this.form)
			this.editBtn = -1 //编辑功能关闭
			this.showAdd = true
		},
		//弹出层 用于添加题目
		AddInfo(){
			let ywkData ={
				name:'',
				arr:[],
				answers:0,
				checkedSingles:true
			},cflag,b=[]

			//定义 cflag 单选内容框判断标识，b[] 用于存循环里的数组，赋值出来给 表单数组
			// console.log(this.form)
		
			if(this.form.name.length<5||this.form.name.length>37)
			{
				this.$message.error('题目描述字数不能少于5个且不能多于36个！')
				return false
			}else if(this.form.radio===''){
				this.$message.error('请选个正确答案(即垂下小圆圈)')
				return false
			}
			else{
				ywkData.name= this.form.name
				this.form.answers.forEach(function(items,index,array){
					if(items.content==''){
						cflag=1 //这里return false不管用，所以得在外层阻止
					}else{
						let e=index,f
						f = (e==0?'A':e==1?'B':e==2?'C':e==3?'D':e==4?'E':e==5?'F':'无解')
						b.push(f+'.'+items.content);
					}					
				})
				if(cflag==1){
					this.$message.error('选项内容必填')
					return false
				}
				ywkData.arr=b
				ywkData.answers= this.form.radio //正确答案
				// ywkData.answers=(a==0?'A':a==1?'B':a==2?'C':a==3?'D':a==4?'E':a==5?'F':'无解')
				// console.log(ywkData)
				//更新和添加数据接口在此判断
				if(this.editBtn!=-1){	
					this.resData.splice(this.editBtn,1,ywkData);
					// console.log(this.resData[this.editBtn])
					// return false
				}else{
					this.resData.push(ywkData)
				}
			}
			this.showAdd = false
			this.dialogTableVisible = true
			this.handleCheckedSingleChange()
			return false
		},
		editAnswers(x){
			this.showAdd = true		
			//给内容赋值
			this.form.name = this.resData[x].name
			this.form.radio = this.resData[x].answers
			let editArr = []
			// console.log(this.form)
			this.resData[x].arr.forEach(function(items,index){
				let array = {}
				array.title=index
				array.content=items.substring(2)
				editArr.push(array)
			})
			this.form.answers = editArr
			this.editBtn = x
		},
		addAnswers(){
			let basket ={
				title:'',
				content:''
			},a
			a = this.keyNums
			// basket.title=(a==4?'E':a==5?'F':'')
			basket.title = a
			this.keyNums++
			//只能添加2项选择
			if(this.form.answers.length<6){
				this.form.answers.push(basket)	
			}
			else{
				this.$message.error('亲不能再添加了！')
				return false
			}
		},
		//删除多选
		deleAnswers(index){
			let a = this.checkVal
			if(this.resData.length<3){
				this.$message.error('保留前2个选项，不能再删了亲！')
		        return false
			}else{
				this.resData.splice(index,1)
				this.handleCheckedSingleChange()
			}
		},
		//删除单选题
		closeAnswers(index){
			// console.log(this.form)
			if(index<2){
				this.$message.error('保留前2个选项，不能再删了亲！')
		        return false
			}else{
				this.form.radio=''
				// console.log()
				this.form.answers.splice(index,1)
				console.log(this.form)
				// this.form = this.form
			}			
		},
		onsearchHandle() {

		},
		//全选
		handleCheckAllChange(val) {
			// console.log(this.resData)
			let a
			if(this.checkAll){
				this.resData.forEach(function(items,index,array){
					items.checkedSingles=true;
					// console.log(index)
					a = index+1
				})
				
				// 
			}else{
				this.resData.forEach(function(items,index,array){
					items.checkedSingles=false;
				})
				a = 0
			}
			this.checkVal = a
			//分数
			this.checkScore = this.scores*a
		},
		// 点选
		handleCheckedSingleChange(value) {
			let a =true	,b=0 //(用来定义选中多少个的)
			this.resData.forEach(function(items,index,array){
				//点击后
				if(items.checkedSingles){
					b++
				}else{
					a=false
					return false
				}
			})
			this.allVal = this.resData.length
			this.checkVal = b
			this.checkAll=a?true:false
			//分数
			this.checkScore = this.scores*b
			this.allScores = this.scores*this.resData.length
		},
		keyUpFun(){
			this.checkScore = this.scores*this.checkVal
			this.allScores = this.scores*this.resData.length
		}
	},
	created(){
		this.allVal = this.resData.length
		// this.checkVal = this.resData.length
		let a =0
		this.resData.forEach(function(items,index,array){
			if(items.checkedSingles===true){
				a++
				return a
			}
		})
		this.allScores = this.scores*this.allVal
		this.checkScore = this.allScores
		
		this.checkVal = a
	},
	watch:{
		dialogTableVisible(val){
			if(val){
				let me = this;
				me.sendMsgDisabled = true;
				let interval = window.setInterval(function() {
					if ((me.time--) <= 1) {
						me.time = 3
						me.sendMsgDisabled = false
						me.dialogTableVisible=false
						window.clearInterval(interval); //停止
					}
				}, 1000);
			}
		}
	}
}
</script>


<style lang="stylus">
	.Single
		.headBox
			input 
				width 20%
				height 65px
				font-size 35px
				text-indent 15px
				margin 0 20px 0 20px
			.addTi
				float right 
				font-size 70px
				color #138be7	
		.headBox
			background :#fff;
			margin-top:40px;
			padding 0 30px 50px 30px;
			color:#909399
			h3
				color #333
				font-size:36px;
			.comCol
				color #E7A848
				font-size 28px
			.comWeight
				font-weight:900	
			.score
				border-bottom 2px solid #ddd
				padding-bottom 40px
				span 
					width 180px
					display inline-block		
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
				border-radius 0
				background #138be7
			.el-input__icon
			.el-input__prefix
				font-size 50px
				width 70px 
		.selectBox
			margin-top 30px;
			background #fff;
			border-bottom 4px solid #ddd;
			padding 0 30px 0 30px;
			h3
				border-bottom 1px solid #eee 
				.el-checkbox__label
					line-height 70px;
					font-size 36px;
					font-weight 900;
				.el-checkbox__input.is-checked+.el-checkbox__label
					color #67c23a
				.el-checkbox__input.is-checked .el-checkbox__inner
					background  #67c23a
					border-color #67c23a	 	
				.el-checkbox__input.is-focus .el-checkbox__inner
					border-color #ccc
				.el-checkbox__inner:after
					border: 2px solid #fff;
					border-left: 0;
					border-top: 0;
					height: 25px;
					left: 8px;
					top: 3px;
					width: 15px;
			.timuBox
				border-bottom 1px solid #eee 
				h4
					font-weight 300;
					line-height 60px;
					font-size 32px;
					color #303133;
					img
						width 45px
						height 45px
						margin 20px 40px 0 0
				.el-checkbox__input.is-checked+.el-checkbox__label
					color #666
				.el-checkbox__input.is-checked .el-checkbox__inner
					background  #666
					border-color #666	
				.el-radio__inner
					height 40px
					width 40px
					border 2px solid #dcdfe6
				.el-radio__input.is-checked .el-radio__inner
					background 	#bbb
				.el-radio__input.is-checked+.el-radio__label
					color #67C23A
				.el-radio__inner:after 
					width 15px
					height 15px
				.el-radio,.el-checkbox
					display inline-block
					margin-bottom 50px
				.el-radio+.el-radio
					margin-left 0
				.checkBox
					.el-checkbox
						margin-right :15px;
						width:190px;
						margin-top:30px;      
						.el-checkbox__inner
							width :45px;
							height :45px;
							border: 3px solid #ddd;
							
					.el-checkbox__inner:after
						border: 2px solid #fff;
						border-left: 0;
						border-top: 0;
						height: 25px;
						left: 8px;
						top: 3px;
						width: 15px;
					.el-checkbox+.el-checkbox
						margin-left :0px;	
				.el-radio-group
					display block			
		.continputBox
			p
				margin-bottom 30px;
				.inputTox
					height 70px;
					line-height 70px;
					padding-left 50px;
					width: 79%;
					border: 2px solid #eee;				
			textarea
				height: 200px 
				border: 1px solid #ddd
				width: 90%
				margin-top 20px
	
	.el-dialog__wrapper
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
			.el-radio__inner
				height 40px
				width 40px
				border 2px solid #dcdfe6
			.el-radio__inner:after 
				width 15px
				height 15px
			.el-radio,.el-checkbox
				display inline
				margin-bottom 50px
			.el-radio+.el-radio
				margin-left 0		
			.el-radio-group
				display block
				div
					margin-bottom 35px
					position relative
					padding-top 1%
					height 60px
					line-height 60px
					input 
						height 60px
						line-height 60px
						width 87%
						margin-left 15px
						color #666
						border 1px solid #ccc
						border-radius 15px 0 0 15px
						padding-left: 15px
					.el-dialog__headerbtn
						position static	
						line-height 60px
						height 60px
						border 1px solid #ccc
					.closeBtn
						position absolute
						font-size 50px
						right 1%
						border-left 1px solid #ccc
						padding-top 5px
						height 60px
						width: 7.5%
	.el-button--primary,.el-button--default
		width 47%
		height 90px
		display inline-block
		border-radius 10px
		margin 20px 0 30px 0  
		span	
			font-size 32px		
	.scoreAll
		height 120px
		background #E6A23C
		width 180px
		position fixed
		right 0
		bottom 3%
		text-align center
		color #ffffff
		border-radius: 90px 0 0 90px
		padding-top 20px
		p
			font-size 30px
			span
				font-size 20px
			.big
				font-weight 900
				font-size 40px
	.success-dialog
		.content
			text-align center
			img
				width 100px
				height 100px
			.name
				color #000
				font-size 36px
				font-weight bold
				margin 20px 0
			.time
				color #909399
				margin 50px 0
			.button-items
				text-align center
				.el-button
					padding 30px 0
					width 40%
					font-size 30px		
</style>