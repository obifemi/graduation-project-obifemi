import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChallengesView from '../views/ChallengesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: ChallengesView
    },
    {
      path: '/challenges/:_id',
      name: 'challenge',
      component: () => import('../views/ChallengeView.vue')
    },
    {
      path: '/my-challenges',
      name: 'mychallenges',
      component: () => import('../views/MyChallengesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/LeaderBoardView.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
