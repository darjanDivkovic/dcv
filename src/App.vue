<template>
  <div id="app">
    <div class="header">
      <DLogo :color="currentLogoColor"/>
    </div>
    <router-view/>
    <p>{{  page_position }}</p>
    <nav>
      <router-link to="/">HOME</router-link> |
      <router-link to="/skills">ABOUT</router-link>
      <router-link to="/experience">EXPERIENCE</router-link>
    </nav>
  </div>
</template>

<script>
import DLogo from '@/components/common/DLogo.vue'

const PAGES = ['', 'skills', 'experience'];
const COLORS = [ 
  {
    hex: '#301E67',
    decimal: 3153511
  },
  {
    hex: '#0E236F',
    decimal: 926575
  },
  {
    hex: '#FFB754',
    decimal: 16758612
  },
]
const PAUSE_TIME_MILIS = 1500;

export default {
  data() {
    return {
      direction: null,
      page_position: 0,
      pause: false,
      touchStartY: null,
      touchEndY: null,
    }
  },
  components: {
    DLogo,
  }, 
  computed: {
    currentLogoColor() {
      return COLORS[this.page_position].decimal
    }
  },
  methods: {
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
  height: 100%
  padding: 50px
  width: 100%

</style>
