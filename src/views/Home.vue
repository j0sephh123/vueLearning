<template>
  <div class="home">
    <add-hero></add-hero>
      
    <ul>
      <div v-for="hero in displayAllHeroes" :key="hero.id">
        <li 
        :class="heroColor(hero)"
        >{{ hero.name }}
          <button @click="removeHero(hero.id)">Remove</button>  
          <button @click="showEditDialogHandler">Modify</button>  
        </li>
        <modify-hero v-show="showEditDialog"></modify-hero>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import addHero from '../components/addHero.vue';
import modifyHero from '../components/modifyHero.vue';

export default {
  components: {
    addHero,
    modifyHero
  },
  data() {
    return {
      showEditDialog: false
    }
  },
  computed: {
    ...mapGetters([
      'displayAllHeroes'
    ]),
  },
  methods: {
    ...mapActions([
      'removeHero'
    ]),
    heroColor({attribute}) {
      switch(attribute){
        case 'int':
          return 'blue';
        case 'str':
          return 'red';
        case 'agi':
          return 'green';
        default: return;
      }
    },
    showEditDialogHandler() {
      this.showEditDialog = !this.showEditDialog
    }
  }
}
</script>
<style scoped>
li {
  list-style-type: none;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
li:hover{
  background-color: lightblue;
  cursor: pointer;
}

.red{ 
  color: red;
}
.blue{ 
  color: blue;
}
.green{ 
  color: green;
}
</style>
