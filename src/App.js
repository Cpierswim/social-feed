import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";

const test = [
  {
    body: "body from test",
    name: "name from test",
    like: false,
    dislike: false,
  },
];

function App() {
  return (
    <div className="App">
      <PostList posts={test} />
    </div>
  );
}

export default App;
