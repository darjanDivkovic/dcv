<template>
  <div class="home">
    <div class="content">
      <h1>It’s time to implement</br> that web solution!</h1>
      <p>Web developer providing <span class="purple-span">design-to-deployment services</span>,</br>
         building <span class="grey-span">SaaS apps</span> & <span class="grey-span">other web products</span>,</br>
         specializing in delivering pixel-perfect Front End!</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HomeView',  
}
</script>

<style lang="sass" scoped>
.home
  height: 100%
  display: flex
  justify-content: center
  align-items: center 
.content
  display:flex
  & > h1
    text-align: center
    color: rgba(255, 255, 255, 0.8)
  & > p
    text-align: center
    font-size: 10px
    color: rgba(255, 255, 255, 0.4)
    & > .purple-span
      color: #6639ED
      font-weight: 600
    & > .grey-span
      font-weight: 600
</style>
