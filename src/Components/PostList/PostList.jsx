import React, { useState } from "react";
import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <div className="post_list">
      {props.posts.map((post) => {
        return (
          <Post
            body={post.body}
            name={post.name}
            like={post.like}
            dislike={post.dislike}
          />
        );
      })}
    </div>
  );
};

export default PostList;
