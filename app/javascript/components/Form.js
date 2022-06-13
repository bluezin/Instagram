import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchImage, postCreate } from "../api/index";

const Form = ({ user, setModalOpen, setPost }) => {
  const [state, setState] = useState({
    description: "",
    image: "",
    click: false,
    loading: false,
  });
  const { handleSubmit, register } = useForm();
  const { description, click, image } = state;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("description", data.description);
    formData.append("upload_preset", "qc7wftze");

    setState({ ...state, loading: true });

    fetchImage(formData).then((image) => {
      setState({
        image: image.url,
        description: data.description,
        click: true,
        loading: false,
      });
    });
  };

  useEffect(() => {
    if (description && image && click) {
      postCreate({ newData: { ...state } }).then((data) => {
        setModalOpen(false);
        setPost(data);
      });
    }
  }, [state.description, state.image, state.click]);

  return (
    <div className="flex justify-center items-center p-10 absolute right-0 left-0 top-0 bottom-0 bg-opacity-30 bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 w-3/6 m-auto flex justify-center flex-col relative"
        id="form"
      >
        <button
          onClick={() => {
            setModalOpen(false);
            document.body.style.overflow = "auto";
          }}
          className="absolute right-5 top-4 cursor-pointer"
        >
          X
        </button>
        <strong className="cursor-pointer mb-5 flex items-center">
          <span className="py-1 px-3 rounded-full mr-4 bg-purple-300 flex justify-center items-center">
            {user.name?.slice(0, 1)}
          </span>
          {user.name}
        </strong>

        <input
          placeholder="Description"
          type="text"
          name="description"
          {...register("description", { required: "This camp is required" })}
        />

        <div className="mt-10">
          <input
            type="file"
            {...register("file", { required: "This camp is required" })}
            accept="image/*"
          />
        </div>

        <button type="submit" className="p-2 bg-blue-500 mt-5 text-white">
          {state.loading ? "Loading ..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default Form;
