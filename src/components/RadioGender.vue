<template>
  <div class="field">
    <label class="label">性別</label>
    <div class="control">
      <label class="radio">
        <input type="radio" name="sex" value="1" v-model="gender" @change="changeGender">
        男性
      </label>
      <label class="radio">
        <input type="radio" name="sex" value="2" v-model="gender" @change="changeGender">
        女性
      </label>
      <label class="radio">
        <input type="radio" name="sex" value="3" v-model="gender" @change="changeGender">
        その他
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data () {
    return {
      gender: ''
    }
  },
  mounted () {
    this.gender = this.value
  },
  methods: {
    changeGender (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped></style>
