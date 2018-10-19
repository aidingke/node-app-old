<!-- 
* name: 综合查询（视频列表）组件
* author: gxr
* time: 2018-8-1
-->
<template lang="pug">
    .videoList
        Header(title="视频")
        .group-div
            <el-input placeholder="视频关键字" prefix-icon="el-icon-search"  class="input-with-select" v-model="keyword">
                <el-button slot="append" @click="onSearchHandle">搜索</el-button>
            </el-input>
        .sort-div
            <div class="sort-title">视频类别</div>
            <el-checkbox-group  v-model="sortObj.sortCheckList" @change="onChangeSort">
                <el-checkbox v-for="(item,key) of sortObj.sortList" :label="item.sortId" :key="item.sortId">{{item.sortName}}</el-checkbox>
            </el-checkbox-group>
        .sort-div
            .sort-title 排序
            div.rank-box
                <span class="rank-item" v-for="(item,key) of rankObj.rankList" :key="item.rankId" :class="item.rankId==rankObj.checkRank?'active': ''" @click="onChangeRank(item.rankId)"> {{item.rankName}}</span>
        .sortList-div
            <el-row>
                <el-col :span="6" v-for="(item,kye) of renderDataList" :key="item.videoId">
                    .item-div(@click="onLinkDetails(item.videoId)")
                        img(src="static/img/video-img.png")
                        p.video-name {{item.videoName}}
                        p.num 
                            span {{item.playNum}}个播放量
                            span {{item.videoTime}}
                        p.price {{item.videoPrice>0? item.videoPrice+'元': '免费'}}
                </el-col>
            </el-row>
            <el-pagination class="page-div" v-if="total>10" @current-change="currentChange" background layout="prev, pager, next" :total="total"></el-pagination>
        .noData
            img(src="static/img/no-data-icon.png")
            p 暂无相关数据
</template>
<script>
    export default {
        name: 'VideoList',
        data () {
            return {
                keyword: '',
                sortObj: {
                    sortList: [ //类别
                        {
                            sortId: 0,
                            sortName: '软件使用'
                        },
                        {
                            sortId: 1,
                            sortName: '硬件使用'
                        },
                        {
                            sortId: 2,
                            sortName: '诊断及拆装'
                        },
                        {
                            sortId: 3,
                            sortName: '培训'
                        },
                        {
                            sortId: 4,
                            sortName: '项目营销'
                        }
                    ],
                    sortCheckList: [], //选择类别
                },
                rankObj: {
                    rankList: [ //排序方式
                        {
                            rankId: 0,
                            rankName: '综合排序'
                        },
                        {
                            rankId: 1,
                            rankName: '最新发布'
                        },
                        {
                            rankId: 2,
                            rankName: '播放最多'
                        },
                    ],
                    checkRank: 0, //选择排序方式
                },
                renderDataList: [
                    {
                        videoId: 1,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 0
                    },
                    {
                        videoId: 2,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 100
                    },
                    {
                        videoId: 3,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 0
                    },
                    {
                        videoId: 4,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 100
                    },
                    {
                        videoId: 5,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 0
                    },
                    {
                        videoId: 6,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 100
                    },
                    {
                        videoId: 7,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 0
                    },
                    {
                        videoId: 8,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 100
                    },
                    {
                        videoId: 9,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 0
                    },
                    {
                        videoId: 10,
                        videoName: '汽车空调的运行原理以及空调结构解析',
                        playNum: 10,
                        videoTime: '2018-8-3',
                        videoPrice: 100
                    },
                ],
                total: 100, // 总页数
            }
        },
        methods:{
            onSearchHandle() {
                if(this.keyword == '') {
                    this.$message({
                        message: '请输入关键字',
                        type: 'warning',
                        center: true,
                        duration: 1000
                    });
                    return false;
                } else {
                    
                }
            },
            onLinkDetails(id){
                this.$router.push({
                    path: './VideoDetails?id='+id
                });
            },
            onChangeSort(){ //选择类别

            },
            onChangeRank(rankId) { //选择排序
                this.rankObj.checkRank = rankId;
            },
            currentChange() { //切换分页

            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="stylus">
.videoList
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
        align-items center
        padding 30px
        font-size 30px
        border-bottom 1px solid #d3d6db
        .sort-title
            width 120px
        .el-checkbox-group
            flex 1
            .el-checkbox
                font-size 30px
                margin-left 50px
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
        .rank-box
            flex 1
            .rank-item
                margin 0 20px
                padding 15px 20px
                line-height 2
            .rank-item.active
                border-radius 10px
                background #138be7
                color #fff
    .sortList-div
        padding 40px
        .item-div
            margin 0 10px 40px
            font-size 35px
            img 
                display block
                width 100%
            .video-name
                padding 15px
            .num
                display flex
                justify-content space-between
                padding 5px
                font-size 24px
                color #909399
            .price
                color #67C23A
                padding 6px
    .page-div
        padding 30px
        text-align center
        font-weight normal
        li, button, span:not([class*=suffix])
            font-size 30px
            height 70px
            line-height 70px
        .btn-next .el-icon, .btn-prev .el-icon
            font-size 30px
        .btn-next, .btn-prev, .el-pager li
            min-width 60px
        .el-button:focus,el-button:hover 
          color #409EFF
          border-color #c6e2ff
          background-color transparent

    .noData
        margin-top 200px 
        padding 0 30px
        font-size 35px
        text-align center
        img 
            width 480px
            margin-bottom 20px
.el-message
    padding 30px
    .el-message__icon 
        display none
    .el-message__content
        font-size 35px
</style>
