<template>
  <div class="field has-text-left">
    <label class="label">{{label}}</label>
    <div class="control">
      <input class="input" type="color" v-model="color" @change="inputColor">
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
      color: ''
    }
  },
  mounted () {
    this.color = this.value
  },
  methods: {
    inputColor () {
      this.$emit('input', this.color)
    }
  }
}
</script>

<style scoped></style>
