<template>
  <div class="input-group mb-3">
      <div class="input-group-prepend">
         <span class="input-group-text">
            <i :class="icon"></i>
         </span>
       </div>
    <input
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      :type="type"
      ref="inputGroup"
      :value="value"
      :placeholder="placeholder"
      :name='name'
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
  </div>
</template>

<script>
export default {
  name: "textFieldGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    error: String,
    icon: String
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
