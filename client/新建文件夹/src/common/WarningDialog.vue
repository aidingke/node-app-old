
<!-- 
* name: 警告提示弹框
* author: cgc
* time: 2018-8-9
-->
<template lang="pug">
    .warning-dialog
        el-dialog(:visible="dialogTableVisible" center :show-close="false" top="35vh")
            .content
                img(src="static/img/waring.png")
                .text {{warningText}}
                el-button(plain,@click="closeWarning()") 知道了
</template>
<script>
    export default {
        name:'WarningDialog',
        props:[
            'warningText',
            'dialogTableVisible'
        ],
        data() {
            return {
                
            }
        },
        methods:{
            closeWarning(){
                this.$emit('closeWarning')
            }
        },
    }
</script>
<style lang="stylus">
.warning-dialog
    .content
        text-align center
        img
            width 100px
            height 100px
        .text
            color #000
            font-size 30px
            font-weight bold
            margin 20px 0
        .el-button
            padding 30px 60px
</style>

