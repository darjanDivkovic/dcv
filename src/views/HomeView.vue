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
        <DButton class="d-btn" text="Explore further"/>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import DButton from '@/components/common/DButton.vue';

export default {
  name: 'HomeView',  
  components: {
    DButton,
  },
  mounted() {
    gsap.to('.header', {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 1, delay: 1.6, duration: 0.5, y: 0})
    gsap.to('.d-btn', {opacity: 1, delay: 2, duration: 0.3, y: 0})
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

.text-container
  overflow: hidden

  & > p
    text-align: center
    font-size: 20px
    opacity: 0
    transform: translateY(120%)
    line-height: 30px
    color: rgba(255, 255, 255, 0.3)
    & > .purple-span
      color: #6639ED
      font-weight: 600
    & > .grey-span
      font-weight: 600

.header-container
  overflow: hidden
.header
  text-align: center
  opacity: 0
  background: -webkit-linear-gradient(30deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  font-size: 75px
  transform: translateY(-120%)
  line-height: 100px
  
#explore-btn
  margin-top: 20px
  overflow: hidden
  & > button
    opacity: 0
    transform: translateY(100%)
</style>
