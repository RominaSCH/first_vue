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

<router-link class="link" to="/">Home page  </router-link>
<router-link class="link" to="/head">head page  </router-link>
<router-link class="link" to="/list">List page</router-link>

<router-view :blog="blog" ></router-view>
<!-- props 전송은 router-view로 한다 -->


</template>

<script>
// import ContextList from "./components/List.vue"
import blogData from "./assets/blog"

export default {
  name: 'App',
  // components: {ContextList},
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
.link{
  display: flexbox;
  outline: 0;
  border: 0;
  background-color: silver;
  border-radius:10px;
  padding: 8px 14px;
  margin-right: 10px;
  text-decoration: none;
  color:#000;

}
</style>
