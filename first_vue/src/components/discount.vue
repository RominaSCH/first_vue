<template>
  <div class="discount">
    <h4>지금 계약하면 첫 달 월세 {{discountValue}}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: "Discount",
    props:{
      discountValue : Number,
    }
}
</script>

<style>
    .discount{
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    }
</style>