<template>
  <div class="form-group">
    <textarea
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      ref="textArea"
      :value="value"
      :placeholder="placeholder"
      :name='name'
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
    <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "textAreaGroup",
  props: {
    value: String,
    placeholder: String,
    name: String,
    error: String,
    info: String
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
</style>
