import React, { useState } from "react";
import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let name_check = name.trim();
    let post_check = post.trim();

    if (name_check !== "" && post_check !== "") {
      //document.getElementById("floatingInput").value = "";
      //document.getElementById("floatingTextarea").value = "";
      let newPost = {
        body: post_check,
        name: name_check,
        like: false,
        dislike: false,
        timeStamp: Date.now(),
      };

      setName("");
      setPost("");
      props.addNewPost(newPost);
    }
  }

  return (
    <div className="center_div">
      <div className="post_form">
        <form className="inner_form" onSubmit={handleSubmit}>
          <div className="full_width">
            <div className="form-floating mb-3 margin_top_10px shadow">
              <input
                className="form-control"
                id="floatingInput"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating shadow">
              <textarea
                className="form-control bigger_text_area"
                id="floatingTextarea"
                value={post}
                onChange={(event) => setPost(event.target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea">Post</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary create_button">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
