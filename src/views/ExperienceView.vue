<template>
    <div class="experience">
      <h1>Darjan’s Career Highlights <br/>& Work History</h1>
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
        <img src="@/assets/company_icons/bild.svg" alt="">
        <img src="@/assets/company_icons/pequity.svg" alt="">
        <img src="@/assets/company_icons/innoscripta.svg" alt="">

      </div>
    </div>
</template>
<script>
import { gsap } from 'gsap';

export default {
  name: 'ExperienceView',  
  mounted() {
    gsap.fromTo('.experience', {opacity: 0}, {opacity: 1, duration: 1, delay: 1})
    gsap.from('.animated', {
      textContent: 0,
      duration: 4,
      delay: 1,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 0,
        onUpdate: function() {
          this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
        },  
      }
    });
  },
  beforeDestroy() {
    gsap.fromTo('.experience', {opacity: 1}, {opacity: 0, duration: 0.3})
  }
}
</script>

<style lang="sass" scoped>
.experience
  margin-top: 5%
h1
  text-align: left
  width: 100%
  padding: 0 33px
  background: -webkit-linear-gradient(30deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
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
  min-width: 15%
  font-weight: 100
  align-items: center
.count-box-top
  display: flex
  flex-direction: row
.count
  font-size: 80px
  line-height: 0px
.plus
  padding-top: 15px
  line-height: 0
.text
  height: max-content
  font-size: 16px
  min-height: max-content
  height: 23px
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
    height: 65px
    padding: 0
    margin: 0 35px
    
</style>
