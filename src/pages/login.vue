<template>
    <div class="container_right">
        <div class="form_area">
            <h1>Create Your Account </h1>
            <p>Please provide your valid email address for create your account, because <br>
                your email address will be use for your user name.</p>
            <div class="form_input">
                <input type="text" placeholder="Email">
            </div>
            <div class="form_input">
                <input placeholder="Password">
            </div>
            <button>Sign In</button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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