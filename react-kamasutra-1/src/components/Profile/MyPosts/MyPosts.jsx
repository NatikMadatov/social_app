import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div><textarea></textarea></div>
            <div><button> My post </button></div>

            <Post message='ya Oleg' like='+15' />
            <Post message='ya tozhe' like='+20' />
        </div>
    )

}
export default MyPosts;