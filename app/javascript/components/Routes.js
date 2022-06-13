import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUser, posts } from "../api/index";
import App from "./App";
import Form from "./Form";
import Layaout from "./Layaout";
import Profile from "./Profile";

const AppRoutes = () => {
  const [user, setUser] = useState();
  const [modalPost, setModalPost] = useState(false);
  const [element, setElement] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    getUser().then((data) => setUser(data.user));
  }, []);

  useEffect(() => {
    if (user) {
      posts().then((data) => setPost(data));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Layaout user={user} setModalPost={setModalPost} element={element}>
        {modalPost && (
          <Form user={user} setModalOpen={setModalPost} setPost={setPost} />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <App
                user={user}
                post={post}
                setElement={setElement}
              />
            }
          />
          <Route
            exact
            path="/profile/:id"
            element={<Profile setElement={setElement} />}
          />
        </Routes>
      </Layaout>
    </BrowserRouter>
  );
};

export default AppRoutes;
