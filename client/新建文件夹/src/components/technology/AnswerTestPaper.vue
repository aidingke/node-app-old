<!-- 
* name: 题库
* author: fjd
* time: 2018-7-31
-->
<template>
    <div class="testPape">
		<!-- 导航 -->
        <Header title="题库"></Header>
		<div class="headBox">
			<h3>汽车空调的运行原理以及空调结构解析题库</h3>
			<p class="comCol mt">考试时间：2018-05-15 14:00-16:00</p>
			<div class="score mt">
				<p><span class="comCol comWeight mr">100</span> <span class="comCol comWeight">15</span></p>	
				<p><span class="mr">卷面分数</span> <span>题目总数</span></p>
				<p>备注&nbsp;&nbsp;&nbsp;&nbsp;
					<span><i style="display: inline-block;width: 15px;height: 15px;background: #67C23A;margin: 0 3px -3px 0;"></i>绿色表示为正确答案</span> 
					<span><i style="display: inline-block;width: 15px;height: 15px;background: #F56C6C;margin: 0 3px -3px 0;"></i>红色字体表示选错</span></p>
			</div>	
			<p class="mt">
				描述：奶油坚果酱中套餐#不好吃。还是奥尔良，麦辣鸡腿那些最经典的汉堡好吃。薯条软得不能再软了。我备注了可乐换芬达也没有换。#麦辣鸡翅2块#就还好，里面的肉挺嫩的，很入味。
			</p>
		</div>

		<div class="selectBox">
			<h3 class="line">一、单选题（每题1分，合计3分）</h3>
			<div class="contentBox">
				<div class="timuBox">
					<div class="timu line">
						<h4>1.汽车最重要的内部部件是什么呢？</h4>
						<el-radio-group v-model="radio1">
							<el-radio :label="1">A.压缩机</el-radio>
							<el-radio :label="2">B.冷凝器</el-radio>
							<el-radio :label="3">C.车门</el-radio>
							<el-radio :label="4">C.底盘</el-radio>
						</el-radio-group>
					</div>
					<div class="timu line">
						<h4>2.汽车最重要的内部部件是什么呢？</h4>
						<el-radio-group v-model="radio2">
							<el-radio :label="1">A.压缩机</el-radio>
							<el-radio :label="2">B.冷凝器</el-radio>
							<el-radio :label="3">C.车门</el-radio>
							<el-radio :label="4">C.底盘</el-radio>
						</el-radio-group>
					</div>
					<div class="timu line">
						<h4>3.汽车最重要的内部部件是什么呢？</h4>
						<el-radio-group v-model="radio3">
							<el-radio :label="1">A.压缩机</el-radio>
							<el-radio :label="2">B.冷凝器</el-radio>
							<el-radio :label="3">C.车门</el-radio>
							<el-radio :label="4">C.底盘</el-radio>
						</el-radio-group>
					</div>
				</div>	
			</div>
		</div>
		<div class="selectBox">
			<h3 class="line">二、多选题下列题目中至少有2个以上的正确题目，多选少选均不得分（每题2分，合计4分）</h3>
			<div class="contentBox">
				<div class="timuBox">
					<div class="timu line">
						<h4>1.汽车最重要的内部部件是什么呢？</h4>
						<div class="checkBox">
							<el-checkbox-group v-model="checkedSubject" @change="handleCheckedSubjectsChange">
								<el-checkbox v-for="subject in Subjects" :label="subject" :key="subject">{{subject}}</el-checkbox>
							</el-checkbox-group>
						</div> 	
					</div>
				</div>
				<div class="timuBox">
					<div class="timu line">
						<h4>2.汽车最重要的内部部件是什么呢？</h4>
						<div class="checkBox">
							<el-checkbox-group v-model="checkedSubject" @change="handleCheckedSubjectsChange">
								<el-checkbox v-for="subject in Subjects" :label="subject" :key="subject">{{subject}}</el-checkbox>
							</el-checkbox-group>
						</div> 	
					</div>
				</div>
			</div>
		</div>
		<div class="selectBox">
			<h3 class="line">三、判断题（每题1分，合计3分）</h3>
			<div class="contentBox">
				<div class="timuBox">
					<div class="timu line">
						<h4>1.汽车最重要的内部部件是什么呢？</h4>
						<el-radio-group v-model="radio4">
							<el-radio :label="1">A.对</el-radio>
							<el-radio :label="2">B.错</el-radio>
						</el-radio-group>
					</div>
				</div>
				<div class="timuBox">
					<div class="timu line">
						<h4>2.汽车最重要的内部部件是什么呢？</h4>
						<el-radio-group v-model="radio5">
							<el-radio :label="1">A.对</el-radio>
							<el-radio :label="2">B.错</el-radio>
						</el-radio-group>
					</div>
				</div>
			</div>	
		</div>	
		<div class="selectBox">
			<h3 class="line">四、填空题（每题1分，合计5分）</h3>
			<div class="contentBox">
				<div class="timuBox">
					<div class="timu line">
						<h4>1.旋转活塞从上到下，此时车本大健康，活塞上方容积增大，产生真快犀利，燃油和空气混合穿暗色调的说法是大法官刚发挂号费。阿斯顿发顺丰可视对讲很快的会计师电话费款到发货。</h4>
						<div class="continputBox">
							<p> 
								<span>( 1 )</span> 
								<span> <input type="text" class="inputTox" placeholder="答案"> </span>
							</p>
							<p> 
								<span>( 2 )</span> 
								<span> <input type="text" class="inputTox" placeholder="答案"> </span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="selectBox">
			<h3 class="line">五、论述题（每题3分，合计6分）</h3>
			<div class="contentBox">
				<div class="timuBox pb line mt">
					<div class="timu ">
						<h4>1.发动机是汽车的心脏</h4>
						<div class="continputBox">
							<textarea class="form-control" name="description" placeholder="答案" />
						</div>
					</div>
				</div>
				<div class="timuBox pb line mt">
					<div class="timu">
						<h4>2.发动机是汽车的心脏</h4>
						<p><img src="http://img.baidu.com/hi/jx2/j_0028.gif"><img src="http://img.baidu.com/hi/jx2/j_0027.gif"></p>
						<div class="continputBox">
							<textarea class="form-control" name="description" placeholder="答案" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="selectBox">
			<el-row>
				<el-button type="primary">提交</el-button>
			</el-row>	
		</div>

	</div>
