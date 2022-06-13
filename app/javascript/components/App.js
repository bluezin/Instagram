import React, { useEffect, useState } from "react";
import { posts } from "../api/index";
import Form from "./Form";
import ListHistories from "./ListHistories";
import Post from "./Post";

const App = ({ user, setModalPost, modalPost, setElement }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (user) {
      posts().then((data) => setPost(data));
    }
  }, [user]);

  useEffect(() => {
    setElement(document.getElementById("section"));
  }, []);

  if (!user) return null;

  return (
    <div>
      <ListHistories />
      <div id="section">
        {modalPost && (
          <Form user={user} setModalOpen={setModalPost} setPost={setPost} />
        )}
        {post.length > 0 &&
          post.map((item) => <Post {...item} key={item.id} current={user} />)}
      </div>
    </div>
  );
};

export default App;
