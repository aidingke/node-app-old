<!-- 
* name: 综合查询组件
* author: gxr
* time: 2018-7-31
-->
<template lang="pug">
    .integratedQuery
        Header(title="综合查询")
        .tab-cont
            .tab(:class="tabValue ==1?'on':''", @click="tabChange(1)") 电路图
            .tab(:class="tabValue ==2?'on':''", @click="tabChange(2)") 流体数据
        template(v-if="tabValue ==1")
            .group-div
                <el-input key="serachCarKeyWord" placeholder="请输入线路图关键字" prefix-icon="el-icon-search"  class="input-with-select" v-model="keyword">
                    <el-button slot="append" @click="onsearchHandle">搜索</el-button>
                </el-input>
            ul.circuit-list
                li.circuit-item(@click="onCircuitDetails")
                    .circuit-title 5464654标题
                    .circuit-img
                        img(src="static/img/circuit-img.png")
                        span 2张
                li.circuit-item
                    .circuit-title 5464654标题
                    .circuit-img
                        img(src="static/img/circuit-img.png")
                        span 2张
        template(v-if="tabValue ==2")
            .group-div
                <el-input key="serachBrand" placeholder="请输入车系车型" prefix-icon="el-icon-search"  class="input-with-select" v-model="brand">
                    <el-button slot="append" @click="onsearchHandle">搜索</el-button>
                </el-input>
            ul.serviceBook-list
                li.serviceBook-item(@click="onStreamingDetails")
                    span.title 奔驰 X1 2014年款 流体数据查询
                    span.check-view 查看

</template>
<script>
    export default {
        name: 'IntegratedQuery',
        data () {
            return {
                tabValue: 1,
                keyword: '',
                brand: ''
            }
        },
        methods:{
            async getCircuitList(){ //获取电路图数据
                let params = {};
                const res = await this.$axios.getCircuitList(params);
            },
            tabChange(num) {
                this.tabValue = num;
            },
            onsearchHandle(){

            },
            onCircuitDetails() { //电路图详情
                this.$router.push({
                    path: './CircuitDetails'
                });
            },
            onStreamingDetails() { //流体数据查询详情
                this.$router.push({
                    path: './StreamingList'
                });
            }
        },
        mounted(){
            this.getCircuitList();
        }
    }
</script>
<style lang="stylus">
.integratedQuery
    .tab-cont
        height 130px
        display flex
        justify-content center
        align-items center
        border-bottom: 1px solid #d3d6db
        .tab
            padding 0 130px
            font-size 40px
            line-height 130px
        .on
            border-bottom 3px solid #138be7
    .group-div
        padding 30px
        background #efefef
        input 
            width: 100%
            height: 90px
            font-size: 35px
            text-indent: 65px
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
    .circuit-list
        .circuit-item
            display flex
            align-items center
            justify-content space-between
            padding 30px
            border-bottom 1px solid #d3d6db
            .circuit-title
                font-size 34px
                flex 1
            .circuit-img
                position relative
                margin-left 20px
                img
                    width 160px
                span 
                    display flex 
                    width 100%
                    height 50px
                    position absolute
                    left 0
                    bottom 0
                    background rgba(0,0,0,0.3)
                    color #fff
                    font-size 24px
                    align-items center
                    justify-content center
    .serviceBook-list
        .serviceBook-item
            display flex
            align-items center
            justify-content space-between
            padding 50px 30px
            border-bottom 1px solid #d3d6db
            font-size 34px
            .title
                flex 1
            .check-view 
                color #138be7
                margin-left 20px
</style>
