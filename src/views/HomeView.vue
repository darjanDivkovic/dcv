<template>
  <div class="home">
    <div class="content">
      <h1>It’s time to implement</br> that web solution!</h1>
      <p>Web developer providing <span class="purple-span">design-to-deployment services</span>,</br>
         building <span class="grey-span">SaaS apps</span> & <span class="grey-span">other web products</span>,</br>
         specializing in delivering pixel-perfect Front End!</p>
      <div id="explore-btn">
        <DButton text="Explore further"/>
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
  & > h1
    text-align: center
    background: -webkit-linear-gradient(30deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    font-size: 75px
    line-height: 100px
  & > p
    text-align: center
    font-size: 20px
    line-height: 30px
    color: rgba(255, 255, 255, 0.3)
    & > .purple-span
      color: #6639ED
      font-weight: 600
    & > .grey-span
      font-weight: 600
#explore-btn
  margin-top: 20px
</style>
