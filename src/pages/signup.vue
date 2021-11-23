<template>
    <div class="container_right">
        <div class="form_area">
            <form @submit.prevent="submit">
                <h1>Sing in to Account</h1>
                <p>Hello there, Please sign in with your account and start <br>like, comment, share.</p>
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
    </div>
</template>

<script setup lang="ts">
    export default {
        name: "signup",
        data(){
            return{
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async submit(){
                // await 
                // await console.log(
                //     JSON.stringify(
                //         {
                //             name :this.name
                //         }
                //     )
                // )
                // await this.$router.push('/login')
            }
        }
    }
</script>

<style>
  .container_right{
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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