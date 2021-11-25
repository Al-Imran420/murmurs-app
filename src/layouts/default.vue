<template>
    <div class="app_area">
        <div class="container">
            <div class="flex_box">
                <div class="app_sidebar">
                    <div class="app_logo">
                        <h1>murmur</h1>
                    </div>
                    <ul>
                        <!-- <li> <NuxtLink to="/"> No Login </NuxtLink> </li> -->
                        <li> <NuxtLink to="/home"> Home </NuxtLink> </li>
                        <li> <NuxtLink to="/profile"> Profil </NuxtLink> </li>
                        <li> <NuxtLink to="/login"> Login </NuxtLink> </li>
                        <li> <NuxtLink to="/signup"> Signup </NuxtLink> </li>
                    </ul>
                    <div class="post_button_sidebar">
                        <button @click="signOut">Sign Out</button>
                    </div>
                </div>
                <div class="app_outlet">
                  <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies);
  export default Vue.extend({
    name: "default",
    data(){
      return{
          isLogedin: false
      }
    },
    methods:{
        async signOut(){
            this.$cookies.remove("user");
            await this.$router.push('/login')
        }
    },
    mounted(){
      let currentUser = this.$cookies.get("user");
      if(currentUser != null){
        this.isLogedin = currentUser.logedin
        console.log(currentUser)
      }
    }
  })
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background: #eef2f9;
        font-family: 'Roboto', sans-serif;
    }
    .app_area{
        width: 100%;
        height: auto;
        float: left;
        position: relative;
        margin-top: 15px;
    }
    .container{
        width: 100%;
        max-width: 1280px;
        display: block;
        margin: auto;
    }
    .flex_box{
        display: flex;
    }
    .app_sidebar{
        flex: 2;
        background: #ffffff;
        border-radius: 10px;
        margin: 10px;
        padding: 15px;
    }
    .app_outlet{
        flex: 10;
    }
    .app_logo{
        width: 100%;
        height: auto;
        float: left;
        text-align: left;
        padding: 15px;
    }
    .app_logo h1{
        text-transform: uppercase;
        font-size: 22px;
        color: #333333;
        font-weight: 600;
    }
    .app_sidebar ul{
        width: 100%;
        height: auto;
        float: left;
    }
    .app_sidebar ul li{
        list-style: none;
        display: list-item;
    }
    .app_sidebar ul li a{
        display: block;
        padding: 10px 15px;
        text-decoration: none;
        color: #333333;
        font-size: 18px;
        font-weight: normal;
        transition: 0.3s ease-in-out;
    }
    .app_sidebar ul li a:hover{
        color: #4c4cff !important;
    }
    .nuxt-link-exact-active{
        color: #4c4cff !important;
    }
    .post_button_sidebar{
        width: 100%;
        height: auto;
        float: left;
        position: relative;
        margin-top: 15px;
    }
    .post_button_sidebar button{
        width: 100%;
        height: auto;
        float: left;
        position: relative;
        background-color: #4c4cff;
        color: #ffffff;
        border-radius: 5px;
        border: 0;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
    }
</style>