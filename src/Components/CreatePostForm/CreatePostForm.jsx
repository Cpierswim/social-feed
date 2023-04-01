import "./CreatePostForm.css";

const CreatePostForm = (props) => {
  return (
    <div className="center_div">
      <div className="post_form">
        <form className="inner_form">
          <div className="full_width">
            <div className="form-floating mb-3 margin_top_10px shadow">
              <input className="form-control" id="floatingInput" />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating shadow">
              <textarea
                className="form-control bigger_text_area"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Post</label>
            </div>
          </div>
        </form>
        <button type="button" className="btn btn-primary create_button">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
