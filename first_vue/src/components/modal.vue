<template>
  <div class="modal-overlay" v-if="modal_click == true">
    <div class="modal">
      <img :src="products[clicked_num].image" class="modal-img" />
      <h4>{{ products[clicked_num].title }}</h4>
      <p>{{ products[clicked_num].content }}</p>
      <p>월세 {{ products[clicked_num].price }}만 원</p>
      <button @click="$emit('modalClose')" class="closeBtn">close</button>
      <!-- props는 수정 금지임. -->

      <!-- 부모 데이터를 자식이 쓰고 싶을 때 쓰는 것이 props
      props 전송 3step 1.보내고 2.등록하고 3.사용
      props 자식 컴포넌트에서는 read-only
      modal.vue 에 데이터 만들어도 되지만 부모도 써야하는 데이터면
      부모 컴포넌트에 만들어둬라.-->
    </div>
  </div>
</template>

<script>
export default {
    name:"Modal",
    props: {
      products : Array, //받아온 데이터의 자료형 이름을 대문자로
      modal_click: Boolean,
      clicked_num: Number,
    },
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
.closeBtn{
  border:0;
  outline: 0;
  padding: 8px 14px;
  background-color: darkcyan;
  color: #fff;
  border-radius: 5px;
}
</style>