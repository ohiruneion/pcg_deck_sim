<template>
  <div>
    <template v-for="(card, index) in deck">
      <div :key="index">
        <input
          type="text"
          v-model="card.name">
        <input
          type="number"
          v-model.number="card.quantity"
          min="0"
          max="4">
      </div>
    </template>
    <button
      @click="addCard()">
      Add
    </button>
    <div>
      {{'total:' + totalQuantity}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainScreen',
  data () {
    return {
      deck: [
        {
          name: '',
          quantity: 0
        }
      ]
    }
  },
  computed: {
    totalQuantity () {
      var sum = 0

      this.deck.forEach(function (elm) {
        sum += elm.quantity
      })

      return sum
    }
  },
  methods: {
    addCard () {
      this.deck.push({
        name: '',
        quantity: 0
      })
    }
  }
}
</script>

<style scoped></style>
