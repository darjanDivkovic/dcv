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
        <DButton text="Let's Talk !" class="d-btn" @click.prevent.native="handleHireClick()"/>
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
    gsap.to('.d-button', {opacity: 1, delay: 3.7, duration: 0.6, y: 0})

    const myText = new SplitType('.header')
    gsap.fromTo('.char',{ opacity: 0}, { opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
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
    font-size: 2vh
    opacity: 0
    transform: translateY(120%)
    color: rgba(255, 255, 255, 0.4)
    & > .purple-span
      color: #6639ED
      font-weight: 600
    & > .grey-span
      font-weight: 600

.d-btn
  padding: 5px 10px
  margin-top: 50px 

.header
  text-align: center
  font-size: 8vh
  text-transform: uppercase
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
  font-size: 8vh
  & > .char
#explore-btn
  margin-top: -20px
  overflow: hidden
  & > button
    transform: translateY(100%)

@media (max-width: 520px)
  .header
    font-size: 3vh !important 
  .text
    font-size: calc(2vh - 3px)
  .purple-span
    color: #6639ED
    font-weight: 200
  .grey-span
    font-weight: 200
</style>
