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
        <input type="radio" value="pokemon" v-model="card.type">ポケモン
        <input type="radio" value="goods" v-model="card.type">グッズ
        <input type="radio" value="support" v-model="card.type">サポート
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
      {{'ポケモン：' + totalTypeQuantity('pokemon') + '枚'}}
    </div>
    <div>
      {{'グッズ：' + totalTypeQuantity('goods') + '枚'}}
    </div>
    <div>
      {{'サポート：' + totalTypeQuantity('support') + '枚'}}
    </div>
    <div>
      {{'スタジアム：' + totalTypeQuantity('stadium') + '枚'}}
    </div>
    <div>
      {{'エネルギー：' + totalTypeQuantity('energy') + '枚'}}
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
    },
    deleteCard (index) {
      this.deck.splice(index, 1)
    },
    totalTypeQuantity (type) {
      var sum = 0

      this.deck.forEach(function (elm) {
        if (elm.type === type) {
          sum += elm.quantity
        }
      })

      return sum
    }
  }
}
</script>

<style scoped></style>
