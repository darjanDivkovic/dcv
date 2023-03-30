<template>
    <div class="experience">
      <h1>Darjan’s Career Highlights <br/>& Work History</h1>
      <div class="count-container">
        <div class="count-box">
          <div class="count-box-top">
            <p class="count">400</p>
            <p class="plus">+</p>
          </div>
          <p class="text">MERGED PRS</p>
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
            <p class="count">9000</p>
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
export default {
  name: 'ExperienceView',  
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
  font-size: 45px
  line-height: 60px

.count-container
  max-height: 30vh
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 0 40px
.count-box
  display: flex
  flex-direction: column
  color: rgba(254, 254, 254, 0.4)
  font-weight: 100
  align-items: center
.count-box-top
  display: flex
  flex-direction: row
.count
  font-size: 60px
  line-height: 0px
.plus
  padding-top: 15px
  line-height: 0
.text
  margin-top: -15px
  line-height: 0

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
    height: 45px
    padding: 0
    margin: 0 25px
    
</style>
