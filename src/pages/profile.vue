
<template>
    <div class="home_area">
        <div class="flex_box" v-if="isLogedin">
            <div class="home_post_area" v-if="murmur_posts.length > 0">
                <h1>Your post</h1>
                <div class="post_view" v-for="(murmur, i) in murmur_posts" :key="i">
                    <div class="post_content">
                        <p>{{murmur.text}}</p>
                        <img :src="murmur.url" alt="">
                    </div>
                    <div class="post_details">
                        <p>Post date: <strong>{{murmur.created_at}}</strong></p>
                        <p>Like: <strong>0</strong></p>
                        <button @click="deleteMurmur(murmur.id)">Delete</button>
                    </div>
                </div>
            </div>  
            <div class="home_post_area" v-if="murmur_posts.length == 0">
                <div class="no_murmur_view">
                    <h1>No Murmur post yet</h1>
                </div>
            </div>
            <div class="profile_follower_area">
                <div class="user_profile">
                    <div class="user_profile_icon">
                        <img src="../assets/user_icon.png" alt="">
                    </div>
                    <div class="user_profile_text">
                        <h3>{{user_profile.name}}</h3>
                        <p>{{user_profile.created_at}}</p>
                    </div>
                </div>
                <div class="user_profile">
                    <h2>You liked</h2>
                    <div class="profile_user_profile" v-for="(liked, i) in liked_post" :key="i">
                        <div class="profile_user_profile_icon">
                            <img :src="liked.url" alt="">
                        </div>
                        <div class="profile_user_profile_text">
                            <h3>{{ liked.text }}</h3>
                            <p>{{ liked.created_at }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_post_area no_murmur_view" v-if="!isLogedin">
            <h1>You are not loged in yet!</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies);
  import axios from 'axios';

  export default Vue.extend({
    name: "home",
    data(){
      return{
          isLogedin: false,
          current_user:"test",
          murmur_posts:[],
          user_profile:[],
          liked_post:[],
      }
    },
    methods:{
        async getMurmur() {
            try {
                const url = "http://localhost:3001/api/get_murmur/"
                const response = await axios.get(url+this.current_user)
                this.murmur_posts = response.data
                console.log(this.murmur_posts)
            } catch (e) {
                console.log(e)
            } 
        },
        async getUserProfile() {
            try {
                const url = "http://localhost:3001/api/getuser_profile/"
                const response = await axios.get(url+this.current_user)
                this.user_profile = response.data[0]
                console.log(this.user_profile)
            } catch (e) {
                console.log(e)
            } 
        },
        async deleteMurmur(id:number){
            await fetch("http://localhost:3001/api/delete_murmur/"+id,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'}
            });
            this.getMurmur();
        },
        async getLikedPost() {
            try {
                const url = "http://localhost:3001/api/get_murmur_by_current_users_liked/"
                const response = await axios.get(url+this.current_user)
                this.liked_post = response.data
                console.log(this.liked_post)
            } catch (e) {
                console.log(e)
            } 
        }
    },
    mounted(){
        // alert(this.murmur_posts.length)
        let currentUser = this.$cookies.get("user");
        if(currentUser != null){
            this.current_user = currentUser.email
            this.isLogedin = currentUser.logedin
            console.log(currentUser)
        };
        this.getMurmur();
        this.getUserProfile();
        this.getLikedPost()
    },
  })
</script>

<style>
    .no_murmur_view{
        text-align: center;
        min-height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .home_area{
        width: 100%;
        height: auto;
        float: left;
        position: relative;
    }
    .flex_box{
        display: flex;
        align-items: flex-start;
    }
    /* Liked view */

    .profile_user_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
        flex-direction: revert;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    .profile_user_profile_icon{
        width: 70px;
        height: 70px;
        margin-right: 10px;
        border-radius: 50%;
    }
    .profile_user_profile_icon img{
        width: 100%;
    }
    .profile_user_profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .profile_user_profile_text h3{
        font-size: 16px;
        font-weight: 600;
        color: #333333;
    }
    .profile_user_profile_text p{
        font-size: 12px;
        font-weight: 400;
        color: #bdbdbd;
        margin-top: 5px;
    }
    /* Post list */
    .home_post_area{
        flex: 8;
        background: #ffffff;
        border-radius: 10px;
        margin: 10px;
        padding: 15px;
    }
    .home_post_area h1{
        font-size: 20px;
        color: #333333;
        font-weight: 600;
        margin-bottom: 15px;
    }

    /* Post view */
    .post_view{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 15px;
    }

    /* Post content */
    .post_content{
        width: 100%;
        height: auto;
        float: left;
        min-height: 50px;
        margin-top: 15px;
    }
    .post_content p{
        font-size: 16px;
        color: #333333;
        margin-bottom: 15px;
    }
    .post_content img{
        width: 100%;
    }

    /* Post details */
    .post_details{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .post_details p{
        float: left;
        font-size: 14px;
        color: #333333;
        display: block;
        margin-right: 15px;
    }
    .post_details p strong{
        color: #4c4cfe;
    }
    .post_details button{
        padding: 5px 15px;
        border: 0;
        color: #ffffff;
        background-color: #4c4cfe;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        margin-top: 12px;
    }

    /* Folloe list */
    .profile_follower_area{
        flex: 4;
        margin: 10px;
    }
    .user_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 15px;
    }
    .user_profile h2{
        text-align: left;
        width: 100%;
        margin-bottom: 30px;
        color: #333333;
        font-size: 18px;
    }
    .user_profile_icon{
        width: 250px;
        height: 250px;
        background-color: #eef2f8;
        border-radius: 50%;
        margin-bottom: 15px;
    }
    .user_profile_icon img{
        width: 100%;
    }
    .user_profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    .user_profile_text h3{
        font-size: 26px;
        font-weight: 600;
        color: #333333;
    }
    .user_profile_text p{
        font-size: 16px;
        font-weight: 400;
        color: #bdbdbd;
        margin-top: 10px;
    }
</style>