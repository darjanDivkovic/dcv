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
          <p class="text">YEARS IN IT</p>
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
        <img class="bild comp-icon" src="@/assets/company_icons/bild.svg" alt="">
        <img src="@/assets/company_icons/pequity.svg" alt="" class="comp-icon">
        <img class="inos comp-icon" src="@/assets/company_icons/innoscripta.svg" alt="">

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
    gsap.fromTo('.char',{ opacity: 0}, { opacity: 1, delay: 0.5, duration: 0.3, stagger: 0.05})
    //gsap.fromTo('.count-container', {opacity: 0}, { opacity: 1, delay: 2.4, duration: 0.3})
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
    //gsap.fromTo('.company-container', { opacity: 0}, { opacity: 1, delay: 5.3, duration: 0.3})

  },
  beforeDestroy() {
    //gsap.fromTo('.experience', {opacity: 1}, {opacity: 0, duration: 0.3})
    
  }
}
</script>

<style lang="sass" scoped>
.experience
  margin-top: 5%
  padding: 0 30px
.header
  text-align: left
  margin-top: 7vh
  width: 100%
  padding: 0 33px
  font-size: 8vh

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
  min-height: 65px
  font-weight: 100
  height: max-content
  align-items: center
.count-box-top
  display: flex
  flex-direction: column
  line-height: 10px
.count
  font-size: 80px
  font-weight: 300
  color: #F37959
  line-height: 0px
.plus
  padding-top: 25px
  font-weight: 500
  line-height: 0
  display: none 
.text
  height: max-content
  font-size: 16px
  min-height: max-content
  font-weight: 200
  margin-top: 10px
  position: absolute
  bottom: -5px
  width: max-content
  padding-top: -2px
  border-bottom: 0

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

@media (max-width: 1250px)
  .experience
    display: flex
    height: calc(100vh - 330px)
    justify-content: space-between
    
    .count-container
      display: grid
      justify-content: space-between
      grid-gap: 10px
      grid-template-columns: repeat(auto-fill, minmax(150px, 19%))
      max-width: 100%
    .count
      min-width: 20%
      font-size: 50px
    flex-direction: column
  .header
    font-size: 5vh !important
  
@media (max-width: 1050px)
  .header
    font-size: 45px

  .company-container
    display: flex
    justify-content: space-between
    background: none
    border: none
    & > img
      transform: scale(1)
      height: 30%
      width: 30%
      margin: 0 10px

@media (max-width: 520px)
  .experience
    .count-container
      display: grid !important
      justify-content: center !important
      margin-top: 50px
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
      max-width: 100%
     
  .header
    font-size: 3vh !important
    text-align: center
    transform: translateX(-10%)
  .count
    font-size: 20px !important
    font-weight: 300
    min-width: 0 !important
    margin-top: -20px

  .company-container
    margin-top: 10px
    & > img
      height: 20%
  .count-box
    max-height: 70px
    &:last-of-type
     transform: translateX(calc(50% + 10px)) 
  .plus
    opacity: 0
  .text
    height: max-content
    font-size: 12px
    min-height: max-content
    height: 23px
    font-weight: 200
    position: absolute
    bottom: 8px
    width: max-content
    padding-top: -2px
    border-bottom: 0

  
</style>
