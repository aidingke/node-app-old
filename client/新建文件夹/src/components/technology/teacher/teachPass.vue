<!-- 
* name: 教师管理考核
* author: fjd
* time: 2018-8-13
-->

<template>
   	<div class="TeachPass">
		<!-- 导航 --> 
        <Header title='教师管理考核'></Header> 
        <!-- 导航 -->
        <appNav :nameNumber="nameNumber" v-on:tabValue="updateTabValue($event)"></appNav>

		<!-- 待批卷 -->
		<div class="passBox" id="WaitPass" v-if="tabValue===1">
			<div class="selectBox" v-for="(item,index) in resData1" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
					<div class="kaoshiBtn" v-if="item.status===false">
						<!-- <router-link class="default" v-bind:to="'/teachPass/'+item.id" disabled="disabled">
							尚未开始
						</router-link> -->
						<button class="default" disabled="disabled" style="width:100%">
							尚未开始
						</button>
					</div>
					<div class="kaoshiBtn" v-if="item.status===true">
						<router-link class="default" v-bind:to="'/TeachPassDetails/'+item.id">
							详情
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 批卷完成 -->
		<div class="passBox" id="GoingPass" v-if="tabValue===2">
			<div class="selectBox" v-for="(item,index) in resData2" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="comCol">{{item.time}}</p>
					<p class="ctit">{{item.cont}}</p>
				</div>
			</div>
		</div>
		<div class="nav"> 
            <router-link class="nav-item"  to="/Pass">学生状态<i class="line"></i></router-link>
            <router-link class="nav-item"  to="/TeachPass">教师状态<i class="line"></i></router-link>
		</div> 
	</div>
</template>

<script>
import Nav from '@/components/technology/Tnav'
export default {
	name: 'TeachPass',
	components:{
		"appNav":Nav
	},
    data(){
        return {
			status:					1,//1教师状态,2学生
			tabValue: 				1, //切换tab标签
			nameNumber:             4,//如果是数字4就展示 教师考核菜单，即待批卷、批卷完成 
			resData1: [
				{"name": "2018年第一季度考核",status:false,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:1},
				{"name": "2018年第一季度考核",status:true,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:2},
				{"name": "2018年第一季度考核",status:true,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:3},
				{"name": "2018年第一季度考核",status:true,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:4},
				{"name": "2018年第一季度考核",status:true,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:5},
				{"name": "2018年第一季度考核",status:true,"time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统',id:6}			
			],
			resData2: [
				{"name": "2019年第一季度考核2","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
				{"name": "2019年第一季度考核2","time":'2018-05-06 14:00-16:00','cont':'汽车是空调的老板，此次开会针对空调冷却系统'},
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
		
	}
}
</script>


<style lang="stylus">
	.TeachPass
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
					width 250px
					.default
						background: #fff
						border: 2px solid #ccc
						padding: 30px 40px
						border-radius: 50px
						display: block
						text-align: center
						color: #666
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