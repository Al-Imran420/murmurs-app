<template>
  <div class="welcome">
    <img src="../assets/welcome_img.jpeg" alt="">
    <h1>Welcome to Murmur!</h1>
    {{data}}
  </div>
</template>

<script setup lang="ts">
export default {
  async asyncData({ $axios }): Promise<object> {
    const res = await $axios.$get('http://localhost:3001/api/getuser')
    console.log(res)
    return {
      data: res,
    }
  },
  data() {
    return {}
  },
  mounted(){
    console.log("he======")
  },
}
</script>

<style>
  .welcome{
      width: 100%;
      height: 500px;
      background-color: #ffffff;
      padding: 15px;
      border-radius: 10px;
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .welcome img{
        max-width: 200px;
  }
  .welcome h1{
        font-size: 46px;
    font-weight: 500;
    color: #001922;
  }
</style>