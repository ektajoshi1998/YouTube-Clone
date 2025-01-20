import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../Utlis/MenuSlice";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <div className="px-5 flex">
        <div className="flex ">
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div>
        <button className="p-2 m-2 bg-red-700 text-white rounded-lg">Subscribe</button>
        <button className="p-2 ml-2 bg-gray-900 text-white rounded-l-lg border border-r-gray-500 justify-end">👍</button>
        <button className="p-2 mr-2 bg-gray-900 text-white rounded-r-lg border border-l-gray-500">👎</button>
        <button className="p-2 m-2 px-4 bg-gray-900 text-white rounded-lg">Share ➦</button>

      </div>
      <CommentSection />
    </div>
  );
};

export default WatchPage;
