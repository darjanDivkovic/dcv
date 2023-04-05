<template>
    <div class="recommendations">
      <h1 class="header">Discover why industry professionals recommend me</h1>
      <div id="cards-container">
        <carousel-3d :width="slidePrefferedWidth" :height="slidePrefferedHeight" :display="slidesToShow" :minSwipeDistance="1">
          <slide v-for="(card, index) in PEOPLE" :key="card.name" :index="index">
            <div class="card">
              <div class="card-upper">
                <div class="inner">
                  <p class="name">{{ card.name }}</p>
                  <p class="position">{{ card.position }}</p>
                  <p class="relation">{{ card.relation }}</p>
                </div>
                <img :src="card.src" alt="" class="icon" />
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
  import HarshIcon from '@/assets/recoms/harsh.svg'

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
    comment: `Darjan is an engineer who thinks like a designer. He can turn any design into a flawless and stunning feature that delights your end users. He did an amazing job when we worked on our interactive offer letter redesign, where he built a fully responsive and dynamic page consisting of animated pie charts that broke down compensation packages, cover gradients generated from the company logo, and equity projections based on future valuations. It was a huge challenge to create both the builder and the public facing experience, but Darjan nailed it. He would be a great asset to any design-led company that wants to wow its customers. I would love to work with him again in the future.`,
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
    comment: `I am delighted to recommend Darjan for his exceptional Frontend development skills in Javascript, Vue.js, and his keen eye for pixel-perfect designs. During our time working together, Darjan demonstrated a remarkable ability to bring ideas to life through his expertise in Javascript and Vue.js. He was instrumental in delivering some of the complex frontend projects for our clients, and his work exceeded expectations. He has an great grasp of frontend frameworks and is always up to date with the latest trends and technologies. Furthermore, Darjan consistently delivered designs that were not only visually appealing but also functional and user-friendly. He demonstrated a remarkable attention to detail and was able to implement pixel-perfect designs with precision and efficiency.`,
  },
  { 
    name: 'Warren Lebovics',
    src: WarrenIcon,
    position: 'Get compensation right - at scale | Co-Founder at Pequity',
    relation: 'Warren managed Darjan directly',
    comment: `Darjan is a designer's dream frontend partner. Darjan brings so much creativity and pride to his work, resulting in extremely polished and thoughtful user experiences. Darjan doesn't shy away from wild concepts, motion, or the latest technologies. Darjan is talented and loves to learn - any team is lucky to have him.`,
  },
  { 
    name: 'Harsh Patel',
    src: HarshIcon,
    position: 'Product @ Pequity',
    relation: 'Harsh worked with Darjan on the same team',
    comment: `Darjan is a PM's engineer. I worked closely with him on a greenfield project. Right from backlog grooming to product launch he was a terrific partner, customer centric and delivered big time. I highly recommend him and would hire myself if the opportunity presents in the future.`,
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
        width: document.body.clientWidth,
        screenHeight: window.innerHeight,
      }
    },
    components: {
      Carousel3d,
      Slide,
    },
    methods: {
      onresize() {
        //your code here
        //this is just an example
        this.width = document.body.clientWidth;
      }
    },
    computed: {
      slidesToShow() {
        return this.width > 1150 ? 8 : 3
      },
      slidePrefferedWidth() {
        return this.width < 400 ? this.width - 80 : 600
      },
      slidePrefferedHeight() {
        return this.screenHeight * 0.5
      }
    },
    mounted() {
      const myText = new SplitType('.header')
      gsap.fromTo('.char',{ opacity: 0}, { opacity: 1, delay: 1, duration: 0.3, stagger: 0.05})
      gsap.fromTo('#cards-container', { opacity: 0}, { opacity: 1, delay: 3.5, duration: 0.5, })

      window.addEventListener("resize", this.onresize);

    },
  }
  </script>

  <style lang="sass" scoped>
  .inner
    margin-right: 10px
  .recommendations
    position: relative
    padding-top: 20px
    height: 100%
    
    & > h1
      text-align: center
      font-size: 8vh
      width: 100%
  
  #cards-container
    margin-bottom: 10px
    width: calc(100% + 60px)
    transform: translateX(-30px)
  .card
    background-color: #121212
    display: flex
    flex-direction: column
    overflow: hidden
    max-height: 45vh !important  
    border-radius: 50px
    min-height: max-content
    max-height: 30vh
    padding: 25px

  .current
    filter: brightness(100%) !important
  .card-upper
    display: flex
    flex-direction: row
  .carousel-3d-slide
    border: none
    background: none
    overflow: visible !important
    filter: brightness(60%)

  .icon
    height: 60px
    margin-left: auto
    margin-right: 0px
    width: max-content
    opacity: 0.6

  .name
    color: rgba(254, 254, 254, 0.8)
    text-transform: uppercase
    font-weight: 500
    letter-spacing: 3px
    margin-left: auto
    margin-top: 5px
    color: #FFB754
    
  .position
    color: rgba(254, 254, 254, 0.6)
    font-size: 14px
    margin-top: -10px

  .relation
    color: rgba(254, 254, 254, 0.2)
    font-size: 10px
    margin-top: -15px

  .card-lower
    padding-top: 20px
    text-align: center
    font-size: 15px
    color: rgba(254, 254, 254, 0.8)

@media (max-width: 1200px)
  .header
    font-size: 5vh !important

@media (max-width: 850px)

  .header
  .card-container
    transform: translateY(50px)
@media (max-width: 520px)
  .header
    font-size: 3vh !important

  .card
    max-height: 40vh !important  
    border-radius: 25px
  .icon
    height: 30px
    position: relative

  .name
    font-size: 12px
    margin-top: 0px

  .position
    font-size: 10px
  .relation
    font-size: 10px
    margin-top: -5px

  .card-lower
    margin-top: -10px
    font-size: 9px
  </style>
  