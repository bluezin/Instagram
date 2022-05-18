import React from "react";
import Nav from "./Nav";

const Layaout = ({ user, setModalPost, element, children }) => {
  if (!user) return null;
  
  return (
    <div>
      <Nav user={user} setModalPost={setModalPost} element={element} />
      {children}
    </div>
  );
};

export default Layaout;
