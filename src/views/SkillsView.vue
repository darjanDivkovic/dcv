<template>
  <div class="skills">
    <h1 class="header">Web developer with a plethora of Tech Skills</h1>
    <DInfiniteSlider :skills="SKILLS[0]" class="upper"></DInfiniteSlider>
    <DInfiniteSlider :skills="SKILLS[1]" class="lower"></DInfiniteSlider>
    </div>
</template>

<script>
import DInfiniteSlider from '@/components/common/DInfiniteSlider.vue'
import { gsap } from 'gsap';
import SplitType from 'split-type'


import CucumberIcon from '@/assets/skills/cucumber.svg'
import TailwindIcon from '@/assets/skills/tailwind.svg'
import SassIcon from '@/assets/skills/sass.svg'
import CssIcon from '@/assets/skills/css.svg'
import JsIcon from '@/assets/skills/js.svg'
import VueIcon from '@/assets/skills/vue.svg'
import JQueryIcon from '@/assets/skills/jquery.svg'
import JiraIcon from '@/assets/skills/jira.svg'
import DockerIcon from '@/assets/skills/docker.svg'
import PsqlIcon from '@/assets/skills/psql.svg'

import PugIcon from '@/assets/skills/pug.svg'
import PythonIcon from '@/assets/skills/python.svg'
import IconCss from '@/assets/skills/html.svg'
import DjangoIcon from '@/assets/skills/django.svg'
import ReactIcon from '@/assets/skills/react.svg'
import GitIcon from '@/assets/skills/git.svg'
import FigmaIcon from '@/assets/skills/figma.svg'
import Linux from '@/assets/skills/linux.svg'
import GitLab from '@/assets/skills/gitlab.svg'
import GitHubIcon from '@/assets/skills/github.svg'


const SKILLS_UPPER = [
{ name: 'Cucumber', src: CucumberIcon},
{ name: 'Tailwind', src: TailwindIcon},
{ name: 'Sass', src: SassIcon},
{ name: 'Css', src: CssIcon},
{ name: 'Js', src: JsIcon},
{ name: 'Vue', src: VueIcon},
{ name: 'JQuery', src: JQueryIcon},
{ name: 'Jira', src: JiraIcon},
{ name: 'Docker', src: DockerIcon},
{ name: 'Psql', src: PsqlIcon},
]

const SKILLS_LOWER = [
{ name: 'Pug', src: PugIcon},
{ name: 'Python', src: PythonIcon},
{ name: 'Ico', src: IconCss},
{ name: 'Django', src: DjangoIcon},
{ name: 'React', src: ReactIcon},
{ name: 'Git', src: GitIcon},
{ name: 'Figma', src: FigmaIcon},
{ name: 'Linux', src: Linux},
{ name: 'GitLab', src: GitLab},
{ name: 'GitHub', src: GitHubIcon},
]

export default {
  name: 'SkillsView',  
  components: {
    DInfiniteSlider
  },
  data() {
    return {
      SKILLS: [
        SKILLS_UPPER,
        SKILLS_LOWER
      ]
    }
  },
  mounted() {
    //gsap.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 1, delay: 1})
    const myText = new SplitType('.header')
    gsap.fromTo('.char',{ opacity: 0}, { opacity: 1, delay: 1, duration: 0.3, stagger: 0.05})
    gsap.fromTo('.upper', {filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 3.1, duration: 0.3})
    gsap.fromTo('.lower', {filter: 'blur(6px)', opacity: 0}, { filter: 'blur(0px)', opacity: 1, delay: 3.6, duration: 0.3})
  }
}
</script>

<style lang="sass" scoped>
.skills
  padding: 0 40px 20px 40px
  position: relative
  height: calc( 100vh - 340px )
h1
  text-align: left
  margin-bottom: 21px
  padding-bottom: 60px
  font-size: 7vh

.lower
  margin-top: 220px

@media (max-width: 1200px)
  .header
    width: 100% !important
    font-size: 3vh
  @media (max-width: 850px)
  .header
  .text
    font-size: 14px !important


@media (max-width: 520px)
  .skills
    margin-top: 50px
  .header
    width: 120%
    transform: translateX(-10%)

  .lower
    margin-top: 130px
    margin-left: 0px
</style>
