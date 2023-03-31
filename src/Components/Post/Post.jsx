import "./post.css";
import unselectedLikeIcon from "../../images/like-button-not-selected-icon.svg";
import unselectedDislikeIcon from "../../images/dislike-button-not-selected-icon.svg";
import likeIconHover from "../../images/like-button-hover-icon.svg";
import dislikeIconHover from "../../images/dislike-button-hover-icon.svg";

import React, { useState } from "react";

const Post = (props) => {
  return (
    <div className="alignpost">
      <div className="post">
        <p className="post_body">{props.body}</p>
        <hr className="name_seperator" />
        <div className="post_bottom">
          <h3 className="postName">{props.name}</h3>
          <div className="icon">
            <img src={unselectedLikeIcon} alt="unselected like icon" />
            <img src={likeIconHover} alt="unselected like icon" />
          </div>
          <div className="icon">
            <img src={unselectedDislikeIcon} alt="unselected dislike icon" />
            <img src={dislikeIconHover} alt="unselected dislike icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
