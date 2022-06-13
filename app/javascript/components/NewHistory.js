import React, { useState } from "react";
import Image from "./Image";
import Video from "./Video";

const NewHistory = ({ state, setState }) => {
  const [checked, setChecked] = useState("");

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-opacity-30 bg-black">
      <div
        style={{
          backgroundColor: "hsl(242deg 88% 56%)",
          height: "25em",
          borderRadius: "20px",
        }}
        className="m-auto p-10 wp-500 text-white text-center relative"
      >
        <button
          className="absolute right-0 text-4xl top-0 p-4"
          onClick={() => setState({ ...state, modalHistory: false })}
        >
          X
        </button>

        <h1 className="text-center text-4xl mb-10 text-white">
          <strong>Add history</strong>
        </h1>

        <div className="">
          <h1 className="text-2xl mb-4">Choose image or video:</h1>

          <label className="block">
            <input
              className="mr-4"
              type="radio"
              value="image"
              name="type"
              onChange={() => setChecked("image")}
            />
            Image
          </label>

          <label>
            <input
              className="mr-4"
              type="radio"
              value="video"
              name="type"
              onChange={() => setChecked("video")}
            />
            Video
          </label>
        </div>

        {checked === "image" ? (
          <Image state={state} setState={setState} />
        ) : (
          checked === "video" && <Video state={state} setState={setState} />
        )}
      </div>
    </div>
  );
};

export default NewHistory;
