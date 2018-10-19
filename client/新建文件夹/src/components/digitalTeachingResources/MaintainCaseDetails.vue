<!-- 
* name: 维修库案例（故障点详情）组件
* author: gxr
* time: 2018-7-27
-->
<template lang="pug">
    .maintainCaseDetails
        Header(title="故障详情")
        .title-div
            h3 {{renderData.title}}
            p {{phenomenon}}
        .maintainCaseDetails-conts
            .details-item(v-for="(v, key) of renderData.list" :key="key")
                h4 {{v.fault_point}}
                p
                    strong 故障部件：
                    span {{v.fault_component}}
                p 
                    strong 故障百科：
                    span {{v.encyclopedia}}
                .scheme(v-if="v.plan.length>0")
                    p(v-for="(value,i) of v.plan" :key="i")  
                        strong 方案{{i+1}}：
                        span {{value}}
</template>
<script>
    export default {
        name: 'MaintainCaseDetails',
        data () {
            return {
                renderData: [], //渲染数据
                phenomenon: '', //故障描述
            }
        },
        methods:{
            
        },
        mounted(){
            const sortStr = sessionStorage.getItem('sortStr');
            this.renderData = JSON.parse(sortStr);
            this.phenomenon = this.renderData.list[0].phenomenon;
        }
    }
</script>
<style scoped lang="stylus">
.maintainCaseDetails
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    background #efefef
    overflow-y auto
    -webkit-overflow-scrolling touch
    z-index 3
    .title-div
        font-size 40px
        padding 30px 
        border-bottom 1px solid #d3d6db
        background #fff
        h3
            margin-bottom 20px
        p
            font-size 28px
            color #909399
    .maintainCaseDetails-conts
        background #fff
        margin 30px
        .details-item
            border-bottom 1px solid #d3d6db
            padding 30px
            letter-spacing 3px
            h4
                font-size 38px
                margin 10px 0
            p 
                margin-bottom 10px
                font-size 30px
                line-height 2
</style>
