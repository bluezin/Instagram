import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createHistory, fetchVideo } from "../api/index";

const Video = ({ state, setState }) => {
  const { handleSubmit, register } = useForm();
  const [video, setVideo] = useState({ url: "", loading: "" });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("upload_preset", "qc7wftze");

    setVideo({
      url: "",
      loading: true,
    });

    fetchVideo(formData)
      .then((data) => {
        setVideo({
          url: data.url,
          loading: false,
        });
      })
      .catch(() =>
        setVideo({
          url: "",
          loading: false,
        })
      );
  };

  useEffect(() => {
    if (video.url) {
      createHistory({ url_image: null, url_video: video.url }).then(
        () => (window.location.pathname = "/")
      );
    }
  }, [video.url]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mb-10 mt-10"
        type="file"
        accept="video/*"
        {...register("file", { required: "This file is requires" })}
      />

      <div className="flex items-center gap-4">
        <button type="submit" className="w-full bg-blue-400 p-2 text-white">
          {video.loading ? "Loading..." : "Add history"}
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 p-2 text-white"
          onClick={() => setState({ ...state, modalHistory: false })}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Video;
