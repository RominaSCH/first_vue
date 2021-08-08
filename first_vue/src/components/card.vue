<template>
  <div v-for="(e, i) in products" :key="i">
    <div class="box">
      <img :src="e.image" class="room-img"/>
      <h4 class="title">{{ e.title }}</h4>
      <p>월세 {{ e.price }}만 원</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props:{
        products: Array,

    }
}
</script>

<style>
.title {
  font-size: 25px;
}
.box{
  border:1px solid dimgray;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
}
.room-img{
  width: 50%;
  height: auto;
  margin: 10px;
}
</style>