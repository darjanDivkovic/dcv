<template>
  <div class="schedule-a-talk">
    <div class="content">
      <h1>Ready to collaborate & upgrade<br/> your solution?</h1>
      <p>
        <span class="grey-span">Nothing to it but to do it!</span><br/>
        Schedule a 1:1 <span class="grey-span">Google Meet</span> w <span class="grey-span">@Darjan</span></br>
         and discuss your project's needs...</p>
      <div id="explore-btn">
        <DButton text="Meet Me"/>
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
  }
}
</script>

<style lang="sass" scoped>
.schedule-a-talk
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
