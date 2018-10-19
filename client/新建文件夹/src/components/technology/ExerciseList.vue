<!-- 
* name: 练习题列表
* author: fjd
* time: 2018-7-31
-->
<template>
   	<div class="ExerciseList">
		<!-- 导航 -->
        <Header title='练习题列表'></Header>   
		<div class="exerciseBox" style="display:none">
			<div class="head">
				<p>汽车空调的运行原理以及空调结构解析题库<span style="float:right">张金涛</span></p>
			</div>
			<div class="listBox">
				<ul>
					<li>2019-05-06  14:15:13</li>
					<li>2019-05-06  14:15:13</li>
					<li>2019-05-06  14:15:13</li>
					<li>2019-05-06  14:15:13</li>
					<li>2019-05-06  14:15:13</li>
				</ul>
			</div>
			<div class="selectBox">
				<el-row>
					<el-button type="primary">重新练习</el-button>
				</el-row>	
			</div>
		</div>
		<div class="noInfo">
			<div class="default">
				<img src="static/img/class-default.png" alt="" />
                <div class="not-class">
					暂无相关信息
				</div>
                <div class="add-text">
					点击下方按钮开始练习
				</div>	
				<el-row>
					<el-button type="default" class="plain">开始练习</el-button>
				</el-row>
			</div>	
                
		</div>
	</div>
</template>

<script>
export default {
	name: 'ExerciseList',
    data(){
        return {
			title:'练习题列表'
        }
	},
	created(){

	}
}
</script>


<style lang="stylus">
	.ExerciseList
		background #fff
		.exerciseBox
			.head
				padding 25px
				font-size 30px
				span 
					float right 
					color #67c23a
			.listBox
				background #eeeeee
				padding 15px
				ul
					overflow hidden
					background #fff
					li
						padding 20px 
						font-size 26px
						border-bottom 1px solid #ccc
			.selectBox
				margin 0 auto
				text-align center
				.el-button--primary
					width: 90%
					padding: 25px
					margin-top: 1%
		.noInfo		
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
					font-size 30px		
</style>