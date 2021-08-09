<template>
  <!-- <div v-for="(e, i) in products" :key="i"> -->
    <div class="box">
      <img :src="product.image" class="room-img"/>
      <h4 @click="$emit('openModal', product.id)" class="title">{{ product.title }}</h4>
      <!-- @click-"$emit("작명", 데이터)" 부모에게 데이터 보내는것  -->
      <p>월세 {{ product.price }}만 원</p>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
    name: "Card",
    props:{
        product: Object,

    }
}
</script>

<style>
.title {
  font-size: 25px;
  cursor:pointer;
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