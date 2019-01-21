<template>
  <section class="section">
    <div class="container">
      <div>
        <input class="input" type="text" placeholder="名前" v-model="name">
        <button class="button" @click="writeName()">Write</button>
      </div>
      <div class="columns is-multiline">
        <div class="column is-3 has-text-left" v-for="store in storeList" :key="store.id">
          <label class="checkbox">
            <input type="checkbox" @click="drawStamp(store.x, store.y)">
            {{store.name}}
          </label>
        </div>
      </div>
      <canvas id="canvas" class="canvas"></canvas>
    </div>
  </section>
</template>

<script>
import store from '../assets/store.json'
import card from '../assets/card.png'
import stamp from '../assets/stamp.png'

export default {
  name: 'JiroAnalysis',
  data () {
    return {
      storeList: store.storeList,
      canvas: null,
      ctx: null,
      name: ''
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    let canvasWidth = 400
    let canvasHeight = 200
    this.canvas.width = canvasWidth
    this.canvas.height = canvasHeight
    this.ctx = this.canvas.getContext('2d')

    let that = this
    let img = new Image()
    img.src = card
    img.onload = function () {
      that.ctx.drawImage(img, 0, 0, canvasWidth, canvasWidth)
    }
  },
  methods: {
    drawStamp (x, y) {
      let that = this
      let img = new Image()
      img.src = stamp
      img.onload = function () {
        that.ctx.drawImage(img, x, y, 50, 50)
      }
    },
    writeName () {
      this.ctx.lineWidth = 2
      this.ctx.fillStyle = '#0ff'
      this.ctx.font = '20px cursive'
      this.ctx.fillText(this.name, 300, 180/* [, maxWidth] */)
    }
  }
}
</script>

<style scoped></style>
