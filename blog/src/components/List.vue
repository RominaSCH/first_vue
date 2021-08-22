<template>
  <div v-for="(e, i) in blog" :key="i" class="box">
      <h4>{{e.title}}</h4>
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
</style>