import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utlis/MenuSlice";
import { YOUTUBE_SEARCH_API } from "../Utlis/Constants";
import { cacheResults } from "../Utlis/SearchSlice";

const Header = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        setSearchSuggestion(searchCache[searchValue]);
      } else {
        getsearchresult();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchValue]);

  const getsearchresult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const json = await data.json();
    setSearchSuggestion(json[1]);

    dispatch(cacheResults({ 
      [searchValue] :json[1]
    }))
  };

  const toggleHandle = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <div className="grid grid-flow-col m-2 p-2 ">
      <div className=" flex col-span-1">
        <img
          onClick={toggleHandle}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <a href="/">
          <img
            className="h-8 cursor-pointer"
            alt="icon"
            src="https://www.shutterstock.com/image-vector/vector-image-youtube-icon-social-260nw-2330417675.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 ">
        <div>
          <input
            className="px-5 w-[37rem] border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder=" Search "
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {searchSuggestion.map((e) => (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100">⌕ {e}</li>
              ))}{" "}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8 pl-20"
          alt="user-icon"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default Header;
