import React, { useEffect, useState } from "react";
import { getUser, posts } from "./api";
import Nav from "./Nav";
import Form from "./Form";
import Post from "./Post";

const App = () => {
  const [user, setUser] = useState();
  const [modalPost, setModalPost] = useState(false);
  const [post, setPost] = useState([]);
  const element = document.getElementById("section");

  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    if (user) {
      posts().then((data) => setPost(data));
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <Nav user={user} setModalPost={setModalPost} element={element} />
      <div id="section">
        {modalPost && (
          <Form user={user} setModalOpen={setModalPost} setPost={setPost} />
        )}
        {post.length > 1 &&
          post.map((item) => <Post {...item} key={item.id} current={user} />)}
      </div>
    </div>
  );
};

export default App;
