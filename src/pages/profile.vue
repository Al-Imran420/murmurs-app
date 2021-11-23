
<template>
    <div class="home_area">
        <div class="flex_box">
            <div class="home_post_area">
                <h1>Your post</h1>
                <div class="post_view">
                    <div class="post_content">
                        <p>This is dumme text ...</p>
                        <img src="https://cdn.pixabay.com/photo/2014/02/03/16/52/chain-257490_1280.jpg" alt="">
                    </div>
                    <div class="post_details">
                        <p>Post date: <strong>12 Nov 2021</strong></p>
                        <p>Like: <strong>122</strong></p>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
            <div class="home_follower_area">
                <div class="user_profile">
                    <div class="user_profile_icon"></div>
                    <div class="user_profile_text">
                        <h3>Al Imran</h3>
                        <p>12 Nov 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style>
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
    .home_follower_area{
        flex: 4;
        background: #ffffff;
        border-radius: 10px;
        margin: 10px;
        padding: 15px;
    }
    .user_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
    }
    .user_profile_icon{
        width: 250px;
        height: 250px;
        background-color: #eef2f8;
        border-radius: 50%;
        margin-bottom: 15px;
    }
    .user_profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
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