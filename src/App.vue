<template>
  <div id="app">
    <DBackground :position="page_position" :color="currentLogoColor"/>
    <DParticles :color="currentLogoHex" :windowh="heightWindow"/>
    <div id="sections-container">
      <div id="header-section">
        <DLogo :color="currentLogoColor" />
        <div class="header-right">
          <div class="dropdown">
            <h1>Portfolio<span>⮟</span></h1>
            <div class="button-container">
              <a @click="handleDownloadPDF()">[PDF, OCR] Download CV</a>
              <a>[Figma] Download CV</a>
            </div>
          </div>
          <DButton text="Hire Me" :style="{'opacity': 1}" @click.native.prevent="handleHireClick()"/>
        </div>
      </div>

      <div id="body-section">
        <router-view />
      </div>

      <div id="footer-section">
        <!-- ICONS GITHUB LINKED IN -->
        <div>
          <img src="@/assets/small_links/linked_in_link.png" alt="" class="link linkedin" @click="goToLinkedIn">
          <img src="@/assets/small_links/github_link.png" alt="" class="link github" @click="goToGitHub">
        </div>
        <!-- PAGES NAVBAR -->
        <nav id="navbar">
          <router-link v-for="(page, index) in PAGES" :key="page" :to=createLink(page) class="router-link" :class="{isActive : isActive(PAGE_NAMES[index])}"
            :style="{ 'color': isActive(PAGE_NAMES[index]) ? currentLogoHex : '#6c64644d'}" @click.native.prevent="handlePageClick(page)">{{
              PAGE_NAMES[index] }}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import DLogo from '@/components/common/DLogo.vue';
import DBackground from './components/common/DBackground.vue';
import DParticles from '@/components/common/DParticles.vue';
import DButton from './components/common/DButton.vue';
import { gsap } from 'gsap'

const PAGES = ['', 'skills', 'experience', 'recommendations', 'schedule_a_talk'];
const PAGE_NAMES = ['home', 'skills', 'experience', 'recommendations', 'schedule a talk']
const COLORS = [
  {
    name: 'home',
    hex: '#6639ED',
    decimal: 6699501
  },
  {
    name: 'skills',
    hex: '#1B41CC',
    decimal: 1786316
  },
  {
    name: 'experience',
    hex: '#F37959',
    decimal: 15956313
  },
  {
    name: 'recommendations',
    hex: '#FFB754',
    decimal: 16758612
  },
  {
    name: 'schedule a talk',
    hex: '#00E4C0',
    decimal: 58560
  },
]
const PAUSE_TIME_MILIS = 2000;

export default {
  data() {
    return {
      direction: null,
      page_position: this.getPagePosition(),
      pause: false,
      touchStartY: null,
      touchEndY: null,
      PAGES,
      PAGE_NAMES,
      dropdownAnim: null,
      dropdownElem: null,
      heightWindow: window.innerHeight,
    }
  },
  components: {
    DLogo,
    DBackground,
    DParticles,
    DButton,
  },
  computed: {
    currentLogoColor() {
      return COLORS.find(color => color.name === this.$route.name).decimal
    },
    currentLogoHex() {
      return COLORS.find(color => color.name === this.$route.name).hex
    }
  },
  methods: {
    getPagePosition() {
      this.page_position = COLORS.findIndex(color => color === this.$route.name)
    },
    handleHireClick() {
      const URL = 'https://calendly.com/darjan-developer/30min'
      window.open(URL, '_blank')
    },
    goToLinkedIn() {
      const URL = 'https://www.linkedin.com/in/darjan-divkovi%C4%87-171386163/'
      window.open(URL, '_blank')
    },
    goToGitHub() {
      const URL = 'https://github.com/darjanDivkovic'
      window.open(URL, '_blank')
    },
    isActive(route) {
      return this.$route.name === route
    },
    createLink(pageName) {
      return `/${pageName}`
    },
    handlePageClick(page) {
      this.page_position = PAGES.indexOf(page)
    },
    // HANDLE SCROLL UP AND DOWN
    // ************************

    handleWheel(event) {
      if (!this.pause) {
        if (event.deltaY < 0) {
          // SCROLLING UP
          this.handleScrollUp();
        } else if (event.deltaY > 0) {
          // SCROLLING DOWN
          this.handleScrollDown();
        }
      }
    },
    handleDownloadPDF() {
      const URL = 'https://docs.google.com/document/d/1BmTHhmCxkDAURNTzJyT34VV_655E9wiQa080OEj0p94/edit?usp=sharing'
      window.open(URL, '_blank')
    },
    handleScrollUp() {
      if (this.page_position - 1 < 0) {
        this.page_position = PAGES.length - 1
      } else this.page_position = this.page_position - 1
      this.$router.push({ path: `/${PAGES[this.page_position]}` })
      this.pause = true
      this.unpause();
    },
    handleScrollDown() {

      if (this.page_position + 1 === PAGES.length) {
        this.page_position = 0
      } else this.page_position = this.page_position + 1
      this.$router.push({ path: `/${PAGES[this.page_position]}` })
      this.pause = true
      this.unpause();
    },
    unpause() {
      setTimeout(() => {
        this.pause = false
      }, PAUSE_TIME_MILIS);
    },
    // ************************
    // HANDLE SWIPE UP AND DOWN
    goToSecond() {
      this.$router.push({ path: `/${PAGES[1]}` })
    },
    checkDirection() {

      if (this.touchEndY < this.touchStartY) {
        const calc = this.touchStartY - this.touchEndY
        const screenHeightPart = this.heightWindow * 0.2
        if(calc > screenHeightPart) this.handleScrollDown()

      }
      if (this.touchEndY > this.touchStartY) {
        const calc = this.touchEndY - this.touchStartY
        const screenHeightPart = this.heightWindow * 0.2
        if(calc > screenHeightPart) this.handleScrollUp()
      }
    },
  },
  mounted() {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const index = COLORS.findIndex(page => page.name === this.$route.name)
    this.page_position = index >= 0 ? index : 0
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('touchstart', e => {
      this.touchStartY = e.changedTouches[0].screenY
    })

    window.addEventListener('touchend', e => {
      this.touchEndY = e.changedTouches[0].screenY
      this.checkDirection()
    })

    const dropdownElem = document.querySelector('.dropdown')
    this.dropdownElem = dropdownElem

    const dropdownAnim = gsap.to(".button-container", {
        paused: true,
        height: '70px',
        border: '1px solid #565151'
    });

    this.dropdownAnim = dropdownAnim

    this.dropdownElem.addEventListener('mouseenter', () => dropdownAnim.play())
    this.dropdownElem.addEventListener('mouseleave', () => dropdownAnim.reverse())

  },
  destroyed() {
    window.removeEventListener('wheel', this.handleWheel)
  }
}
</script>

