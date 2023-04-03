<template>
  <div class="home">
    <div class="content">
      <div class="header-container">
        <h1 class="header">Ready to collaborate & upgrade<br/> your solution?</h1>
      </div>
      <div class="text-container">
        <p class="text"><span class="grey-span">Nothing to it but to do it!</span><br/>
        Schedule a 1:1 <span class="green-span">Google Meet w @Darjan</span><br/>
        and discuss your project's needs...</p>
      </div>
      
      <div id="explore-btn">
        <DButton class="d-btn" text="Meet Me"/>
      </div>
      <div class="calendly-container">
        <p class="calendly">Powered by <span class="grey-span">Calendly</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import DButton from '@/components/common/DButton.vue';

export default {
  name: 'ScheduleATalkView',  
  components: {
    DButton,
  },
  mounted() {
    gsap.to('.header', {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 1, delay: 1.6, duration: 0.5, y: 0})
    gsap.to('.d-btn', {opacity: 1, delay: 2, duration: 0.3, y: 0})
    gsap.to('.calendly', {opacity: 0.5533, delay: 2.5, duration: 0.2, y: 0})
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
.green-span
  color: rgba(0, 228, 192, 0.6)
  font-weight: 600
.grey-span
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

.calendly
  opacity: 0
  font-size: 10px
  color: #6C6464
</style>
