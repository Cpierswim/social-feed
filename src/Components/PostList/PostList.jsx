import "./PostList.css";
import React from "react";
import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <div className="center_div">
      <div className="post_list">
        {props.posts.map((post, index) => {
          return <Post key={index} post={post} toggleLike={props.toggleLike} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
