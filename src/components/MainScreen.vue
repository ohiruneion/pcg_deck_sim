<template>
  <div>
    <div>
      <router-link
        :to="{ name: 'PokemonCardGame' }">
        PCG
      </router-link>
    </div>
    <div>
      <router-link
        :to="{ name: 'JiroAnalysis' }">
        Jiro
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainScreen',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped></style>
