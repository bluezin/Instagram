import React, { useEffect } from "react";
import ListHistories from "./ListHistories";
import Post from "./Post";

const App = ({ user, post, setElement }) => {
  useEffect(() => {
    setElement(document.getElementById("section"));
  }, []);

  if (!user) return null;

  return (
    <div id="section">
      <ListHistories />
      <div>
        {post.length > 0 &&
          post.map((item) => <Post {...item} key={item.id} current={user} />)}
      </div>
    </div>
  );
};

export default App;
