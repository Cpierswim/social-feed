import "./PostList.css";
import React from "react";
import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <div className="center_div">
      <div className="post_list">
        {props.posts.map((post) => {
          return (
            <Post
              body={post.body}
              name={post.name}
              like={post.like}
              dislike={post.dislike}
              timeStamp={post.timeStamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
