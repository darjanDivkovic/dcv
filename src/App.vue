<template>
  <div id="app">
    
    <section id="header-section">
      <DLogo :color="currentLogoColor"/>
    </section>
    
    <section id="body-section">
      <router-view/>
    </section>
    
    <section id="footer-section">
      <div>
        <img src="@/assets/small_links/linked_in_link.png" alt="" class="link linkedin" @click="goToLinkedIn">
        <img src="@/assets/small_links/github_link.png" alt="" class="link github" @click="goToGitHub">
      </div>
      <nav id="navbar">
        <router-link v-for="(page, index) in PAGES" 
                     :key="page"
                     :to=createLink(page)
                     class="router-link"
                     :class="{'active': isActive(PAGE_NAMES[index])}"
                     @click="handlePageClick(page)">{{ PAGE_NAMES[index] }}</router-link>
                     
        
        
        
      </nav>
    </section>    
  </div>
</template>

<script>
import DLogo from '@/components/common/DLogo.vue'

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
    hex: '#FFB754',
    decimal: 16758612
  },
  {
    name: 'recommendations',
    hex: '#F37959',
    decimal: 15956313
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
      page_position: 0,
      pause: false,
      touchStartY: null,
      touchEndY: null,
      PAGES,
      PAGE_NAMES,
    }
  },
  components: {
    DLogo,
  }, 
  computed: {
    currentLogoColor() {
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
    console.log('ay')
    console.log('ayy', window.location.pathname.slice(0,1), COLORS.findIndex(page => page.name === window.location.pathname))
    this.page_position = COLORS.findIndex(page => page.name === window.location.pathname.slice(0,1))
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
  padding: 50px
  

#navbar
  position: absolute
  left: 50%
  transform: translateX(-50%)
  width: max-content
#header-section
#body-section
  height: calc(100vh - 100px - 50px - 30px)
  overflow: hidden
#footer-section
  position: relative
  display: flex
  flex-direction: row
  align-items: center

.link
  transition: 0.3 all
  &.linkedin
    background-color: rgba(0,0,0,0)
  &.github
    height: 31px 
    margin-left: 15px
    background-position: center
    background-size: contain
    background-color: rgba(0,0,0,0)
    border-radius: 35px

  &:hover
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5)
    cursor: pointer
    filter: brightness(200%) 

.router-link
  all: unset
  transition: all 0.3s
  padding: 0 10px
  color: #6C6464
  font-weight: 500
  text-transform: uppercase
  font-size: 16px
  cursor: pointer
  text-align: center
  &.active
    font-size: 20px
    color: rgba(255, 255, 255, 0.9)
    text-decoration: underline
</style>
