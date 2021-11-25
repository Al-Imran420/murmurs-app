<template>
    <div class="container_right">
        <div class="form_area" v-if="!current_user">
            <form @submit.prevent="submit">
                <h1>Sing in to Account</h1>
                <div class="form_input">
                    <input v-model="name" type="text" placeholder="Name">
                </div>
                <div class="form_input">
                    <input v-model="email" type="text" placeholder="Email">
                </div>
                <div class="form_input">
                    <input v-model="password" placeholder="Password">
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
        <div v-if="current_user">
          <h1>You are loged in</h1>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies);
    export default Vue.extend({
        name: "signup",
        data(){
            return{
                name:'',
                email:'',
                password:'',
                mountains: [],
                current_user:"test@gmail.com"
            }
        },
        methods:{
            async submit(){
                await fetch("http://localhost:3001/api/signup",{
                  method:'POST',
                  headers:{'Content-Type': 'application/json'},
                  body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password
                  })
                });
                await this.$router.push('/login')
            }
        },
        mounted(){
          let currentUser = this.$cookies.get("user")
          this.current_user = currentUser?.email
        }
    })
</script>

<style>
  .container_right{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    border-radius: 10px;
    padding: 50px 15px;
  }
  .form_area{
    width: 100%;
    max-width: 400px;
    height: fit-content;
    text-align: center;
  }
  .form_area h1{
    font-size: 36px;
    color: #0095DB;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .form_area p{
    font-size: 16px;
    color: #333333;
    margin-bottom: 50px;
  }
  .form_area button{
    width: 100%;
    padding: 15px;
    border: 0;
    border-radius: 5px;
    background-color: #0095DB;
    text-transform: uppercase;
    color: #F8F8F8;
    margin: 25px 0;
    cursor: pointer;
  }
  .form_input{
    width: 100%;
    height: auto;
    float: left;
  }
  .form_input input{
    width: 100%;
    border: 1px solid #cdcdcd;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
    background: transparent;
    outline: none;
  }
</style>