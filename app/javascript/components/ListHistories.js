import moment from "moment";
import React, { useEffect, useState } from "react";
import { listHistories } from "../api/index";
import History from "./History";

const ListHistories = () => {
  const [list, setList] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [index, setIndex] = useState(list.length);
  const [slide, setSlide] = useState({ data: [], left: 0, right: 1 });
  const [chooseHistory, setChooseHistory] = useState({
    modal: false,
    history: {},
  });


  const addHistory = (item) => {
    setChooseHistory({ history: item, modal: true });
    document.body.style.overflow = "hidden";

    const newImages = item.image.filter((e) => e !== "" && e !== null);
    const newVideos = item.video.filter((e) => e !== "" && e !== null);

    setSlide({
      ...slide,
      data: [...newImages, ...newVideos],
    });
  };

  useEffect(() => {
    listHistories().then((data) => {
      setList(data);
    });
  }, []);

  return (
    <>
      <div className="listHistories shadow-lg relative">
        {translate !== 0 && (
          <button
            className="rounded-full cursor-pointer bg-opacity-30 bg-black w-10 ht-60 p-1 text-4xl absolute zi-10"
            onClick={() => {
              setTranslate(translate + 600);
              setIndex(index + 7);
            }}
          >
            <img src="https://icongr.am/feather/chevron-left.svg?size=28&color=ffffff" />
          </button>
        )}

        {list.map((item, index) => (
          <div
            key={`${item.key}-${index}`}
            style={{ transform: `translateX(${translate}px)` }}
            onClick={() => addHistory(item)}
          >
            <figure className="wt-60">
              {item.user.image ? (
                <img
                  src={item.user.image}
                  alt={item.key}
                  className="rounded-full wt-60 ht-60 m-auto cursor-pointer border-instagram"
                />
              ) : (
                <p className="rounded-full wt-60 ht-60 m-auto cursor-pointer border-instagram flex items-center justify-center text-4xl text-white">
                  {item.user.name.slice(0, 1)}
                </p>
              )}
              <figcaption className="text-sm text-center">
                {item.user.name}
              </figcaption>
            </figure>
          </div>
        ))}

        {index >= 7 && (
          <button
            className="rounded-full cursor-pointer bg-opacity-30 bg-black w-10 ht-60 p-1 text-4xl absolute right-0"
            onClick={() => {
              setTranslate(translate - 600);
              setIndex(index - 7);
            }}
          >
            <img
              src="https://icongr.am/octicons/chevron-right.svg?size=28&color=ffffff"
              alt="right"
            />
          </button>
        )}
      </div>

      <History chooseHistory={chooseHistory} slide={slide} setSlide={setSlide} setChooseHistory={setChooseHistory} />
    </>
  );
};

export default ListHistories;
