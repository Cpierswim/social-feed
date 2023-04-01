import "./post.css";
import React from "react";
import LikeButton from "../LIkeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import DateLabel from "../DateLabel/DateLabel";

const Post = (props) => {
  return (
    <div className="alignpost">
      <div className="post">
        <p className="post_body">{props.body}</p>
        <hr className="name_seperator" />
        <div className="post_bottom">
          <h3 className="postName">{props.name}</h3>
          <DateLabel timeStamp={props.timeStamp} />
          <LikeButton like={props.like} />
          <DislikeButton dislike={props.dislike} />
        </div>
      </div>
    </div>
  );
};

export default Post;