</template>

<script>
export default {
	name:'TestPaper',
    data(){
        return {
			radio1: '',
			radio2: '',
			radio3: '',
			radio4: '',
			radio5: '',
			checkedSubject:         [''],                                         
            Subjects:               ['压缩机', '冷凝器', '车门', '底盘']
        }
	},
	methods: {
		handleCheckedSubjectsChange(value) {
			let checkedCount = value.length;
			this.checkAll = checkedCount === this.Subjects.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.Subjects.length;
		}
	}	
}
</script>


<style lang="stylus">
	.mt
		margin-top 30px
	.mr
		margin-right 20px
	.pb
		padding-bottom 20px	
	.line
		border-bottom 1px solid #eee 
	.testPape
		background :#eee;
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
					width 400px
					display inline-block
		.selectBox
			margin-top 30px;
			background #fff;
			border-bottom 4px solid #ddd;
			padding 0 30px 0 30px;
			h3
				line-height 70px;
				font-size 36px;
				font-weight 900;
			.timuBox
				h4
					font-weight 300;
					line-height 60px;
					font-size 32px;
					color #303133;
				.el-radio__input.is-checked .el-radio__inner,.el-radio__inner
					height 40px
					width 40px
					border 2px solid #dcdfe6;
				.el-radio__inner:after 
					width 15px
					height 15px
				.el-radio,.el-checkbox
					display block
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
	.el-button--primary
		width 90%
		height 90px
		display block
		border-radius 15px
		margin 20px 0 30px 0		
</style>