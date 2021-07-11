<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h4 class="title" :style="styleRed">{{products[0]}}</h4> <!-- style 앞에 : 잊지 말기!! 
                      :속성="데이터이름"-->
    <p>전세금 {{ prices[0] }} 만원</p>
  </div>
  <div>
    <h4 class="title">{{products[1]}}</h4>
    <p>전세금 {{ prices[1]}} 만원</p>
  </div>
  <div>
    <h4 class="title">{{products[2]}}</h4>
    <p>전세금 {{ prices[2]}} 만원</p>
  </div>
  
</template>

<script>
// yarn 이 더 안전
// yarn run serve 하면 열림

export default {
  name: 'App',
  data(){ //중요한 정보 보관하는곳 Object 자료로 저장!
  //{{ data binding }} 쓰는 이유 1. 노 하드코딩! 변경이 쉬워야한다.(대량의 자료에서)
  // 2. Vue의 실시간 자동 렌더링 쓰기 위해서 사용한다. (요게 중요) 데이터를 변경하면 실시간으로 HTML에 반영된다
  // 자주 변경되는 데이터들에 사용하고, 잘 변경되지 않는 데이터는 안쓰는게 낫다.
     return {
      styleRed : "color : tomato",
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices : [12000, 9000, 22000]
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  font-size: 25px;
}
</style>

