import React, { useEffect, useState } from "react";
import { searchResults, searchData, userLogout } from "./api";

const Nav = ({ user, setModalPost, element }) => {
  const [results, setResults] = useState([]);
  const [click, setClick] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value) {
      searchResults({ search_id: user.search_id, text: value }).then((data) =>
        setResults(data)
      );
    }
  };

  const handleClickSearch = () => {
    searchData({ search_id: user.search_id }).then((data) => setResults(data));
    setClick(true);
  };

  const handleLogout = () => {
    userLogout().then((data) => {
      window.location.pathname = "/users/new";
    });
  };

  useEffect(() => {
    if (element) {
      element.addEventListener("mousedown", () => {
        setClick(false);
        setOpenModal(false);
      });
    }
  }, [click, openModal]);

  return (
    <div className="p-2 bg-white shadow-md items-center sm:flex md:justify-around justify-between">
      <h1 className="font-bold text-4xl home-h1 sm:m-auto mb-4">Instagram</h1>

      <div className="relative">
        <input
          placeholder="🔍 Search"
          className="p-1 bg-gray-100 outline-none rounded-md w-80 m-auto block"
          onChange={handleSearch}
          onClick={handleClickSearch}
        />

        {results.length === 0 && click && (
          <div className="absolute bg-white shadow-lg w-80 mt-4 p-2 box-content">
            <strong className="text-center block">Not Results</strong>
          </div>
        )}

        {click && results.length >= 1 && (
          <div className="absolute bg-white shadow-lg w-80 mt-4 p-2 box-border">
            {results.map((item, index) => (
              <div
                className="flex items-center gap-4 mt-4"
                key={item.id || index}
              >
                {!item.image ? (
                  <div className="bg-purple-300 px-3 rounded-full w-7 h-7 flex justify-center items-center">
                    <strong>{item.name?.slice(0, 1)}</strong>
                  </div>
                ) : (
                  <img src={item.image} className="rounded-full w-7 h-7" />
                )}
                <strong>{item.name}</strong>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center sm:m-auto mt-4 relative">
        <a href="/" className="mr-4">
          <img
            src="https://icongr.am/octicons/home-fill.svg?size=30&color=currentColor"
            className="cusor-pointer"
          />
        </a>
        <div onClick={() => setModalPost(true)}>
          <img
            src="https://icongr.am/feather/plus-square.svg?size=30&color=currentColor"
            className="cursor-pointer"
          />
        </div>
        <div
          className="border-solid border-3 border-gray-400 py-1 px-4"
          onClick={() => setOpenModal(true)}
        >
          {!user.image ? (
            <div className="bg-purple-300 px-3">
              <strong className="cursor-pointer">
                {user.name?.slice(0, 1)}
              </strong>
            </div>
          ) : (
            <img src={user.image} className="rounded-full w-7 h-7" />
          )}
        </div>

        {openModal && (
          <div
            className="absolute top-12 left-24 bg-white shadow-lg w-4/6 box-border text-center p-2"
            id="info"
          >
            <a href={`/profile/${user.id}`} className="block">
              Profile
            </a>
            <div className="border-t-2 mt-4 border-gray-200 border-solid">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
