<template>
  <!-- {{$route.params.id}} -->
  <div class="conta
    $route.paramsiner mt-4">
      <h1>{{blog[$route.params.id].title}}</h1>
      <span>{{blog[$route.params.id].date}}</span>
      <p>{{blog[$route.params.id].content}}</p>
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

</style>