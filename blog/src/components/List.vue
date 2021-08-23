<template>
  <div v-for="(e, i) in blog" :key="i" class="box">
      <router-link class="linkTitle" :to="'/detail/' + e.number">{{e.title}}</router-link>
      <!-- 요기 :랑 "'' + variable" 가 중요-->
      <p>{{e.content}}</p>
  </div>
</template>

<script>
export default {
    props:{
        blog: Array,
    }
}
</script>

<style>
.box{
    margin: 10px;
    border: 1px solid dimgrey;
    border-radius: 10px;
    padding: 20px;
}
.linkTitle{
  outline: 0;
  border: 0;
  text-decoration: none;
  color:#000;
  font-size: 20px;
  cursor: pointer;
}
</style>