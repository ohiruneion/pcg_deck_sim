<template>
  <div>
    <!-- header -->
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            ガルパ履歴書メーカー
          </h1>
          <h2 class="subtitle">
            誰でも簡単にガルパの履歴書を作成できます。
          </h2>
        </div>
      </div>
    </section>

    <!-- body -->
    <section class="section">
      <div class="tile is-ancestor is-vertical">

        <div class="tile is-parent">
          <div class="tile is-child">
            <input type="file" name="image" accept="image/*"
              style="font-size: 1.2em; padding: 10px 0;"
              @change="setImage" />
            <button class="button is-primary" @click="cropImage" v-if="imgSrc != ''" style="margin-right: 40px;">Crop</button>
            <button class="button is-primary" @click="rotate" v-if="imgSrc != ''">Rotate</button>
          </div>
        </div>

        <div class="tile is-parent">

          <!-- 画像切り抜き -->
          <div class="tile is-child is-6" style="height:501px;">
            <vue-cropper
              style="width: 100%; max-width: 667px; height:100%; max-height:501px; border: 1px solid gray;"
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
              :img-style="{ 'width': '100%', 'height': '100%' }"
              :aspectRatio="667/501">
            </vue-cropper>
          </div>

          <!-- キャンバス -->
          <div class="tile is-child is-6" style="height: 501px;">
            <canvas
              id="canvas">
            </canvas>
          </div>

        </div>

        <!-- 入力項目 -->
        <div class="tile is-parent is-vertical">

          <div class="tile is-parent">

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="プレイヤー名" v-model="info.name">
              <input class="input" type="text" placeholder="ランク" v-model="info.rank">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="sex" value="1" v-model="info.sex">
                  男性
                </label>
                <label class="radio">
                  <input type="radio" name="sex" value="2" v-model="info.sex">
                  女性
                </label>
                <label class="radio">
                  <input type="radio" name="sex" value="3" v-model="info.sex">
                  その他
                </label>
              </div>
              <input class="input" type="text" placeholder="バンドリ歴" v-model="info.period">
            </div>

            <div class="tile is-child is-2">
              <label class="checkbox">
                <input type="checkbox" v-model="info.band.po.fav">
                Poppin'Party
              </label>
              <label class="checkbox">
                <input type="checkbox" v-model="info.band.af.fav">
                Afterglow
              </label>
              <label class="checkbox">
                <input type="checkbox" v-model="info.band.pa.fav">
                Pastel*Parets
              </label>
              <label class="checkbox">
                <input type="checkbox" v-model="info.band.ro.fav">
                Roselia
              </label>
              <label class="checkbox">
                <input type="checkbox" v-model="info.band.he.fav">
                ハローハッピーワールド
              </label>
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="Rank Poppin'Party" v-model="info.band.po.rank">
              <input class="input" type="text" placeholder="Rank Afterglow" v-model="info.band.af.rank">
              <input class="input" type="text" placeholder="Rank Pastel*Palets" v-model="info.band.pa.rank">
              <input class="input" type="text" placeholder="Rank Roselia" v-model="info.band.ro.rank">
              <input class="input" type="text" placeholder="Rank ハローハッピーワールド" v-model="info.band.he.rank">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="推しキャラ" v-model="info.guess">
            </div>

            <div class="tile is-child is-2">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="style" value="1" v-model="info.style">
                  親指
                </label>
                <label class="radio">
                  <input type="radio" name="style" value="2" v-model="info.style">
                  人差指
                </label>
                <label class="radio">
                  <input type="radio" name="style" value="3" v-model="info.style">
                  その他
                </label>
              </div>
              <input class="input" type="text" placeholder="速度" v-model="info.speed">
              <input class="input" type="text" placeholder="フルコン数 HARD" v-model="info.combo.hard">
              <input class="input" type="text" placeholder="フルコン数 EXPERT" v-model="info.combo.expert">
              <input class="input" type="text" placeholder="フルコン数 SPECIAL" v-model="info.combo.special">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="好きな楽曲１" v-model="info.fav_song_1">
              <input class="input" type="text" placeholder="好きな楽曲２" v-model="info.fav_song_2">
              <input class="input" type="text" placeholder="好きな楽曲３" v-model="info.fav_song_3">
              <input class="input" type="text" placeholder="カバー曲" v-model="info.cover_song">
            </div>

          </div>

          <div class="tile is-parent">

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="得意譜面" v-model="info.specialty_song">
              <input class="input" type="text" placeholder="苦手譜面" v-model="info.weak_song">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="好きなイベスト１" v-model="info.fav_story_1">
              <input class="input" type="text" placeholder="好きなイベスト２" v-model="info.fav_story_2">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="好きなピコ回１" v-model="info.fav_pico_1">
              <input class="input" type="text" placeholder="好きなピコ回２" v-model="info.fav_pico_2">
            </div>

            <div class="tile is-child is-2">
              <input class="input" type="text" placeholder="コメント１" v-model="info.comment_1">
              <input class="input" type="text" placeholder="コメント２" v-model="info.comment_2">
            </div>

            <div class="tile is-child is-2">
            </div>

          </div>

          <!-- 設定 -->
          <div class="tile is-parent">

            <!-- 文字色変更 -->
            <div class="tile is-child is-4">
              <input class="input" type="text" placeholder="文字色（デフォルトは黒） カラーコードを入力する。 例）#ff0000" v-model="info.fontColor">
            </div>

          </div>

          <div class="tile is-parent">

            <!-- 入力項目を履歴書に描画するボタン -->
            <div class="tile is-child">
              <button class="button is-primary" @click="drawInfo()">Draw</button>
            </div>

            <!-- キャンバスを画像化してダウンロードするボタン -->
            <div class="tile is-child">
              <button class="button is-primary" @click="downloadResume()">Download</button>
            </div>

          </div>

        </div>

        <!-- キャンバスを画像化したもの（モバイル用） -->
        <div class="tile is-parent">
          <img :src="outputImg">
        </div>

      </div>
    </section>

    <!-- footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          © 2019 ガルパ履歴書メーカー<br>
          developed by <a href="https://twitter.com/ion_ohirune" target="_blank">@ion_ohirune</a>
        </p>
      </div>
    </footer>

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
      outputImg: '',
      fontColor: '',
      info: {
        name: '',
        rank: '',
        sex: '',
        period: '',
        band: {
          po: {
            fav: false,
            rank: ''
          },
          af: {
            fav: false,
            rank: ''
          },
          pa: {
            fav: false,
            rank: ''
          },
          ro: {
            fav: false,
            rank: ''
          },
          he: {
            fav: false,
            rank: ''
          }
        },
        guess: '',
        style: '',
        speed: '',
        combo: {
          hard: '',
          expert: '',
          special: ''
        },
        fav_song_1: '',
        fav_song_2: '',
        fav_song_3: '',
        cover_song: '',
        specialty_song: '',
        weak_song: '',
        fav_story_1: '',
        fav_story_2: '',
        fav_pico_1: '',
        fav_pico_2: '',
        comment_1: '',
        comment_2: ''
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
        .then(this.drawFrame())
    },
    rotate () {
      this.$refs.cropper.rotate(90)
    },
    drawCanvas () {
      return new Promise((resolve, reject) => {
        var that = this
        var img = new Image()
        img.src = this.cropImg
        img.onload = function () {
          that.ctx.drawImage(img, 0, 0, 667, 501)
        }
      })
    },
    drawFrame (type) {
      let that = this
      let img = new Image()

      img.src = Frame1

      img.onload = function () {
        that.ctx.drawImage(img, 0, 0, 667, 501)
      }
    },
    drawInfo () {
      this.ctx.lineWidth = 2
      this.ctx.fillStyle = this.info.fontColor // 文字色
      this.ctx.font = '20px Meiryo'

      this.ctx.fillText(this.info.name, 80, 42, 100)
      this.ctx.fillText(this.info.rank, 80, 80, 100)

      switch (this.info.sex) {
        case '1':
          this.ctx.fillText('〇', 82, 115)
          break
        case '2':
          this.ctx.fillText('〇', 109, 115)
          break
        case '3':
          this.ctx.fillText('〇', 140, 115)
          break
        default:
          break
      }

      this.ctx.fillText(this.info.period, 80, 151, 100)

      if (this.info.band.po.fav) {
        this.ctx.fillText('〇', 23, 215)
      }
      if (this.info.band.af.fav) {
        this.ctx.fillText('〇', 58, 215)
      }
      if (this.info.band.pa.fav) {
        this.ctx.fillText('〇', 94, 215)
      }
      if (this.info.band.ro.fav) {
        this.ctx.fillText('〇', 123, 215)
      }
      if (this.info.band.he.fav) {
        this.ctx.fillText('〇', 156, 215)
      }

      this.ctx.fillText(this.info.band.po.rank, 22, 235)
      this.ctx.fillText(this.info.band.af.rank, 58, 235)
      this.ctx.fillText(this.info.band.pa.rank, 93, 235)
      this.ctx.fillText(this.info.band.ro.rank, 122, 235)
      this.ctx.fillText(this.info.band.he.rank, 155, 235)

      this.ctx.fillText(this.info.guess, 30, 290, 130)

      switch (this.info.style) {
        case '1':
          this.ctx.fillText('〇', 83, 350)
          break
        case '2':
          this.ctx.fillText('〇', 115, 350)
          break
        case '3':
          this.ctx.fillText('〇', 150, 350)
          break
        default:
          break
      }

      this.ctx.fillText(this.info.speed, 80, 385)

      this.ctx.fillText(this.info.combo.hard, 20, 475)
      this.ctx.fillText(this.info.combo.expert, 80, 475)
      this.ctx.fillText(this.info.combo.special, 140, 475)

      this.ctx.fillText(this.info.fav_song_1, 490, 75, 150)
      this.ctx.fillText(this.info.fav_song_2, 490, 105, 150)
      this.ctx.fillText(this.info.fav_song_3, 490, 135, 150)

      this.ctx.fillText(this.info.cover_song, 490, 200, 150)

      this.ctx.fillText(this.info.specialty_song, 480, 290, 75)
      this.ctx.fillText(this.info.weak_song, 570, 290, 75)

      this.ctx.fillText(this.info.fav_story_1, 480, 350, 75)
      this.ctx.fillText(this.info.fav_story_2, 480, 380, 75)

      this.ctx.fillText(this.info.fav_pico_1, 570, 350, 75)
      this.ctx.fillText(this.info.fav_pico_2, 570, 380, 75)

      this.ctx.fillText(this.info.comment_1, 480, 440, 150)
      this.ctx.fillText(this.info.comment_2, 480, 470, 150)
    },
    downloadResume () {
      let link = document.createElement('a')
      link.href = this.canvas.toDataURL('image/png')
      link.download = 'garupa_resume.png'
      link.click()

      // モバイル用
      this.outputImg = this.canvas.toDataURL('newImg')
    }
  }
}
</script>

<style scoped></style>
