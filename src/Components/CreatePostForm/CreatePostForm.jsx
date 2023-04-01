import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  return (
    <div className="center_div">
      <div className="post_form">
        <form className="inner_form">
          <div className="full_width">
            <label for="name">Name:</label>
            <input type="text" id="name"></input>
          </div>
          <div className="full_width margin_top_5px">
            <label for="post">Post:</label>
            <textarea id="post" rows="4"></textarea>
          </div>
        </form>
        <button className="create_button">Create</button>
      </div>
    </div>
  );
};

export default CreatePostForm;
