<script lang="ts">
  import { ref } from "vue";
  const searchText =  ref("");
  const myData =  ref([]) as any;

  async function searchForm() {
      const data = await fetch(`http://localhost:3001/api/get_test_one/${searchText.value}`)
      const json = await data.json()
      console.log("json", json)
      myData.value = json
  }
</script>

<script setup lang="ts">
    // const { data }: { data:any } = await useFetch("http://localhost:3001/api/getTest");
    // const {data} = await useAsyncData("searchData",() =>
    //     $fetch("http://localhost:3001/api/getTest")
    // )
</script>

<template>
  <div>
    <h1>Hello loggin page..</h1>
    <!-- <NuxtWelcome /> -->
    <!-- {{data}} -->
    <form @submit.prevent="searchForm">
        <input type="text" v-model="searchText" />
        <button>Search</button>
    </form>
    <br>
    <div>
        <li v-for="a in myData" v-bind:key="a">
            {{a.description}}
        </li>
    </div>
    <!-- {{myData}} -->
  </div>
</template>
