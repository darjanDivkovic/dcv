<template>
  <div class="d-infinite-slide">
    <div class="wrapper">
        <div class="box" v-for="skill in skills" :key="skill.name">
            <div class="img-box">
                <img :src="skill.src" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { horizontalLoop } from '@/helpers/scroll-helper.js'

import _ from 'lodash'

export default {
  name: 'DInfiniteSlider',  
  props: ['skills', 'shouldRevert'],
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
      const loop = _.cloneDeep(horizontalLoop(boxes, {
        paused: false,
        repeat: -1,
        reversed: this.$props.shouldRevert,
      }))
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
  beforeMount() {
    console.log('this', this.skills)
  },
  mounted() {
  console.log('mounted', this.$props.shouldRevert)
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
.wrapper
  height: 120px 
  width: 120%
  margin-left: -65px
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
