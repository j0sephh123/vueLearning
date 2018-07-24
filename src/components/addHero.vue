<template>
  <form>
    <input 
      type="text" 
      v-model="heroName"
    >
    <select v-model="heroAttribute">
      <option value="int">Intelligence</option>
      <option value="str">Strength</option>
      <option value="agi">Agility</option>
    </select>
    <button @click="addHero({heroName, heroAttribute})">Add</button>
    <p>Name: {{heroName}}</p>
    <p>Attribute: {{heroAttribute}}</p>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default { // message and addHero
  computed: {
    heroName: {
      get() {
        return this.$store.state.heroName
      },
      set (value) {
        this.$store.commit('updateHeroName', value);
      }
    },
    heroAttribute: {
      get() {
        return this.$store.state.heroAttribute
      },
      set (value) {
        this.$store.commit('updateHeroAttribute', value);
      }
    }
  },
  methods: {
    ...mapActions([
      'addHero',
    ])
  }
};
</script>
