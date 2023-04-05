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
      
      <div id="explore-btn">
        <DButton text="Explore further" class="d-btn" @click.native.prevent="handleHireClick()"/>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import DButton from '@/components/common/DButton.vue';
import SplitType from 'split-type'

export default {
  name: 'HomeView',  
  components: {
    DButton,
  },
  mounted() {
    //gsap.fromTo('.header',{filter: } {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 0.999, delay: 2.3, duration: 0.5, y: 0})
    gsap.to('.d-btn', {opacity: 0.999, delay: 2.8, duration: 0.6, y: 0})

    const myText = new SplitType('.header')
    gsap.fromTo('.char',{ opacity: 0}, {  opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
    //gsap.to('.word', {y: '-5%', stagger: 0.1, duration: 0.4, delay: 2.3, repeat: -1,ease: 'none', yoyo: true})
    //gsap.to('.word', {y: '5%', stagger: 0.1, duration: 0.4, delay: 4.2, repeat: -1,ease: 'none', yoyo: true})
  },
  methods: {
    handleHireClick() {
      const URL = 'https://calendly.com/darjan-developer/30min'
      window.open(URL, '_blank')
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
      font-weight: 500
    & > .grey-span
      font-weight: 500

.d-btn
  padding: 5px 10px
.header
  text-align: center

.header-container
  overflow: hidden
.header
  -webkit-background-clip: text
  font-size: 8vh
  height: 100%
  & > .char
    opacity: 1
    
#explore-btn
  & > button
    opacity: 0
    transform: translateY(100%)

@media (max-width: 1100px)
  .header
    font-size: 3svh
    width: 100% !important


</style>
