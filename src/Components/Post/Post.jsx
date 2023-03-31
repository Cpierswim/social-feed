import "./post.css";
import unselectedLikeIcon from "../../images/like-button-not-selected-icon.svg";
import unselectedDislikeIcon from "../../images/dislike-button-not-selected-icon.svg";
import likeIconHover from "../../images/like-button-hover-icon.svg";
import dislikeIconHover from "../../images/dislike-button-hover-icon.svg";

import React, { useState } from "react";
import LikeButton from "../LIkeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const Post = (props) => {
  return (
    <div className="alignpost">
      <div className="post">
        <p className="post_body">{props.body}</p>
        <hr className="name_seperator" />
        <div className="post_bottom">
          <h3 className="postName">{props.name}</h3>
          <LikeButton like={props.like} />
          <DislikeButton dislike={props.dislike} />
        </div>
      </div>
    </div>
  );
};

export default Post;
