import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createHistory, fetchImage } from "../api/index";

const Image = ({ state, setState }) => {
  const { handleSubmit, register } = useForm();
  const [image, setImage] = useState({ url: "", loading: false });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("upload_preset", "qc7wftze");

    setImage({
      url: "",
      loading: true,
    });

    fetchImage(formData)
      .then((data) => {
        setImage({
          url: data.url,
          loading: false,
        });
      })
      .catch(() =>
        setImage({
          url: "",
          loading: false,
        })
      );
  };

  useEffect(() => {
    if (image.url) {
      createHistory({
        url_image: image.url,
        url_video: null,
      }).then(() => (window.location.pathname = "/"));
    }
  }, [image.url]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="mb-10 mt-10"
        type="file"
        accept=".png, .jpg, .jpeg"
        {...register("file", { required: "This file is requires" })}
      />

      <div className="flex items-center gap-4">
        <button type="submit" className="w-full bg-blue-400 p-2 text-white">
          {image.loading ? "Loading..." : "Add history"}
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

export default Image;
