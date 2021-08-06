<template>
  <div class="modal-overlay" v-if="modal_click == true">
    <div class="modal">
      <img :src="products[clicked_num].image" class="modal-img" />
      <h4>{{ products[clicked_num].title }}</h4>
      <p>{{ products[clicked_num].content }}</p>
      <p>월세 {{ products[clicked_num].price }}만 원</p>
      <button @click="modal_click = false">close</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"Modal",
    data(){
        return{
            // clicked_num: 0,
            modal_click: false,
        }
    }
};
</script>

<style>
.modal-overlay{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal{
  width: 500px;
  height: 430px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>