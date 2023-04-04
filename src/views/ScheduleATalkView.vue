<template>
  <div class="home">
    <div class="content">
      <div class="header-container">
        <h1 class="header">Ready to collaborate on existing<br/>or build a new solution?</h1>
      </div>
      <div class="text-container">
        <p class="text">
          <p class="text"><span class="grey-span">Nothing to it but to do it!</span><br/>
        Schedule a 1:1 <span class="green-span">Google Meet w @Darjan</span><br/>
        and discuss your project's needs...</p>
        </p>
      </div>
      
      <div id="explore-btn">
        <DButton class="d-btn" text="Let's Talk !" @click.prevent.native="handleHireClick()"/>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import DButton from '@/components/common/DButton.vue';
import SplitType from 'split-type'

export default {
  name: 'ScheduleATalkView',  
  components: {
    DButton,
  },
  mounted() {
    //gsap.fromTo('.header',{filter: } {opacity: 1, delay: 1, duration: 0.7, y: 0})
    gsap.to('.text', {opacity: 1, delay: 3.2, duration: 0.5, y: 0})
    gsap.to('.d-btn', {opacity: 1, delay: 3.7, duration: 0.6, y: 0})

    const myText = new SplitType('.header')
    gsap.fromTo('.char',{filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
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

.green-span
  color: rgba(0, 228, 192, 0.6)
  font-weight: 600
.grey-span
  font-weight: 600

.header-container
  overflow: hidden
.header
  -webkit-background-clip: text
  font-size: 75px
  & > .char
#explore-btn
  margin-top: 20px
  overflow: hidden
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
