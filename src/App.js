import Post from "./Components/Post/Post";
import PostList from "./Components/PostList/PostList";

const test = [
  {
    body: "body from test",
    name: "name from test",
    like: false,
    dislike: false,
  },
  {
    body: "body from test2",
    name: "name from test2",
    like: false,
    dislike: true,
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
