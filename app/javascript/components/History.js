import React, { useState } from "react";

const History = ({ chooseHistory, setSlide, slide, setChooseHistory }) => {
  return (
    <>
      {chooseHistory.modal && (
        <div className="absolute bg-black-opacity flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <button
            onClick={() => {
              setChooseHistory({ ...chooseHistory, modal: false });
              document.body.style.overflow = "auto";
            }}
            className="text-4xl text-white absolute right-0 top-0 ms-20"
          >
            X
          </button>

          <div className="historyOpen relative shadow-lg p-2 wp-500">
            <figure className="flex items-center absolute zi-10">
              {chooseHistory.history.user.image ? (
                <img
                  src={chooseHistory.history.user.image}
                  className="rounded-full wt-60 ht-60"
                />
              ) : (
                <p className="rounded-full wt-60 ht-60 m-auto cursor-pointer border-instagram flex items-center justify-center text-4xl text-white">
                  {chooseHistory.history.user.name.slice(0, 1)}
                </p>
              )}
              <figcaption className="text-white font-bold ms-20">
                {chooseHistory.history.user?.name}
              </figcaption>
            </figure>

            {slide.left !== 0 && (
              <button
                className="rounded-full cursor-pointer bg-opacity-30 bg-black w-10 ht-60 p-1 text-4xl absolute zi-10 top-0 bottom-0 m-auto left-0"
                onClick={() => {
                  setSlide({
                    ...slide,
                    left: slide.left - 1,
                    right: slide.left,
                  });
                }}
              >
                <img src="https://icongr.am/feather/chevron-left.svg?size=28&color=ffffff" />
              </button>
            )}

            {slide.data.slice(slide.left, slide.right).map((item, index) => (
              <React.Fragment key={index}>
                {item.includes("video") ? (
                  <video
                    src={item}
                    className="m-auto"
                    autoPlay
                    controls
                  ></video>
                ) : (
                  <img src={item} className="history-img p-20" />
                )}
              </React.Fragment>
            ))}

            {slide.right !== slide.data.length && (
              <button
                className="rounded-full cursor-pointer bg-opacity-30 bg-black w-10 ht-60 p-1 text-4xl absolute right-0 top-0 bottom-0 m-auto"
                onClick={() => {
                  setSlide({
                    ...slide,
                    right: slide.right + 1,
                    left: slide.right,
                  });
                }}
              >
                <img
                  src="https://icongr.am/octicons/chevron-right.svg?size=28&color=ffffff"
                  alt="right"
                />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default History;
