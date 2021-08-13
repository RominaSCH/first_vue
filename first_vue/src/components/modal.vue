<template>
  <div class="modal-overlay" v-if="modal_click == true">
    <div class="modal">
      <img :src="products[clicked_num].image" class="modal-img" />
      <h4>{{ products[clicked_num].title }}</h4>
      <p>{{ products[clicked_num].content }}</p>
      <!-- <input @change="month = $event.target.value"> 은 아래와 같다-->
      <input v-model.number="month">
      <!-- v-model.number 안하면 받는 input값이 str이기때문에 +연산을 하면 값이 더해지는게 아니라 뒤꽁무니에 따라붙는 문제가 생김. -->
      <!-- 문자를 입력하는 사람을 막을 순 없으니 다음 강의에서 막아보는걸 배워봄 -->
      <!-- <textarea v-model="month"></textarea> textarea, select 등등 다 v-model 가능하다. -->
      <!-- <select v-model="month">
        <option>3</option>
        <option>6</option>
        <option>12</option>
      </select> -->
      <p>{{month}}개월 월세 {{ products[clicked_num].price * month}}만 원</p>
      <button @click="$emit('modalClose'); month = 3;" class="closeBtn">close</button>
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
    data(){
      return{
        month: 3, //문자를 입력받으려면 초기값을 문자로 해야하고, 숫자를 받으려면 초기값을 숫자로!
        //초기값이 중요하다 이마리야

      }
    },
    watch: { // data를 감시하는 기능
      month(data){ // 감시할 데이터를 함수형식으로 작성한다
        if(data > 12){
          alert("please write under 12");
        } //HW : input에 문자열 들어오면 alert()띄우고 month 값을 1로 되돌리기
      }
    },
    props: {
      products : Array, //받아온 데이터의 자료형 이름을 대문자로
      modal_click: Boolean,
      clicked_num: Number,
    },
    // methods: {
    //   funcSome(){
    //     this.$emit('openModal', this.product.id) //함수로 바꿔 쓰고싶으면 메소드에 이렇게 쓰고
    //     this 잊지말고            this 여기도 있고
    //   }
    // }
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