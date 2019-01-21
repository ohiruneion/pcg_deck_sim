<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3 has-text-left" v-for="store in storeList" :key="store.id">
          <label class="checkbox">
            <input type="checkbox" @click="drawCircle(store.x, store.y)">
            {{store.name}}
          </label>
        </div>
      </div>
      <canvas id="canvas" width="200" height="200" class="canvas"></canvas>
    </div>
  </section>
</template>

<script>
import store from '../assets/store.json'
import card from '../assets/card.png'
import stamp from '../assets/mark_maru.png'

export default {
  name: 'JiroAnalysis',
  data () {
    return {
      storeList: store.storeList,
      canvas: null,
      ctx: null
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
    drawCircle (x, y) {
      let that = this
      let img = new Image()
      img.src = stamp
      img.onload = function () {
        that.ctx.drawImage(img, x, y, 50, 50)
      }
    }
  }
}
</script>

<style scoped></style>
