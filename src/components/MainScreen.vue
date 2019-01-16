<template>
  <div>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>名称</th>
        <th>枚数</th>
        <th>ポケモン</th>
        <th>グッズ</th>
        <th>サポート</th>
        <th>スタジアム</th>
        <th>エネルギー</th>
        <th>削除</th>
      </tr>
      <template v-for="(card, index) in deck">
        <tr :key="index">
          <td>
            <input
              type="text"
              v-model="card.name">
          </td>
          <td>
            <input
              type="number"
              v-model.number="card.quantity"
              min="0"
              max="4">
          </td>
          <td>
            <input type="radio" value="pokemon" v-model="card.type">
          </td>
          <td>
            <input type="radio" value="goods" v-model="card.type">
          </td>
          <td>
            <input type="radio" value="support" v-model="card.type">
          </td>
          <td>
            <input type="radio" value="stadium" v-model="card.type">
          </td>
          <td>
            <input type="radio" value="energy" v-model="card.type">
          </td>
          <td>
            <button
              @click="deleteCard(index)">
              Delete
            </button>
          </td>
        </tr>
      </template>
    </table>
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
