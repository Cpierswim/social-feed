import PostList from "./Components/PostList/PostList";

const test = [
  {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "name from test",
    like: false,
    dislike: false,
    timeStamp: Date.now(),
  },
  {
    body: "body from test2",
    name: "name from test2",
    like: false,
    dislike: true,
    timeStamp: Date.now() - 2442442343,
  },
  {
    body: "body from test2",
    name: "name from test2",
    like: false,
    dislike: true,
    timeStamp: Date.now() - 2442442343,
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
