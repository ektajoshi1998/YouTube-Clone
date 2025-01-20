import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utlis/ChatSlice";
import { generateRandomName, generateRandomString } from "../Utlis/Hidden";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[600px] w-full p-2 ml-2 bg-slate-100 rounded-lg border border-black overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:'Ekta Joshi',
            message:liveMessage
        }));
        setLiveMessage('');
        }}
      >
        <div className="p-2 mx-2 rounded-lg border border-black w-full pl-2">
          <input
            className="w-96 px-6"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="bg-blue-200 px-2 mx-2">Send➤</button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
