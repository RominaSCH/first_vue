<template>
  <div class="menu">
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> key 안쓰면 에러남 -->
    <a v-for="(e, i) in menus" :key="i">{{ e }}</a>
    <!--변수(in 왼쪽)는 2개까지 지정 가능, (각 array data, 1씩 증가하는 데이터)-->
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="(e, i) in products" :key="i">
    <h4 class="title">{{ e[0] }}</h4>
    <p>전세금 {{ e[1] }} 만원</p>
    <button @click="increase(i)">허위 매물 신고</button>
    <button @click="decrease(i)">신고 취소</button>
    <span>신고 수 : {{report[i]}}</span>

  </div>
  <!-- <div>
    <h4 class="title">기흥구 아파트</h4>
    <p>전세금 22000 만원</p>
    <button @click="increase">허위 매물 신고</button><span>신고 수 : {{report}}</span>
    <button @click="decrease">신고 취소</button>
  </div> -->
    <!-- variable++  ===  variable += 1; -->
    <!--모든 설정값들 보려면 Ctrl + space bar!!! WOW 이제알았네-->
    <!--Vue는 데이터 실시간 렌더링이 가능해서 코드가 굉장히 간결해진다.-->
  
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
      report: [0,0,0],
      styleRed: "color : tomato",
      products: [["역삼동원룸", 12000], ["천호동원룸",9000], ["마포구원룸",22000]],
      // prices: [12000, 9000, 22000],
      menus: ["HOME", "PRODUCTS", "ABOUT"],
    };
  },
  methods : { //vue의 함수 만드는 곳
    increase(i){
      this.report[i]++; //this는 이 문서(이 파일?)를 뜻함
    },
    decrease(i){
      this.report[i]--;
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
}
</style>

