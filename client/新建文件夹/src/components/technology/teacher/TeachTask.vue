<!-- 
* name: 教师版作业
* author: fjd
* time: 2018-7-31
-->
<template>
   	<div class="TeachTask">
		<!-- 导航 --> 
        <Header title='教师版管理作业'></Header>     
        <!-- 导航 -->
        <appNav :nameNumber="nameNumber" v-on:tabValue="updateTabValue($event)"></appNav>

		<!-- 写作业 -->
		<div class="Box" v-if="tabValue===1">
			<div class="selectBox" v-for="(item,index) in resData1" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiBtn">
						<button class="default">
							批改作业
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 完成作业 -->
		<div class="Box" v-if="tabValue===2">
			<div class="selectBox" v-for="(item,index) in resData2" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
				</div>
			</div>
		</div>
		<!-- 上传作业 -->
		<section class="uploadBtn" @click="showUpload = true">
            <div class="prel">
                <div class="upBox">
                    <p>+</p>
                    <a href="javascript:" class="itemBtn" style="display: inline-block;">新增作业</a>
                </div>
            </div>   
        </section> 
	</div>
</template>

<script>
import Nav from '@/components/technology/Tnav'
export default {
	name: 'TeachTask',
	components:{
		"appNav":Nav
	},
    data(){
        return {
			tabValue: 				1, //切换tab标签
			nameNumber:             5,//如果是数字5就展示 教师作业菜单，未批改、已完成 
            resData1: [
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'}			
			],
			resData2: [
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'}					
			]
        }
	},
	methods:{
		updateTabValue(type) { //切换考试状态
			this.tabValue = type
		}
	},
	created(){
		// console.log(this.nameNumber)
	}
}
</script>


<style lang="stylus">
	.TeachTask
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
					.default
						font-size 60px
						font-weight 900
						color #F56C6C
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

</style>