<style lang="sass">
@font-face
  font-family: 'secondary'
  src: url(../public/MontserratAlternates.ttf) format("truetype")

@font-face
  font-family: 'primary'
  src: url(../public/Montserrat.ttf) format("truetype")

html
  height: calc(var(--vh, 0.9vh) * 100) !important
body 
  height: calc(var(--vh, 0.9vh) * 100) !important

#app 
  min-height: -webkit-fill-available !important
  font-family: 'primary'
  position: relative
  width: auto

#sections-container
  display:flex
  flex-direction: column
  height: calc(100vh - 40px)
  
#header-section
  display: flex
  margin-top: 40px
  justify-content: space-between
  padding: 0 20px
  align-items: center
  max-height: calc(7% - 40px)
#body-section
  flex-grow: 1
  height: calc(86%)
  padding: 20px
  overflow: hidden
#footer-section
  position: relative
  display: flex
  flex-direction: row
  align-items: center
  height: 5%
  padding: 0 30px
#navbar
  position: absolute
  left: 50%
  display: flex
  flex-direction: row
  transform: translateX(-50%)

.link
  transition: all 0.3s 
  background: rgba(0,0,0,0)
  &.linkedin
    background-color: rgba(0,0,0,0)
    height: 25px 

  &.github
    height: 25px 
    margin-left: 15px
    background-position: center
    background-size: contain
    background-color: rgba(0,0,0,0)
    border-radius: 35px

  &:hover
    box-shadow: 0px 0px 9px rgba(255, 255, 255, 0.5)
    
    cursor: pointer
    filter: brightness(600%) 


.router-link
  all: unset
  transition: all 0.3s
  padding: 0 0
  margin: 0 20px
  color: rgba(108,100,100, 0.3)
  width: max-content
  font-weight: 500
  text-transform: uppercase
  font-size: 16px
  cursor: pointer
  transform: scale(1)
  text-align: center
  position: relative
  &.isActive
    transform: scale(1.2)

.d-btn
  opacity: 1 

button
  cursor:  pointer !important

.header-right
  display: flex
  & > div
    display: flex
    position: relative
    & > h1 
      margin-right: 20px
      color: rgba(254, 254, 254, 0.5)
      font-size: 16px
      font-weight: 200
      display: flex
      flex-direction: row
      align-items: center
      & > span
        margin-left: 10px
        font-size: 12px
        
.button-container
  bottom: 0
  transform: translateY(100%)
  overflow: hidden
  height: 0px
  right: 20px
  display: flex
  flex-direction: column
  border: none
  width: max-content
  border-top-left-radius: 5px
  border-bottom-left-radius: 5px
  position: absolute
  & > a
    all: unset
    color: #fff
    font-size: 12px
    width: max-content
    width: max-content
    padding: 10px 15px
    &:hover
      cursor: pointer

@media (max-width: 965px)
  #sections-container

  #navbar
    flex-direction: column
    left: auto
    width: calc(max-content + 20px)
    height: calc(max-content + 20px)
    right: -70px
    bottom: 30px
    padding: 0

  .router-link
    margin-left: auto
    padding: 4px 0
    font-size: 16px
    text-align: right
    &.isActive
      transform: translateX(-10%) scale(1.2)

      &:after
        all: unset 

@media (max-width: 965px)
  .dropdown
    visibility: hidden
    display: none
    &.pulse
      min-width: max-content
      padding: 8px 10px
  #body-section
    height: calc(100% - 195px)
  #navbar
    right: -80px
@media (max-width: 520px)
  #navbar
    right: -85px
    bottom: 0px
  .router-link
    font-size: 13px
    &.active
      &:after
        all: unset 
  .github, .linkedin
    height: 18px !important
    margin-bottom: 30px

  #sections-container
    height: 0vh

  #header-section
    padding: 5px 20px 0 20px
  #footer-section
    padding: 0 30px 0 20px
  #body-section
    height: calc(85vh - 0px)
    @supports (-webkit-touch-callout: none)
      height: calc(75vh - 0px)
</style>
