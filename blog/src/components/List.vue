<template>
  <div class="box">
      <h4>{{data.title}}</h4>
      <p>{{data.content}}</p>
  </div>
</template>

<script>
export default {
    props:{
        data:Object,
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