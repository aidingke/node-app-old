<template>
  <div>
    <script :id=id type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String,
        default:''
      },
      config: {
        type: Object
      },
      id: {
        type: String
      }
    },
    mounted() {
      const _this = this;
      _this.editor = UE.getEditor(_this.id, _this.config); // 初始化UE
      _this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getContent() { // 获取内容方法
        return this.editor.getContent();
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
