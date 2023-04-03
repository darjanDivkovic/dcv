<template>
    <div class="experience">
      <h1 class="header">Darjan’s Career Highlights <br/>& Work History</h1>
      <div class="count-container">
        <div class="count-box">
          <div class="count-box-top">
            <p class="count animated">400</p>
            <p class="plus">+</p>
          </div>
          <p class="text">MERGED PR'S  </p>
        </div>
        <div class="count-box">
          <div class="count-box-top">
            <p class="count">5</p>
          </div>
          <p class="text">YEARS CODING</p>
        </div>
        <div class="count-box">
          <div class="count-box-top">
            <p class="count">3</p>
            <p class="plus">+</p>
          </div>
          <p class="text">YEARS IN THE INDUSTRY</p>
        </div>
        <div class="count-box">
          <div class="count-box-top">
            <p class="count">5</p>
          </div>
          <p class="text">PROJECTS</p>
        </div>
        <div class="count-box">
          <div class="count-box-top">
            <p class="count animated">9000</p>
            <p class="plus">+</p>
          </div>
          <p class="text">CUSTOMERS SERVED</p>
        </div>
      </div>
      
      <div class="company-container">
        <img class="bild" src="@/assets/company_icons/bild.svg" alt="">
        <img src="@/assets/company_icons/pequity.svg" alt="">
        <img class="inos" src="@/assets/company_icons/innoscripta.svg" alt="">

      </div>
    </div>
</template>
<script>
import { gsap } from 'gsap';
import SplitType from 'split-type'

export default {
  name: 'ExperienceView',  
  mounted() {
    const myText = new SplitType('.header')
    gsap.fromTo('.char',{filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
    gsap.fromTo('.count-container', {filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 2.4, duration: 0.3})
    gsap.from('.animated', {
      textContent: 0,
      duration: 2,
      delay: 2.8,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 0,
        onUpdate: function() {
          this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
        },  
      }
    });
    gsap.fromTo('.company-container', {filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 3.3, duration: 0.3})

  },
  beforeDestroy() {
    //gsap.fromTo('.experience', {opacity: 1}, {opacity: 0, duration: 0.3})
    
  }
}
</script>

<style lang="sass" scoped>
.experience
  margin-top: 5%
.header
  text-align: left
  width: 100%
  padding: 0 33px
  font-size: 75px
  line-height: 100px

.count-container
  max-height: 30vh
  display: flex
  flex-direction: row
  margin-top: 2%
  justify-content: space-between
  padding: 0 40px
.count-box
  display: flex
  flex-direction: column
  color: rgba(254, 254, 254, 0.4)
  position: relative
  min-width: 17%
  font-weight: 100
  align-items: center
.count-box-top
  display: flex
  flex-direction: row
.count
  font-size: 80px
  font-weight: 300
  line-height: 0px
.plus
  padding-top: 15px
  line-height: 0
.text
  height: max-content
  font-size: 16px
  min-height: max-content
  height: 23px
  font-weight: 200
  position: absolute
  bottom: 8px
  width: max-content
  padding-top: -2px
  border-bottom: 0
  line-height: 24px

.company-container
  margin-top: 7vh
  height: 18vh
  width: 120%
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  margin-left: -10%
  background-color: rgba(25, 24, 24, 0.4)
  border-top: 1px solid rgba(32, 30, 30, 0.6)
  border-bottom: 1px solid rgba(32, 30, 30, 0.6)
  & > img
    opacity: 0.4
    height: 60px
    padding: 0
    margin: 0 35px
    
.inos
  opacity: 0.7 !important

.bild
  opacity: 0.5 !important
</style>
