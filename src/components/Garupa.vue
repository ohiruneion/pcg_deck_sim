<template>
  <div>

    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Title<!-- ガルパ履歴書メーカー -->
          </h1>
          <h2 class="subtitle">
            Subtitle<!-- Webで簡単にガルパの履歴書を作成できます。 -->
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="tile is-ancestor is-vertical">

        <div class="tile is-parent">

          <div class="tile is-child">
            <div style="width: 667px; height:501px; border: 1px solid gray; display: inline-block;">
              <vue-cropper
                ref='cropper'
                :guides="true"
                :view-mode="2"
                drag-mode="crop"
                :auto-crop-area="0.5"
                :min-container-width="250"
                :min-container-height="180"
                :background="true"
                :rotatable="true"
                :src="imgSrc"
                alt="Source Image"
                :img-style="{ 'width': '667px', 'height': '501px' }"
                :aspectRatio="667/501">
              </vue-cropper>
            </div>
            <div>
              <input type="file" name="image" accept="image/*"
                style="font-size: 1.2em; padding: 10px 0;"
                @change="setImage" />
            </div>
            <div>
              <button class="button is-primary" @click="cropImage" v-if="imgSrc != ''" style="margin-right: 40px;">Crop</button>
              <button class="button is-primary" @click="rotate" v-if="imgSrc != ''">Rotate</button>
            </div>
          </div>

          <div class="is-child">
            <canvas id="canvas"></canvas>
          </div>

        </div>

        <div class="tile is-parent is-vertical">

          <div class="tile is-child">
            <div class="control">
              <label class="radio">
                <input type="radio" name="frame" value="1" @change="selectFrame($event)">
                frame1
              </label>
              <label class="radio">
                <input type="radio" name="frame" value="2" @change="selectFrame($event)">
                frame2
              </label>
              <label class="radio">
                <input type="radio" name="frame" value="3" @change="selectFrame($event)">
                frame3
              </label>
            </div>
          </div>

          <div class="tile is-parent">

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

          </div>

          <div class="tile is-parent">

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="name..." v-model="info.name">
            </div>

          </div>

          <div class="tile is-child">
            <button class="button is-primary" @click="drawInfo()">Draw</button>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import Frame1 from '../assets/frame1.png'

export default {
  components: {
    VueCropper
  },
  data () {
    return {
      imgSrc: '',
      cropImg: '',
      canvas: null,
      ctx: null,
      info: {
        name: ''
      }
    }
  },
  mounted: function () {
    this.canvas = document.getElementById('canvas')
    this.canvas.width = 667
    this.canvas.height = 501
    this.ctx = this.canvas.getContext('2d')
  },
  methods: {
    setImage (e) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgSrc = event.target.result
          this.$refs.cropper.replace(event.target.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    cropImage () {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.drawCanvas()
    },
    rotate () {
      this.$refs.cropper.rotate(90)
    },
    drawCanvas () {
      var that = this
      var img = new Image()
      img.src = this.cropImg
      img.onload = function () {
        that.ctx.drawImage(img, 0, 0, 667, 501)
      }
    },
    drawFrame (type) {
      let that = this
      let img = new Image()

      switch (type) {
        case '1':
          img.src = Frame1
          break
        case '2':
          // img.src = Frame2
          break
        case '3':
          // img.src = Frame3
          break
        default:
          break
      }

      img.onload = function () {
        that.ctx.drawImage(img, 0, 0, 667, 501)
      }
    },
    selectFrame (e) {
      this.drawFrame(e.target.value)
    },
    drawInfo () {
      this.ctx.lineWidth = 2
      this.ctx.fillStyle = '#0ff'
      this.ctx.font = '20px cursive'
      this.ctx.fillText(this.info.name, 50, 65/* [, maxWidth] */)
    }
  }
}
</script>

<style scoped></style>
