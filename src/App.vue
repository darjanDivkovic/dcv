<template>
  <div id="app">
    <DBackground :position="page_position"/>
    <div id="sections-container">
        <div id="header-section">
          <DLogo :color="currentLogoColor"/>
          <DButton text="Hire Me"/>
        </div>
    
        <div id="body-section">
          <router-view/>
        </div>
        
        <div id="footer-section">
          <!-- ICONS GITHUB LINKED IN -->
          <div>
            <img src="@/assets/small_links/linked_in_link.png" alt="" class="link linkedin" @click="goToLinkedIn">
            <img src="@/assets/small_links/github_link.png" alt="" class="link github" @click="goToGitHub">
          </div>
          <!-- PAGES NAVBAR -->
          <nav id="navbar">
            <router-link v-for="(page, index) in PAGES"
                     :key="page"
                     :to=createLink(page)
                     class="router-link"
                     :class="{'active': isActive(PAGE_NAMES[index])}"
                     @click.native.prevent="handlePageClick(page)">{{ PAGE_NAMES[index] }}</router-link>
          </nav>
        </div>      
    </div>
  </div>
</template>

<script>
import DLogo from '@/components/common/DLogo.vue';
import DBackground from './components/common/DBackground.vue';
import DButton from './components/common/DButton.vue';

const PAGES = ['', 'skills', 'experience', 'recommendations', 'schedule_a_talk'];
const PAGE_NAMES = ['home', 'skills', 'experience', 'recommendations', 'schedule a talk']
const COLORS = [ 
  {
    name: 'home',
    hex: '#301E67',
    decimal: 3153511
  },
  {
    name: 'skills',
    hex: '#0E236F',
    decimal: 926575
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
const PAUSE_TIME_MILIS = 1000;

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
    }
  },
  components: {
    DLogo,
    DBackground,
    DButton,
  }, 
  computed: {
    currentLogoColor() {
      console.log('route nameee', COLORS.find(color => color.name === this.$route.name).decimal)
      return COLORS.find(color => color.name === this.$route.name).decimal
    }
    /*
    currentLogoColor() {
      console.log('this.', this.page_position)
      return COLORS[this.page_position].decimal
    }
    */
  },
  methods: {
    getPagePosition() {
      console.log('a', COLORS.findIndex(color => color.name === this.$route.name), typeof this.$route.name)
      this.page_position = COLORS.findIndex(color => color === this.$route.name)
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
      console.log('hit', page)
      this.page_position = PAGES.indexOf(page)
    },
  // HANDLE SCROLL UP AND DOWN
  // ************************

    handleWheel(event) {
      console.log('wheelin')
      if(!this.pause) {
        if (event.deltaY < 0) {
        // SCROLLING UP
        this.handleScrollUp();
        } else if (event.deltaY > 0) {
        // SCROLLING DOWN
        this.handleScrollDown();
        }
      }
    },
    handleScrollUp() {
      if(this.page_position - 1 < 0) {
        this.page_position = PAGES.length - 1
      } else this.page_position = this.page_position -1
      this.$router.push({ path: `/${PAGES[this.page_position]}` })
      this.pause = true
      this.unpause();
    },
    handleScrollDown() {
      
      if(this.page_position + 1 === PAGES.length) {
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
    
    checkDirection() {
    if (this.touchEndY < this.touchStartY) {
      console.log('swipe up')
      this.handleScrollDown();
    }
    if (this.touchEndY > this.touchStartY) {
      console.log('down')
      this.handleScrollUp();
    }
    },
  },
  mounted() {
    const index = COLORS.findIndex(page => page.name === this.$route.name)
    this.page_position =  index >= 0 ? index : 0
    console.log
    window.addEventListener('wheel', this.handleWheel)
    window.addEventListener('touchstart', e => {
      this.touchStartY = e.changedTouches[0].screenY
    })

    window.addEventListener('touchend', e => {
      this.touchEndY = e.changedTouches[0].screenY
      this.checkDirection()
    })
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

#app 
  font-family: 'primary'
  position: relative
  width: auto
  max-height: 100%
  min-height: 100%

#sections-container
  display:flex
  flex-direction: column
  height: 100vh

  
#header-section
  padding: 20px 30px 0 30px
  display: flex
  justify-content: space-between
  align-items: center
#body-section
  flex-grow: 1
  height: calc(100% - 140px)
  padding: 20px 20px 0 30px
  overflow: hidden
#footer-section
  position: relative
  display: flex
  padding: 20px 0 30px 30px
  flex-direction: row
  align-items: center


#navbar
  position: absolute
  left: 50%
  display: flex
  flex-direction: row
  transform: translateX(-50%)

.link
  transition: all 0.3s 
  &.linkedin
    background-color: rgba(0,0,0,0)
    height: 15px 

  &.github
    height: 15px 
    margin-left: 10px
    background-position: center
    background-size: contain
    background-color: rgba(0,0,0,0)
    border-radius: 35px

  &:hover
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5)
    cursor: pointer
    filter: brightness(160%) 

.router-link
  all: unset
  transition: all 0.3s
  padding: 0 15px
  color: #6C6464
  width: max-content
  font-weight: 500
  text-transform: uppercase
  font-size: 10px
  cursor: pointer
  transform: scale(1)
  text-align: center
  &.active
    transform: scale(1.3)
    color: rgba(255, 255, 255, 0.9)

@media (max-width: 965px)
  #navbar
    flex-direction: column
    left: auto
    width: calc(max-content + 20px)
    height: calc(max-content + 20px)
    right: -45px
    bottom: 30px
    padding: 0
  .router-link
    margin-left: auto
    padding: 4px 0
    font-size: 12px
    text-align: right
    &.active
      transform: translateX(-2%)
</style>
