<template>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<div class="container mt-4">
  <ContextList :data="e" v-for="(e, i) in blog" :key="i"/>
</div>



</template>

<script>
import ContextList from "./components/List.vue"
import blogData from "./assets/blog"

export default {
  name: 'App',
  components: {ContextList},
  data(){
    return{
      blog : blogData,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
