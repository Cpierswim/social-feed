import unselectedDislikeIcon from "./dislike-button-not-selected-icon.svg";
import dislikeIconHover from "./dislike-button-hover-icon.svg";
import selectedDisikeIcon from "./dislike-button-icon.svg";
import React from "react";
import "./dislikeButton.css";

const DislikeButton = (props) => {
  return (
    <div className="icon">
      {props.dislike ? (
        <img src={selectedDisikeIcon} alt="selected dislike icon" />
      ) : (
        <img src={unselectedDislikeIcon} alt="unselected dislike icon" />
      )}
      <img src={dislikeIconHover} alt="dislike icon hover" />
    </div>
  );
};

export default DislikeButton;
