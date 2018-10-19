<!-- 
* name: 综合查询（电路图详情）组件
* author: gxr
* time: 2018-8-1
-->
<template lang="pug">
    .streamingList
        Header(title="流媒体查询")
        .hd-div
            img(src="static/img/dataCheck.png")
            span 资料查询
        .bd-div
            div.item(@click="onLinkDetails(1)")
                img(src="static/img/oilMessage.png")
                span 机油
            div.item(@click="onLinkDetails(1)")
                img(src="static/img/antifreeze.png")
                span 冷媒冷冻油
            div.item(@click="onLinkDetails(1)")
                img(src="static/img/waveBoxOilMessage.png")
                span 波箱油
            div.item(@click="onLinkDetails(2)")
                img(src="static/img/batteryMessage.png")
                span 电池型号
</template>
<script>
    export default {
        name: 'StreamingList',
        data () {
            return {
                imageUrl: ''
            }
        },
        methods:{
            onLinkDetails(type){
                this.$router.push({
                    path: './StreamingDetails?type='+type
                });
            }
        },
        mounted(){
            
        }
    }
</script>
<style lang="stylus">
.streamingList
    .hd-div
        display flex
        align-items center
        height 130px
        padding 0 50px
        border-bottom 1px solid #d3d6db
        img
            width 37px
        span 
            font-size 40px
            margin-left 30px
    .bd-div
        display flex
        align-items center
        flex-wrap wrap
        padding 50px 0
        border-bottom 1px solid #d3d6db
        .item
            position relative
            display flex
            align-items center
            flex-direction column
            width 25%
            padding 20px 0
            font-size 38px
            img 
                height 96px
            span 
                margin-top 20px
        .item:not(:last-of-type):after
                position absolute
                right 5px
                top 50%
                content ''
                display block
                height 50%
                width 1px
                background #e5e5e5
                transform translateY(-46%)
</style>
