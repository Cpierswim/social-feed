import { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import PostList from "./Components/PostList/PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Chris",
      like: false,
      dislike: false,
      timeStamp: Date.now() - 360000,
    },
    {
      body: "Viverra orci sagittis eu volutpat odio facilisis. Egestas diam in arcu cursus euismod quis viverra nibh cras. Amet luctus venenatis lectus magna fringilla urna. Est ante in nibh mauris cursus mattis molestie.",
      name: "JJ",
      like: false,
      dislike: true,
      timeStamp: Date.now() - 2442442343,
    },
    {
      body: "Congue mauris rhoncus aenean vel elit scelerisque mauris.",
      name: "Megan",
      like: false,
      dislike: true,
      timeStamp: Date.now() - 244244234334,
    },
  ]);

  function addNewPost(post) {
    setPosts([post, ...posts]);
  }

  function likePost(post) {
    console.log("Before change");
    console.log(post);

    for (let i = 0; i < posts.length; i++) {
      if (posts[i] === post) {
        posts[i].like = true;
        posts[i].dislike = false;
        console.log("After change");
        console.log(post);
        break;
      }
    }

    setPosts(posts);
  }

  return (
    <div className="App">
      <NavBar />
      <CreatePostForm addNewPost={addNewPost} />
      <PostList posts={posts} likePost={likePost} />
    </div>
  );
}

export default App;
