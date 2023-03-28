import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import RecommendationsView from '../views/RecommendationsView.vue'
import ScheduleATalkView from '../views/ScheduleATalkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/recommendations',
    name: 'recommendations',
    component: RecommendationsView
  },
  {
    path: '/schedule_a_talk',
    name: 'schedule a talk',
    component: ScheduleATalkView,
  }
]

const router = new VueRouter({
  routes
})

export default router
