import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { commentCreate, likeCreate, likeDelete } from "./api";
import moment from "moment";

const Post = ({ user, image, description, likes, current, comments, id }) => {
  const { handleSubmit, register } = useForm();
  const [state, setState] = useState({ comments, likes });

  const onSubmit = (data) => {
    commentCreate({ postId: id, content: data.content }).then(
      (new_comments) => {
        setState({ ...state, comments: new_comments });
      }
    );
  };

  const handleLike = (type = "") => {
    if (type === "heart") {
      likeCreate({ postId: id }).then((new_likes) => {
        setState({ ...state, likes: new_likes });
      });
    } else {
      likeDelete({ postId: id }).then((new_likes) => {
        setState({ ...state, likes: new_likes });
      });
    }
  };

  return (
    <section className="mt-10 m-auto container-posts">
      <div className="border-solid border-2 border-gray-100 p-2 m-auto mt-10 mb-10">
        <div className="flex items-center mb-4 font-bold">
          {!user.image ? (
            <div className="bg-purple-300 px-3 mr-4">
              <strong className="cursor-pointer">
                {user.name?.slice(0, 1)}
              </strong>
            </div>
          ) : (
            <img src={user.image} className="rounded-full w-7 h-7 mr-4" />
          )}
          {user.name}
        </div>

        <div className="w-full">
          <img src={image} className="m-auto" />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-3 mb-2">
            {state.likes.find((item) => item.user_id === current.id) ? (
              <button
                className="cursor-pointer font-bold"
                onClick={() => handleLike("no-heart")}
              >
                ❤️
              </button>
            ) : (
              <button
                className="cursor-pointer font-bold"
                onClick={() => handleLike("heart")}
              >
                ♡
              </button>
            )}
            <p className="font-bold text-xl">{state.likes.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <strong className="block text-gray-500">{user.name}</strong>

            <i className="" style={{ fontWeight: "100" }}>
              {description}
            </i>
          </div>
        </div>

        <div className="mt-4">
          {state?.comments.map((comment) => (
            <div
              className="flex items-center justify-between mb-2"
              key={comment.id}
            >
              <p className="text-sm font-light">
                <span className="text-sm mr-4 font-bold">
                  {comment.user?.name}
                </span>
                {comment.content}
              </p>
              <span className="text-sm" style={{ color: "gray" }}>
                {moment(comment.created_at).fromNow()}
              </span>
            </div>
          ))}
          <strong
            className="block mt-4 text-sm font-light"
            style={{ color: "gray" }}
          >
            {state.comments.length} comments
          </strong>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mt-4 p-2 bg-gray-50 w-full rounded-sm border-0.5 border-solid border-blue-50"
            placeholder="Content..."
            {...register("content", { required: "This camp is required" })}
          />
          <button
            type="submit"
            className="mt-4 bg-blue-200 p-1 rounded text-sm cursor-pointer font-bold"
          >
            Create comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Post;
