<template>
    <div>
        <h4 class="mb-2">教育经历</h4>
        <table class="table">
            <thead>
                <tr>
                  <th>学校</th>
                  <th>学历</th>
                  <th>年份</th>
                  <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="exp in education" :key="exp._id">
                    <td>{{exp.school}}</td>
                    <td>{{exp.degree}}</td>
                    <td>
                    {{exp.from}} ~ {{exp.to ? exp.to : '至今'}}
                    </td>
                    <td>
                    <button class="btn btn-danger" @click="deleteClick(exp._id)">
                        删除
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    education: Array
  },
  methods: {
    deleteClick(id) {
      this.$emit("deleteEducation", id);
    }
  }
};
</script>
