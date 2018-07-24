<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <button @click="getCurrentRoute">Test</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentRoute () {
      const {name} = this.$route;
      console.log(name)
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Avenir', serif;
}
.active {
  border: 1px solid black;
}
.active:hover {
  font-size: 110%;
}
</style>
