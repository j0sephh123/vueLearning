import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [
      {id: 112312, name: 'Lina', attribute: 'int'},
      {id: 2235235, name: 'CM', attribute: 'int'},
      {id: 2343, name: 'Lion', attribute: 'int'},
      {id: 42653, name: 'Meepo', attribute: 'agi'},
      {id: 65433, name: 'Sven', attribute: 'str'},
    ],
    heroName: '',
    heroAttribute: 'int'
  },
  mutations: {
    addHero (state, {heroName, heroAttribute}) {
      heroName = heroName.trim();
      let heroIndex = state.heroes.findIndex(hero => {
        return hero.name === heroName
      }); 
      
      if (heroIndex !== -1) return console.log('Hero exists');;

      if (heroName.length < 2 || heroName.length > 15) return console.log('invalid length');
      let lastId;
      if (state.heroes.length > 0){
        lastId = state.heroes[state.heroes.length - 1].id;
      } else {
        lastId = 1;
      }

      state.heroes.push({
        id: lastId + 1, 
        name: heroName, 
        attribute: heroAttribute});
    }, 
    removeHero (state, heroId) {
      let heroToRemove = state.heroes.findIndex(el => {
        return el.id === heroId;
      });
      state.heroes.splice(heroToRemove, 1);
    },
    updateHeroName (state, heroName) {
      state.heroName = heroName;
    },
    updateHeroAttribute (state, heroAttribute) {
      state.heroAttribute = heroAttribute;
    },
  },
  actions: {
    addHero (context, payload) {
      context.commit('addHero', payload)
    },
    removeHero (context, heroId) {
      context.commit('removeHero', heroId);
    }
  },
  getters: {
    displayAllHeroes: state => {
      return state.heroes;
    }
  }
})
