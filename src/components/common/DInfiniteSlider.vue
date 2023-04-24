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
      this.setLoop(boxes)
    },
  },
  mounted() {
    this.setBoxes()
    this.loop = horizontalLoop(this.boxes, {
        paused: false,
        repeat: -1,
      })
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  position: absolute
  height: 120px 
  left: -20px
  min-width: calc(100vw - 2px)
  background: none
  position: absolute
  display: flex
  align-items: center
  overflow: hidden

.box
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

.img-box
  position: relative
  border-radius: 5px
  height: 100px
  width: 100px
  display: flex
  align-items: center
  justify-content: center
  & > img
    position: absolute
    transform: scale(1)
    opacity: 1
    

@media (max-width: 520px)

  .wrapper
    width: calc(120vw)
    margin-top: -40px
    left: -80px

  .box
    max-height: 80% !important
    width: calc(13%) 
  .img-box
    height: 50px !important
    width: 50px
    & > img
      transform: scale(0.5)
</style>
