import React, { useState } from "react";
import Post from "../Post/Post";

const PostList = (props) => {
  return (
    <div>
      <Post
        body={"body from postlist"}
        name={"name from postlist"}
        like={false}
        dislike={false}
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
