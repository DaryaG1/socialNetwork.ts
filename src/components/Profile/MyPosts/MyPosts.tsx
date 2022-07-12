import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {stateType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsTypeProps = {
    state: stateType
    AddPost: (text:string) => void
    newPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsTypeProps> = (props) => {


    const addNewPostPage = props.state.ProfilePage.postData.map(p => <Post id={p.id} text={p.text}
                                                                           likeCount={p.likeCount}/>)
    return (<div className={classes.Posts}>
        <div>
            <textarea ></textarea>
            <div>
                <button >Add Post</button>
            </div>
        </div>
        {addNewPostPage}
    </div>)
}

export default MyPosts