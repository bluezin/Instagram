import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api/index";
import NewHistory from "./NewHistory";

const Profile = ({ setElement }) => {
  const [state, setState] = useState({
    user: {},
    posts: [],
    modalHistory: false,
  });
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getUser().then((data) =>
        setState({ ...state, user: data.user, posts: data.posts })
      );
    }
  }, [params.id]);

  useEffect(() => {
    setElement(document.getElementById("section"));
  }, []);

  return (
    <section id="section" style={{ height: "100vh" }}>
      <div className="mt-10 profile-container">
        <div className="flex items-center sm:ml-20 gap-4">
          {!state.user?.image ? (
            <div className="border-solid border-3 border-gray-400 py-1 px-4 w-32 h-32 flex items-center justify-center text-3xl rounded-full text-white bg-purple-300">
              <strong className="cursor-pointer">
                {state.user.name?.slice(0, 1)}
              </strong>
            </div>
          ) : (
            <div className="border-solid border-3 border-gray-400 py-1 px-4 w-32 h-32 flex items-center justify-center text-3xl rounded-full text-white bg-white">
              <img
                src={state.user?.image}
                className="mt-2 block rounded-full"
              />
            </div>
          )}

          <div>
            <h1 className="text-3xl -ml-1">{state.user.name}</h1>
            <strong className="mt-2 flex gap-2">
              {state.posts.length}
              <span className="">Posts</span>
            </strong>
            <div>
              <button
                className="bg-blue-200 p-2 mt-4 rounded text-sm"
                onClick={() => setState({ ...state, modalHistory: true })}
              >
                Add History
              </button>
            </div>
          </div>
        </div>

        <div className="profile-post">
          {state.posts?.map((post) => (
            <div key={post.id} className="">
              <img src={post.image} className="" />
            </div>
          ))}
        </div>
      </div>

      {state.modalHistory && <NewHistory state={state} setState={setState} />}
    </section>
  );
};

export default Profile;
