import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/components/MainScreen'
import PokemonCardGame from '@/components/PokemonCardGame'
import JiroAnalysis from '@/components/JiroAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    },
    {
      path: '/pcg',
      name: 'PokemonCardGame',
      component: PokemonCardGame
    },
    {
      path: '/jiro',
      name: 'JiroAnalysis',
      component: JiroAnalysis
    }
  ]
})
