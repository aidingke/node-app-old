<!-- 
* name: 教师管理考核学生成绩列表
* author: fjd
* time: 2018-8-13
* 根据参数进来
-->

<template>
   	<div class="TeachPassDetails">
		<!-- 导航 --> 
        <Header title='教师管理考核学生成绩列表'></Header>    
		<div class="passBox">
			<div class="selectBox" v-for="(item,index) in resData1" :key="index">
				<div class="passBox">
					<h3 class="head">{{item.name}}</h3>
					<p class="ctit" style="margin-top:20px">学号 {{item.num}}</p>
					<p class="ctit">{{item.class}}</p>
					<div class="kaoshiScore">
						<span class="default">
							{{item.score}}<i>分</i>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TeachPassDetails',
    data(){
        return {
			resData1: [
				{"name": "刘得花1","num":'95271','class':'18级计算机汽车美容专修2班','score':18},
				{"name": "刘得花2","num":'95272','class':'18级计算机汽车美容专修2班','score':98},
				{"name": "刘得花3","num":'95273','class':'18级计算机汽车美容专修2班','score':50},
				{"name": "刘得花4","num":'95274','class':'18级计算机汽车美容专修2班','score':99},
				{"name": "刘得花5","num":'95275','class':'18级计算机汽车美容专修2班','score':60},
				{"name": "刘得花6","num":'95276','class':'18级计算机汽车美容专修2班','score':78},
				{"name": "刘得花7","num":'95277','class':'18级计算机汽车美容专修2班','score':98}		
			]
        }
	},
	methods:{
		async getTeachPassDetails(){
			//传参获得列表
			console.log(this.$route.params.id)
		}
	},
	created(){
		this.getTeachPassDetails()		
	}
}
</script>


<style lang="stylus">
	.TeachPassDetails
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