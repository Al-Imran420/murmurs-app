
<template>
    <div class="home_area">
        <div class="flex_box">
            <div class="home_post_area">
                <h1>Home</h1>
                <div class="post_form">
                    <input type="text" placeholder="Post image link">
                    <textarea placeholder="Post text"></textarea>
                    <button>Post</button>
                </div>
                <div class="post_view">
                    <div class="poster_profile">
                        <div class="profile_icon"></div>
                        <div class="profile_text">
                            <h3>Al Imran</h3>
                            <p>12 Nov 2021</p>
                        </div>
                        <button>Like</button>
                    </div>
                    <div class="post_content">
                        <p>This is dumme text ...</p>
                        <img src="https://cdn.pixabay.com/photo/2014/02/03/16/52/chain-257490_1280.jpg" alt="">
                    </div>
                    <div class="comment_view">
                        <div class="profile_icon_small"></div>
                        <p>This is dumme text ...</p>
                    </div>
                    <div class="post_like_comment">
                        <input type="text" placeholder="Comment">
                        <button>Comment</button>
                    </div>
                </div>
            </div>
            <div class="home_follower_area">
                <h1>Who to follow</h1>
                <div class="home_user_profile">
                    <div class="home_user_profile_icon"></div>
                    <div class="home_user_profile_text">
                        <h3>Al Imran</h3>
                        <p>12 Nov 2021</p>
                        <button>Folloe</button>
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
        margin-bottom: 15px;
    }
    .home_user_profile{
        width: 100%;
        height: auto;
        float: left;
        display: flex;
        position: relative;
        flex-direction: revert;
        align-items: flex-start;
    }
    .home_user_profile_icon{
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background-color: #eef2f8;
        border-radius: 50%;
    }
    .home_user_profile_text{
        display: flex;
        flex-direction: column;
        justify-content: center;
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