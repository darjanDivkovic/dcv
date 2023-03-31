<template>
  <div class="skills">
    <h1>Web developer with</br>plethora of Tech Skills</h1>
    <div class="wrapper">
    <div class="box">
      <div class="img-box">
        <img src="@/assets/skills/cucumber.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
        <img src="@/assets/skills/tailwind.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/sass.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
        <img src="@/assets/skills/css.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
        <img src="@/assets/skills/js.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/vue.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/jquery.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/jira.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/docker.svg" alt="">
      </div>
    </div>
    <div class="box">
      <div class="img-box">
      <img src="@/assets/skills/psql.svg" alt="">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { horizontalLoop } from '@/helpers/scroll-helper.js'

export default {
  name: 'SkillsView',  
  data() {
    return {
      boxes: null,
      loop: null,
    }
  },
  methods: {
    setBoxes() {
      const boxes = gsap.utils.toArray('.box') 
      this.boxes = boxes
    },
    setLoop(boxes) {
      const loop = horizontalLoop(boxes, {
        paused: false,
        repeat: -1,
        reversed: true,
      })
      this.loop = loop
    },
  },
  watch: {
    boxes(boxes) {
      console.log('setting up loop with boxes', boxes)
      this.setLoop(boxes)
      console.log('set loop', this.loop)
    },
  },
  async mounted() {
  console.log('mounted')
    this.setBoxes()
    console.log('boxes', this.boxes)
    console.log('after mount: ', this.boxes, this.loop)
    this.loop = horizontalLoop(this.boxes, {
        paused: false,
        repeat: -1,
      })
  }
}
</script>

<style lang="sass" scoped>
.skills
  margin-top: 7%
  position: relative
  height: calc( 100vh - 380px )
h1
  text-align: left
  width: 70%
  background: -webkit-linear-gradient(30deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  font-size: 75px
  line-height: 100px
.wrapper
  height: 120px 
  width: 120%
  margin-left: -30px
  background: none
  position: absolute
  display: flex
  align-items: center
  overflow: hidden

.wrapper2
  height: 120px 
  width: 120%
  border: 1PX SOLID RED
  margin-left: -30px
  background: none
  bottom: 0px
  position: absolute
  display: flex
  align-items: center
  overflow: hidden
.box, .box_lower
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  width: 12%
  margin: 0
  padding: 0
  position: relative
  flex-shrink: 0
  color: black
  font-size: 21px
  cursor: pointer
  margin: 0 15px
  & > img

.img-box, .img-box-lo
  border: 1px solid #201E1E
  position: relative
  border-radius: 5px
  height: 100px
  width: 100px
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(25, 24, 24, 0.3)
  & > img
    position: absolute
    transform: scale(1)
    opacity: 0.9
</style>
