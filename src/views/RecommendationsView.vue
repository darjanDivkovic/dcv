<template>
    <div class="recommendations">
      <h1 class="header">Discover why industry professionals recommend me</h1>
      <div id="cards">
        <carousel-3d>
          <slide v-for="(card, index) in PEOPLE" :key="card.name" :index="index" class="card">
            <div class="card-upper">
            <img :src="card.src" alt="" class="icon">
            <div>
              <p class="name">{{ card.name }}</p>
              <p class="position">{{ card.position }}</p>
              <p class="relation">{{ card.relation }}</p>
            </div>
            <div class="card-lower">
            {{ card.comment }}
            </div>
          </div>
          </slide>
        </carousel-3d>
        <!--
        <div v-for="card in PEOPLE" :key="card.src" class="card">
          <div class="card-upper">
            <img :src="card.src" alt="">
            <div>
              <p class="name">{{ card.name }}</p>
              <p class="position">{{ card.position }}</p>
              <p class="relation">{{ card.relation }}</p>
            </div>
          </div>
          <div class="card-lower">
            {{ card.comment }}
          </div>
        </div>
      -->
      </div>
    </div>
  </template>
  
  <script>
  import GiannisIcon from '@/assets/recoms/giannis.svg'
  import IoIcon from '@/assets/recoms/io.svg'
  import JeffIcon from '@/assets/recoms/jeff.svg'
  import JKimIcon from '@/assets/recoms/jkim.svg'
  import JLeeIcon from '@/assets/recoms/jlee.svg'
  import MilosIcon from '@/assets/recoms/milos.svg'
  import PetarIcon from '@/assets/recoms/petar.svg'
  import WarrenIcon from '@/assets/recoms/warren.svg'

  import { gsap } from 'gsap'
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import SplitType from 'split-type'

  const PEOPLE = [
  { 
    name: 'Giannis Koutsaftakis',
    src: GiannisIcon,
    position: 'Senior Frontend Developer at Pequity',
    relation: "Giannis was senior to Darjan but didn't manage Darjan directly",
    comment: `I am pleased to write this recommendation for Darjan. I have had the privilege of working with Darjan for over a year, and I can confidently say that he is an exceptional front-end developer with excellent proficiency in Python too.
    Darjan has a keen eye for detail and he's great at developing intuitive, user-friendly frontends that are visually appealing and responsive. Darjan's expertise in these technologies has been instrumental in our team's success, and he has delivered high-quality projects that have exceeded our clients' expectations.`,
  },
  { 
    name: 'Io Ma',
    src: IoIcon,
    position: 'Fullstack Developer (APIs building, multi-tenancy architectures) @ Pequity',
    relation: `Io was senior to Darjan but didn't manage Darjan directly`,
    comment: `If anyone is searching for the absolute frontend rockstar, I have to recommend you Darjan! He is a frontend PR's machine, making frontends look pixel perfect in the most efficient manner!`,
  },
  { 
    name: 'Jeff Auston',
    src: JeffIcon,
    position: 'Engineering Leadership',
    relation: 'Jeff managed Darjan directly',
    comment: `Darjan worked with our team for more than 2 years. During his time with us he operated very effectively in a team focused on key features for our clients. He worked very hard to improve his skills and made significant contributions our our code base. In addition, Darjan what a pleasure to work with - he's a great communicator. I would hire Darjan again, and highly recommend him for any team looking for a strong engineer.`,
  },
  { 
    name: 'Joseph Kim',
    src: JKimIcon,
    position: 'Design @ Pequity | Prev @Instagram, @Linkedin',
    relation: 'Joseph worked with Darjan on the same team',
    comment: `Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users. He did an amazing job when we worked on our interactive offer letter redesign, where he built a fully responsive and dynamic page consisting of animated pie charts that broke down compensation packages, cover gradients generated from the company logo, and equity projections based on future valuations. It was a huge challenge to create both the builder and the public facing experience, but Darjan nailed it. He would be a great asset to any design-led company that wants to wow its customers. I would love to work with him again in the future. Here is a link to the feature Darjan built: https://demo.pequity.app/visual-offers/corey-siphon-3f2b5ffc.`,
  },
  { 
    name: 'Joseph Lee',
    src: JLeeIcon,
    position: 'Senior Full Stack Engineer at Pequity',
    relation: 'Joseph worked with Darjan on the same team',
    comment: 'I had the pleasure of working on the same team with Darjan for a year. He fearlessly took on difficult frontend assignments and skillfully translated detailed figma designs into functioning frontend code. Darjan was always eager to learn more and improve his skills. He challenged himself further by diving into Python to create a script for gathering and storing thousands of company logos. He would be a great addition to any engineering team!',
  },
  { 
    name: 'Milos Glendza',
    src: MilosIcon,
    position: 'Software Developer at ServalIT',
    relation: 'Milos worked with Darjan on the same team',
    comment: `Always looked forward to working with Darjan. He's an easy-going yet reliable guy who always works hard to outbest the yesterday's self. He was the go-to guy when things needed to be perfect on the UI side, but he had no fear when things needed to be done outside of his expertise as well.`,
  },
  { 
    name: 'Petar Cevriz',
    src: PetarIcon,
    position: 'Software Developer at Pequity',
    relation: 'Petar worked with Darjan on the same team',
    comment: `I am delighted to recommend Darjan for his exceptional Frontend development skills in Javascript, Vue.js, and his keen eye for pixel-perfect designs. During our time working together, Darjan demonstrated a remarkable ability to bring ideas to life through his expertise in Javascript and Vue.js. He was instrumental in delivering some of the complex frontend projects for our clients, and his work exceeded expectations. He has an great grasp of frontend frameworks and is always up to date with the latest trends and technologies. Furthermore, Darjan consistently delivered designs that were not only visually appealing but also functional and user-friendly. He demonstrated a remarkable attention to detail and was able to implement pixel-perfect designs with precision and efficiency. Overall, I wholeheartedly recommend Darjan for any Frontend position that requires expertise in Javascript, Vue.js and pixel-perfect design. His skills and work ethic make him a valuable asset to any team.`,
  },
  { 
    name: 'Warren Lebovics',
    src: WarrenIcon,
    position: 'Get compensation right - at scale | Co-Founder at Pequity',
    relation: 'Warren managed Darjan directly',
    comment: `Darjan is a designer's dream frontend partner. Darjan brings so much creativity and pride to his work, resulting in extremely polished and thoughtful user experiences. Darjan doesn't shy away from wild concepts, motion, or the latest technologies. Darjan is talented and loves to learn - any team is lucky to have him.`,
  },
  ]

  export default {
    name: 'RecommendationsView',
    data() {
      return {
        PEOPLE,
        slider: null,
        isDown: true,
        startX: null,
        scrollLeft: null,
      }
    },
    components: {
      Carousel3d,
      Slide,
    },
    mounted() {
      const myText = new SplitType('.header')
      gsap.fromTo('.char',{filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 1, duration: 0.3, stagger: 0.05})
      gsap.fromTo('#cards', { opacity: 0}, { opacity: 1, delay: 3.5, duration: 0.5, })

      const slider = document.getElementById('cards')
      this.slider = slider
      this.slider.addEventListener('mousedown', (e) => {
        console.log('e', e.target)
        this.isDown = true;
        this.slider.classList.add('active');
        this.startX = e.pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
      });
      this.slider.addEventListener('mouseleave', () => {
        this.isDown = false;
        this.slider.classList.remove('active');
      });
      this.slider.addEventListener('mouseup', () => {
        this.isDown = false;
        this.slider.classList.remove('active');
      });
      this.slider.addEventListener('mousemove', (e) => {
        if(!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 1.2; //scroll-fast
        this.slider.scrollLeft = this.scrollLeft - walk;
        //console.log(walk);
      });
    },
  }
  </script>

  <style lang="sass" scoped>
  .recommendations
    position: relative
    height: 100%
    
    & > h1
      text-align: center
      font-size: 75px
      line-height: 100px

  #cards
    position: absolute
    overflow-x: scroll
    overflow: visible
    bottom: 80px
    padding: 10px 0
    margin-left: 30px
    opacity: 0
    width: calc(100% - 32px)
    display: flex
    flex-direction: row
    &::-webkit-scrollbar
      display: none

  .carousel-3d-container
    padding: 0 !important
    height: 55vh !important
    -webkit-transform-style: preserve-3d !important
    margin-left: -80px
  
  .card
    border: 1px solid blue
    margin-top: 0px !important
    min-width: 500px
    margin-top: 95px !important
    opacity: 1 
    background-color: #121212
    display: flex
    flex-direction: row
    overflow: visible
    border-radius: 25px
    border: none
    min-height: 45vh
    padding: 20px 30px 0px 30px
    filter: drop-shadow(0px 5px 5px rgba(232, 206, 56, 0.1))
.icon
  height: 65px
  transform: translateY(-48%)
.card-upper
  pointer-events: none
  display: flex
  margin-top: -20px
  flex-direction: column
  line-height: 0px
  & > div
    text-align: center
.card-lower
  margin-top: 20px
  pointer-events: none
  font-size: 14px
  text-align: center
  margin-top: 5%
  overflow: hidden
  color:  rgba(255, 255, 255, 0.2)
  line-height: 25px
.name
  color: rgb(228, 230, 235)
  font-size: 24px
  line-height: 2px
.position
  font-size: 12px
  color: #fff
  margin-top: -12px
  line-height: 12px
  margin-bottom: 20px
  
.relation
  font-size: 12px
  margin-top: -4px
  color: #3F3B3B

.current
  opacity: 1 !important
  </style>
  