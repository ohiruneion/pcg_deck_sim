<template>

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
