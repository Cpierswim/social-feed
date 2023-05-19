import unselectedLikeIcon from "./like-button-not-selected-icon.svg";
import likeIconHover from "./like-button-hover-icon.svg";
import selectedLikeIcon from "./like-button-icon.svg";
import React from "react";
import "./likeButton.css";

const LikeButton = (props) => {
  function handleClick() {
    console.log("Hey");
    props.toggleLike(props.post);
  }

  return (
    <div className="icon" onClick={handleClick}>
      {props.post.like ? (
        <img src={selectedLikeIcon} alt="selected like icon" />
      ) : (
        <img src={unselectedLikeIcon} alt="unselected like icon" />
      )}
      <img src={likeIconHover} alt="like button hover" />
    </div>
  );
};

export default LikeButton;
