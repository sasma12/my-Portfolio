import Vue from 'vue';
import Router from 'vue-router';
import Animation from '../components/Animation.vue';
import Illustration from '../components/Illustration.vue';
import Storyboard from '../components/Storyboard.vue';
import CharacterDesign from '../components/CharacterDesign.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Ensure that history mode is enabled
  routes: [
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/illustration',
      name: 'Illustration',
      component: Illustration
    },
    {
      path: '/storyboard',
      name: 'Storyboard',
      component: Storyboard
    },
    {
      path: '/character-design',
      name: 'CharacterDesign',
      component: CharacterDesign
    },
    {
        path: '/selam',
        name: 'Selam',
        component: Selam
      }
    {
      path: '*', // Catch-all route for 404 pages
      name: 'NotFound',
      component: () => import('../components/NotFound.vue') // Create a NotFound component to handle 404 errors
    }
  ]
});
