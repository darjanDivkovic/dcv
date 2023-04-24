<template>
  <div class="home">
    <div class="content">
      <div class="header-container">
        <h1 class="header">It’s time to implement</br> that web solution!</h1>
      </div>
      <div class="text-container">
        <p class="text">Web developer providing <span class="purple-span">design-to-deployment services</span>,</br>
         building <span class="grey-span">SaaS apps</span> & <span class="grey-span">other web products</span>,</br>
         specializing in delivering pixel-perfect Front End!</p>
      </div>
      <div class="chevron-container">
        <p class="info">Scroll to reveal more pages</p>
        <DChevron/>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import DButton from '@/components/common/DButton.vue';
import DChevron from '@/components/common/DChevron.vue';
import SplitType from 'split-type'

export default {
  name: 'HomeView',  
  components: {
    DButton,
    DChevron,
  },
  mounted() {
    //gsap.fromTo('.header',{filter: } {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 0.999, delay: 2.3, duration: 0.5, y: 0})
    gsap.to('.d-btn', {opacity: 0.999, delay: 2.8, duration: 0.6, y: 0})
    gsap.to('.chevron-container', {opacity: 0.999, delay: 2.8, duration: 0.6, y: 0})
    const myText = new SplitType('.header')
    gsap.fromTo('.char',{ opacity: 0}, {  opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
    //gsap.to('.word', {y: '-5%', stagger: 0.1, duration: 0.4, delay: 2.3, repeat: -1,ease: 'none', yoyo: true})
    //gsap.to('.word', {y: '5%', stagger: 0.1, duration: 0.4, delay: 4.2, repeat: -1,ease: 'none', yoyo: true})
  },
  methods: {
    handleHireClick() {
      this.$router.push({ path: `/skills` })
    },
  }
}
</script>

<style lang="sass" scoped>
.home
  height: 100%
  display: flex
  justify-content: center
  align-items: center 
.content
  margin-top: -7vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center 
  font-weight: 500

.text-container
  overflow: hidden

  & > p
    text-align: center
    font-size: 1.8vh
    opacity: 0
    transform: translateY(120%)
    color: rgba(255, 255, 255, 0.3)
    & > .purple-span
      color: #6639ED
      font-weight: 700
    & > .grey-span
      font-weight: 500
.d-btn
  padding: 5px 10px
  margin-top: 20px
.header
  text-align: center
  text-transform: uppercase
.chevron-container
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  opacity: 0
  margin-top: 20px
.header-container
  overflow: hidden
.header
  -webkit-background-clip: text
  font-size: 8vh
  height: 100%
  & > .char
    opacity: 1
    
.explore-btn
  & > button
    opacity: 0
    transform: translateY(100%)

.info
  font-size: 10px
  color: rgba(255,255,255,0.2)

@media (max-width: 1100px)
  .header
    font-size: 3svh
    width: 100% !important
  .info
    font-size: 14px

.chevron 
  position: absolute
  top: 10px
  width: 5px * 3.5
  height: 5px * 0.8
  opacity: 0
  background: #6639ED
  transform: scale(0.3)
  animation: move-chevron 3s ease-out infinite
.chevron:first-child 
  animation: move-chevron 3s ease-out 1s infinite

.chevron:nth-child(2)
  animation: move-chevron 3s ease-out 2s infinite

.chevron:before, .chevron:after
 content: ''
 position: absolute
 top: 0
 height: 100%
 width: 50%
.chevron:before
 left: 0
 transform: skewY(30deg)

.chevron:after
 right: 0
 width: 50%
 transform: skewY(-30deg)

@keyframes move-chevron
 25%
  opacity: 1
 33.3%
  opacity: 1
  transform: translateY(5px * 3.8)
 66.6%
  opacity: 1
  transform: translateY(5px * 5.2)
 100%
  opacity: 0
  transform: translateY(5px * 8) scale(0.5)

@media (max-width: 1100px)
  .chevron-container
    transform: scale(0.8) !important
</style>
