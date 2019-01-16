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
        <input type="radio"  value="pokemon" v-model="card.type">ポケモン
        <input type="radio"  value="goods" v-model="card.type">グッズ
        <input type="radio"  value="support" v-model="card.type">サポート
        <input type="radio" value="stadium" v-model="card.type">スタジアム
        <input type="radio" value="energy" v-model="card.type">エネルギー
        <button
          @click="deleteCard(index)">
          Delete
        </button>
      </div>
    </template>
    <button
      @click="addCard()">
      Add
    </button>
    <div>
      {{'合計：' + totalQuantity + '枚'}}
    </div>
    <div>
      {{'ポケモン：' + totalPokemon + '枚'}}
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
    },
    totalPokemon () {
      var sum = 0

      this.deck.forEach(function (elm) {
        sum += elm.quantity
      })

      return sum
    },
    totalGoods () {

    },
    totalSupport () {

    },
    totalStadium () {

    },
    totalEnergy () {

    }
  },
  methods: {
    addCard () {
      this.deck.push({
        name: '',
        quantity: 0
      })
    },
    deleteCard (index) {
      this.deck.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
