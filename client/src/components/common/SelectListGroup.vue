<template>
  <div class="form-group">
    <select
      class="form-control form-control-lg" 
       :class="{'is-invalid': error}"
      ref="select"
      :value="value"
      :name='name'
      @input="$emit('input', $event.target.value)"
    >
        <option
         v-for="option in options"
         :key='option.label'
        :value="option.value">
        {{option.value}}
        </option>
    </select>
    <div v-if="error" class="invalid-feedback">
       {{error}}
    </div>
    <small v-if="info" className="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "selectListGroup",
  props: {
    value: String,
    name: String,
    error: String,
    info: String,
    options: Array
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
