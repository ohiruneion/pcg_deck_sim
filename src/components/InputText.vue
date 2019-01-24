<template>
  <div class="field has-text-left">
    <label class="label">{{label}}</label>
    <div class="control">
      <input class="input" type="text" :placeholder="label" v-model="text" @change="inputText">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = this.value
  },
  methods: {
    inputText () {
      this.$emit('input', this.text)
    }
  }
}
</script>

<style scoped></style>
