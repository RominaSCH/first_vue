<template>
  <div class="menu">
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> key 안쓰면 에러남 -->
    <a v-for="(e, i) in menus" :key="i">{{ e }}</a>
    <!--변수(in 왼쪽)는 2개까지 지정 가능, (각 array data, 1씩 증가하는 데이터)-->
  </div>

  <Discount v-if="showDiscount == true" :discountValue="discountValue"/>
  <!--컴포넌트 쓰는 법
  1. vue파일 import
  2. components:{}에 등록하고
  3. 사용 -->
  <!-- <Discount 데이터이름-"Hello" 혹은 데이터이름="[123,456]" 
  쉬운 데이터는 데이터 선언 빼고 직접 선언 가능 
  작명="문자자료"
  :작명="숫자자료"  : 들어간다! 
  v-bind="Object 자료형" 
  하지만 :Object-name="Object-name" 으로 자주 씀 -->

  <button class="btn" @click="sortBack">원래 정렬로 되돌리기</button>
  <button class="btn" @click="lowToHigh">낮은 가격순 정렬</button>
  <button class="btn" @click="highToLow">높은 가격순 정렬</button>
  <button class="btn" @click="alphabetSort">가나다순 정렬</button>

  <Card @openModal="modal_click = true; clicked_num = $event" :product="product" v-for="product in products" :key="product.id"/>
<!-- 자식이 보낸 데이터는 $event 변수에 담겨있다-->
  <!-- <div v-for="(e, i) in products" :key="i">
    <div class="box">
      <img :src="e.image" class="room-img"/>
      <h4 @click="modal_click = true; clicked_num = i" class="title">{{ e.title }}</h4>
      <p>월세 {{ e.price }}만 원</p>
    </div>
  </div> -->

<transition name="fade"><!-- :class="{ 클래스명 : 조건(조건이 참일때 클래스가 붙음) }" -->
  <Modal @modalClose="modal_click = false" :modal_click="modal_click" :products="products" :clicked_num="clicked_num"/>
</transition>
 <!-- : 는 대이터바인딩과 props 전송 2가지 기능이 있다 -->
  <!-- <div v-if="1 == 1">
    1 + 1 = 2
  </div>
  <div v-else-if="1 == 2">
    1 + 1 = 1
  </div>
  <div v-else>
    1 + 1 = 0
  </div> -->
    <!--모든 설정값들 보려면 Ctrl + space bar!!! WOW 이제알았네-->
    <!--Vue는 데이터 실시간 렌더링이 가능해서 코드가 굉장히 간결해진다.-->
  

  <!--데이터를 어떻게 만들어야 내가 편할까 생각해보기-->
</template>

<script>
// yarn 이 더 안전
// yarn run serve 하면 열림
import oneroom from "./assets/oneroom";
import Discount from './components/discount.vue';
import Modal from './components/modal.vue';
import Card from './components/card.vue';
//vue의 lifecycle
// create -> mount -> conponent create -> update -> unmount
// 중간에 hook을 걸 수 있다.

export default {
  name: "App",
  data() {
    //중요한 정보 보관하는곳 Object 자료로 저장!
    //{{ data binding }} 쓰는 이유 1. 노 하드코딩! 변경이 쉬워야한다.(대량의 자료에서)
    // 2. Vue의 실시간 자동 렌더링 쓰기 위해서 사용한다. (요게 중요) 데이터를 변경하면 실시간으로 HTML에 반영된다
    // 자주 변경되는 데이터들에 사용하고, 잘 변경되지 않는 데이터는 안쓰는게 낫다.
    return {
      rooms: [
        {
          title: "역삼동원룸",
          price: 12000,
          report: 0,
          img: require("./assets/images/room0.jpg"),
          modal: false
        }, 
        {
          title: "천호동원룸",
          price: 15000,
          report: 0,
          img: require("./assets/images/room1.jpg"),
          modal: false
        }, 
        {
          title: "마포구원룸",
          price: 22000,
          report: 0,
          img: require("./assets/images/room2.jpg"),
          modal: false
        }
      ],
      showDiscount : true,
      discountValue : 30,
      originProducts : [...oneroom], // a = b는 a가 b의 값을 공유하는 것이고
      // a = [...b] 는 a가 b의 독립적인 array 복사본 값을 복사하는 것이다.
      products: oneroom,
      clicked_num: 0,
      modal_click: false,
      styleRed: "color : tomato",
      menus: ["HOME", "PRODUCTS", "ABOUT"],
    };
  },
  methods : { //vue의 함수 만드는 곳
    // increase(i){
    //   this.rooms[i].report++; //this는 이 문서(이 파일?)를 뜻함
    // },
    // decrease(i){
    //   this.rooms[i].report--;
    // }
    sortBack(){ //sort는 원본 파괴식 함수, map filter는 원본 보존식 함수
      // this.product.sort((a,b) => {
      //   return a.id - b.id
      // }) // 오잉 왜 안되지
      this.products = [...this.originProducts]; // [...] 없으면 한번밖에 작동 안함
      //다른 방법도 있는데, 그 중 하나의 방법일 뿐!
    },
    lowToHigh(){
      this.products.sort((a, b) => { //this.products.price.sort 아님!
        return a.price - b.price //여기에서 .price 하는거임!
      })
    },
    highToLow(){
      this.products.sort((a,b) => {
        return b.price - a.price
      })
    },
    alphabetSort(){
      this.products.sort((a, b) => {
        if(a.title < b.title){
          return -1
        }else if(a.title > b.title){
          return 1
        }else{
          return 0
        }
      })
    }
  },

  //Hook 종류
  // beforeCreate() 
  // created()
  // beforeMount()
  // mounted()
  // beforeUpdate()
  // updated()
  // beforeUnmount()
  // unmounted()
  updated(){ //input값에 2 넣으면 alert 뜨게

  },
  mounted(){ //server 에서 data를 가져와 넣을 때에도 hook을 쓴다. created나 mounted
    // setTimeout(() => {  //this 쓰려면 function(){}말고 () => {} arrow function 사용하자
    //   this.showDiscount = false;
    // }, 2000)
    setInterval(() => {
      if(this.discountValue > 1){
        this.discountValue -= 1;
      }else{
        this.showDiscount = false;
      }
      
    }, 1000)

  },

  components: {Discount, Modal, Card},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
}
.title {
  font-size: 25px;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  cursor: pointer;
}
.room-img{
  width: 50%;
  height: auto;
  margin: 10px;
}
.modal-img{
  width:400px;
  height: auto;
  margin: 10px;
  border-radius: 5px;
}
.btn{
  outline:0;
  border:0;
  padding: 8px 12px;
  margin-right: 5px;
  border-radius: 10px;
  cursor: pointer;
}
.box{
  border:1px solid dimgray;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
}
.report-box{
  margin: 8px 0 30px;
}

.start{
  opacity:0;
  transition: all 1s;
}
.end{
  opacity: 1;
}

.fade-enter-from{ /* <transition>의 css */ 
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-active{
  transition: all .5s;
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0px);
}
</style>

