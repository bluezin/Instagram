import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUser } from "./api";
import App from "./App";
import Layaout from "./Layaout";
import Profile from "./Profile";

const AppRoutes = (props) => {
  const [user, setUser] = useState();
  const [modalPost, setModalPost] = useState(false);
  const [element, setElement] = useState("");

  useEffect(() => {
    getUser().then((data) => setUser(data.user));
  }, []);

  return (
    <BrowserRouter>
      <Layaout user={user} setModalPost={setModalPost} element={element}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <App
                user={user}
                setModalPost={setModalPost}
                modalPost={modalPost}
                setElement={setElement}
              />
            }
          />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </Layaout>
    </BrowserRouter>
  );
};

export default AppRoutes;
