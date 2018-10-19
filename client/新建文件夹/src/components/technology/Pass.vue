<!-- 
* name: 考核，status状态为1 教师，其他 学生
* author: fjd
* time: 2018-8-13
-->

<template>
    <div class="Pass">
        <!-- 导航 -->
        <Header title='考核'></Header>  
        <!-- 导航 -->
        <Nav :nameNumber="nameNumber" v-on:tabValue="updateTabValue($event)"></Nav>

		<!-- 待考核 -->
		<div class="passBox" id="WaitPass" v-if="tabValue===1">
			<div class="selectBox" v-for="(item,index) in resData1" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiBtn">
						<button class="default">
							开始考试
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 考核中 -->
		<div class="passBox" id="GoingPass" v-if="tabValue===2">
			<div class="selectBox" v-for="(item,index) in resData2" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiBtn">
						<button class="default">
							开始考试
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 考核后 -->
		<div class="passBox" id="EndPass" v-if="tabValue===3">
			<div class="selectBox" v-for="(item,index) in resData3" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiScore">
						<span class="default">
							{{item.score}}<i>分</i>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="nav"> 
            <router-link class="nav-item"  to="/Pass">学生状态<i class="line"></i></router-link>
            <router-link class="nav-item"  to="/teachPass">教师状态<i class="line"></i></router-link>
		</div>  
	</div>
</template>

<script>
// import Header from '@/components/technology/Header'
import Nav from '@/components/technology/Tnav'
export default {
	name: 'Pass',
	components:{Nav},
    data(){
        return {
			status:					2,//1教师状态,2学生
			tabValue: 				1, //切换tab标签
			nameNumber:             1,//如果是数字1就展示 考核菜单，即待、进行、结束考核 
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
			],
			resData3: [
				{"name": "2018年第一季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:98},
				{"name": "2018年第2季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:298},
				{"name": "2018年第3季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:198},
				{"name": "2018年第4季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:128},
				{"name": "2018年第5季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:108},
				{"name": "2018年第6季度考核","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',score:99}				
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
		// 页面跳转
		if(this.status===1){
			this.$router.push("/teachPass");	
		}
	}
}
</script>


<style lang="stylus">
	.Pass
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


</style>