<!-- 
* name: 综合查询（选车型）组件
* author: gxr
* time: 2018-7-30
-->
<template lang="pug">
    .selectCarModels
        Header(title="选择车型")
        .title-div 车系
        .carInfo-div
            .sort-letter
                span.active 热门
                span A
                span B
                span C
                span D
                span A
                span B
                span C
                span D
                span A
                span B
                span C
                span D
                span A
                span B
                span C
                span D
                span A
                span B
                span C
                span D
                span A
                span B
                span C
                span D
            .sort-brand
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪
                .group-div
                    p 
                        img(src="https://www.wanguoqiche.com/files/logo/ad_ico.jpg")
                    p 奥迪    
        .title-div 车型
        .carInfo-div    
            .sort-brand
                .group-div A3
                .group-div Q5
        .title-div 年份
        .carInfo-div
            .sort-brand
                .group-div 2018
        .title-div 
        .ensure
            <el-button type="primary">查询</el-button>
</template>
<script>
    export default {
        name: 'SelectCarModels',
        data () {
            return {
                
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="stylus">
.selectCarModels
    font-size 28px
    .title-div
        height 100px
        background #f7f7f7
        border-bottom 1px solid #d3d6db
        display flex
        align-items center
        padding 0 20px
        font-size 40px
    .carInfo-div
        padding 40px 40px 20px
        border-bottom 1px solid #d3d6db
        background #fff
        .sort-letter
            display flex
            flex-wrap wrap 
            border-bottom 1px solid #d3d6db
            padding-bottom 20px
            margin-bottom 40px
            span
                margin 0 20px 20px 0;
                padding 20px 40px
                font-size 30px
            span.active
                border-radius 10px
                background #138be7
                color #fff
        .sort-brand
            display flex
            align-items: center
            flex-wrap wrap 
            .group-div
                display flex
                justify-content center
                align-items center
                flex-direction column
                margin 0 20px 20px 0
                width 224px
                height 120px
                border 1px solid #d3d6db
                border-radius 10px
                img 
                    width auto
                    height 55px
    .ensure
        padding 20px 30px
        border-bottom 1px solid #d3d6db
        .el-button
            width 100%
            font-size 28px
            border-radius 5px 
            padding 30px 
</style>
