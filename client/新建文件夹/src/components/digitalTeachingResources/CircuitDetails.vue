<!-- 
* name: 综合查询（电路图详情）组件
* author: gxr
* time: 2018-8-1
-->
<template lang="pug">
    .circuitDetails
        Header(title="电路图详情")
        img(src="static/img/1-0084.jpg") 
</template>
<script>
    export default {
        name: 'CircuitDetails',
        data () {
            return {
                imageUrl: ''
            }
        },
        methods:{
            async getHelperIndexList(){ //获取数据
                const res = await this.$axios.getHelperIndex(params);
            },
        },
        mounted(){
            //this.getHelperIndexList();
        }
    }
</script>
<style lang="stylus">
.circuitDetails
    overflow hidden
    img 
        display block
        width 100%
</style>
