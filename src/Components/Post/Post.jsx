import "./post.css";
import React, { useState } from "react";
import LikeButton from "../LIkeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import DateLabel from "../DateLabel/DateLabel";

const Post = (props) => {
  const [post, setPost] = useState("");

  function updatePost(postToUpdate) {}

  return (
    <div className="alignpost">
      <div className="post">
        <p className="post_body">{props.post.body}</p>
        <hr className="name_seperator" />
        <div className="post_bottom">
          <h3 className="postName">{props.post.name}</h3>
          <DateLabel timeStamp={props.post.timeStamp} />
          <LikeButton
            like={props.post.like}
            post={props.post}
            likePost={props.likePost}
          />
          <DislikeButton dislike={props.post.dislike} />
        </div>
      </div>
    </div>
  );
};

export default Post;
