<template>
  <div class="menu">
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> key 안쓰면 에러남 -->
    <a v-for="(e, i) in menus" :key="i">{{ e }}</a>
    <!--변수(in 왼쪽)는 2개까지 지정 가능, (각 array data, 1씩 증가하는 데이터)-->
  </div>

  <div v-for="(e, i) in rooms" :key="i">
    <div class="box">
      <img :src="e.img" class="room-img"/>
      <h4 @click="modal_click = true" class="title">{{ e.title }}</h4>
      <p>전세금 {{ e.price }} 만원</p>
    </div>
    <div class="report-box">
      <button class="btn" @click="increase(i)">허위 매물 신고</button>
      <button class="btn" @click="decrease(i)">신고 취소</button>
      <span>신고 수 : {{e.report}}</span>
    </div>
  </div>

  <div class="modal-overlay" v-if="modal_click == true"> <!-- if 조건식이 참일때만 이 div를 표시함-->
    <div class="modal">
      <h4>TITLE</h4>
      <p>CONTENT</p>
      <button @click="modal_click = false">close</button>
    </div>
  </div>

    <!--모든 설정값들 보려면 Ctrl + space bar!!! WOW 이제알았네-->
    <!--Vue는 데이터 실시간 렌더링이 가능해서 코드가 굉장히 간결해진다.-->
  

  <!--데이터를 어떻게 만들어야 내가 편할까 생각해보기-->
</template>

<script>
// yarn 이 더 안전
// yarn run serve 하면 열림

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
      modal_click: false,
      styleRed: "color : tomato",
      // report: [0,0,0],
      // products: [["역삼동원룸", 12000], ["천호동원룸",9000], ["마포구원룸",22000]],
      menus: ["HOME", "PRODUCTS", "ABOUT"],
    };
  },
  methods : { //vue의 함수 만드는 곳
    increase(i){
      this.rooms[i].report++; //this는 이 문서(이 파일?)를 뜻함
    },
    decrease(i){
      this.rooms[i].report--;
    }
  },
  components: {},
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
.btn{
  outline:0;
  border:0;
  padding: 8px 12px;
  margin-right: 5px;
  border-radius: 10px;
  color:#fff;
  background-color: coral;
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
  height: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>

