<!-- 
* name: 启动页
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
  div
    img.Bg(src="static/img/startpage_bg.png")
</template>

<script>
  export default {
    name: 'StartPage',
    data () {
      return {

      }
    },
    mounted(){
      setTimeout(()=>{
        this.$router.push({
          path:'/Login'
        })
      },3000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  div
    img.Bg
      position fixed
      top 0
      left 0
      z-index 6
      width 100%
      height 100%
      opacity 1
      transition opacity .3s ease
      box-sizing border-box
</style>
