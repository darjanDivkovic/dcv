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
import SplitType from 'split-type'

export default {
  name: 'HomeView',  
  components: {
    DButton,
  },
  mounted() {
    //gsap.fromTo('.header',{filter: } {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 0.999, delay: 2.3, duration: 0.5, y: 0})
    gsap.to('.d-button', {opacity: 0.999, delay: 2.8, duration: 0.6, y: 0})

    const myText = new SplitType('.header')
    gsap.fromTo('.char',{filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
    //gsap.to('.word', {y: '-5%', stagger: 0.1, duration: 0.4, delay: 2.3, repeat: -1,ease: 'none', yoyo: true})
    //gsap.to('.word', {y: '5%', stagger: 0.1, duration: 0.4, delay: 4.2, repeat: -1,ease: 'none', yoyo: true})
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

.header
  text-align: center
  & > div

.header-container
  overflow: hidden
.header
  -webkit-background-clip: text
  font-size: 75px
  & > .char
    
#explore-btn
  & > button
    opacity: 0
    transform: translateY(100%)

@media (max-width: 1200px)
  .header
    font-size: 55px
  .text
    font-size: 16px !important

  .d-btn
    margin-top: 20px

@media (max-width: 850px)
  .header
    font-size: 45px
  .text
    font-size: 14px !important

@media (max-width: 520px)
  .header
    font-size: 24px

  .text
    font-size: 10px !important
    line-height: 14px !important

  .d-btn
    margin-top: 12px
</style>
