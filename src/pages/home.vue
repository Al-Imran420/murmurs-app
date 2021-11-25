
<template>
    <div class="home_area">
        <div class="flex_box" v-if="isLogedin">
            <div class="home_post_area">
                <h1>Home</h1>
                <div class="post_form">
                    <form @submit.prevent="submit">
                        <input v-model="url" type="text" placeholder="Post image link Ex: https://cdn.pixabay.com/photo/2021.._1280.jpg">
                        <textarea v-model="text" placeholder="Post text"></textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
                <div v-if="murmur_posts.length > 0">
                    <div class="post_view" v-for="(murmur, i) in murmur_posts" :key="i">
                        <div class="poster_profile">
                            <div class="profile_icon"></div>
                            <div class="profile_text">
                                <h3>{{murmur.murmur_users}}</h3>
                                <p>{{murmur.created_at}}</p>
                            </div>
                        </div>
                        <div class="post_content">
                            <p>{{murmur.text}}</p>
                            <img :src="murmur.url" alt="">
                        </div>
                        <div class="post_like_comment" v-if="liked[i]">
                            <button @click="addLike(murmur, i)">Like</button>
                        </div>
                    </div>
                </div>
                <div class="no_murmur_view" v-if="murmur_posts.length == 0">
                    <h1>No Murmur post yet</h1>
                </div>
            </div>
            <div class="home_follower_area">
                <h1>Who to follow</h1>
                <div class="home_user_profile" v-for="(follower, i) in follower_list" :key="i">
                    <div class="home_user_profile_icon">
                        <img src="../assets/user_icon.png" alt="">
                    </div>
                    <div class="home_user_profile_text">
                        <h3>{{ follower.name }}</h3>
                        <p>{{ follower.created_at }}</p>
                        <button>Folloe</button>
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
          useremail:"test@gmail.com",
          murmur_posts:[],
          follower_list:[],
          url:'',
          text:'',
          liked:true
      }
    },
    methods:{
        async getMurmur() {
            try {
                const response = await axios.get(`http://localhost:3001/api/get_murmur_byuser`)
                this.murmur_posts = response.data
                console.log(this.murmur_posts)
            } catch (e) {
                console.log(e)
            } 
        },
        async getFollower(){
            try {
                const response = await axios.get(`http://localhost:3001/api/getuser`)
                this.follower_list = response.data
                console.log(this.follower_list)
            } catch (e) {
                console.log(e)
            } 
        },
        async submit(){
            await fetch("http://localhost:3001/api/add_murmur",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    url: this.url,
                    text: this.text,
                    likecount: 0,
                    useremail: this.useremail
                })
            });
            this.url = ''
            this.text = ''
            this.getMurmur();
        },
        async addLike(like:any, i:any){
            console.log(like.murmur_id)
            await fetch("http://localhost:3001/api/add_like",{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    post_id: like.murmur_id,
                    useremail: this.useremail
                })
            });
            this.liked[i] =! this.liked[i]
        }
    },
    mounted(){
        this.getMurmur();
        this.getFollower();
        let currentUser = this.$cookies.get("user");
        if(currentUser != null){
            this.useremail = currentUser.email
            this.isLogedin = currentUser.logedin
            console.log(currentUser)
        }
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
        width: 100%;
        height: auto;
        float: left;
        position: relative;
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

    /* Post from */
    .post_form{
        width: 100%;
        height: auto;
        float: left;
        position: relative;
        margin-bottom: 30px;
        border-bottom: 1px dashed #cdcdcd;
        padding-bottom: 30px;
    }
    .post_form input{
        width: 100%;
        padding: 10px;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: 15px;
    }
    .post_form textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: 10px;
        min-height: 120px;
    }
    .post_form button{
        border: 0;
        padding: 10px 20px;
        background-color: #4c4cfe;
        font-size: 14px;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
    }

    /* Post view */
    .post_view{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 15px;
    }
    .poster_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
    }
    .profile_icon{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background-color: #eef2f8;
        border-radius: 50%;
    }
    .profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .profile_text h3{
        font-size: 16px;
        font-weight: 600;
        color: #333333;
    }
    .profile_text p{
        font-size: 12px;
        font-weight: 400;
        color: #bdbdbd;
        margin-top: 5px;
    }
    .profile_text button{
        border: 0;
        padding: 8px 15px;
        background-color: #4c4cfe;
        font-size: 12px;
        color: #ffffff;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 5px;
    }
    .poster_profile button{
        padding: 5px 15px;
        border: 0;
        color: #ffffff;
        background-color: #4c4cfe;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        margin-top: 12px;
        position: absolute;
        right: 0;
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
    }
    .post_content img{
        width: 100%;
    }

    /* Comment view */
    .comment_view{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .comment_view p{
        font-size: 12px;
        font-weight: 400;
        color: #333333;
    }
    .profile_icon_small{
        width: 36px;
        height: 36px;
        margin-right: 10px;
        background-color: #eef2f8;
        border-radius: 50%;
    }


    /* Post like comment area */
    .post_like_comment{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 15px;
        display: flex;
    }
    .post_like_comment button{
        padding: 5px 15px;
        border: 0;
        color: #ffffff;
        background-color: #4c4cfe;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }
    .post_like_comment input{
        margin-right: 15px;
        width: 100%;
        border: 1px solid #cdcdcd;
        padding: 10px;
        border-radius: 5px;
    }


    /* Folloe list */
    .home_follower_area{
        flex: 4;
        background: #ffffff;
        border-radius: 10px;
        margin: 10px;
        padding: 15px;
    }
    .home_follower_area h1{
        font-size: 20px;
        color: #333333;
        font-weight: 600;
        margin-bottom: 35px;
    }
    .home_user_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
        flex-direction: revert;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    .home_user_profile_icon{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background-color: #eef2f8;
        border-radius: 50%;
    }
    .home_user_profile_icon img{
        width: 100%;
    }
    .home_user_profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .home_user_profile_text h3{
        font-size: 16px;
        font-weight: 600;
        color: #333333;
    }
    .home_user_profile_text p{
        font-size: 12px;
        font-weight: 400;
        color: #bdbdbd;
        margin-top: 5px;
    }
    .home_user_profile_text button{
        padding: 5px 15px;
        border: 0;
        color: #ffffff;
        background-color: #4c4cfe;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        margin-top: 12px;
    }
</style>