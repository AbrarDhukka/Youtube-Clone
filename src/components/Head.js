import { useDispatch } from "react-redux";
import { menuHandler } from "../utils/headSlice";

// const Head = () => {
//   const dispatch = useDispatch();
//   const menuHandle = () => {
//     dispatch(menuHandler());
//   };
//   return (
//     <div className="flex shadow-lg">
//       <div className="w-[10%] flex items-center justify-center">
//         <button className="cursor-pointer" onClick={menuHandle}>
//           <img
//             src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
//             alt="hamburger"
//             className="h-4 ml-12 mr-4"
//           ></img>
//         </button>
//         <img
//           src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
//           alt="logo"
//           className="h-16 ml-4"
//         ></img>
//       </div>
//       <div className="w-[75%] flex justify-center items-center">
//         <input
//           type="text"
//           className="border-2 p-2 my-2 border-gray-300 rounded-l-full w-[50%]"
//           placeholder="Search"
//         ></input>
//         <img
//           src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnVMpxvmkJHTSJYC5M4KnzuTzzZV-_FJQN9QJZchDUFbUUbgDZ"
//           alt="search"
//           className="h-[44px] border-2 border-gray-300 rounded-r-full"
//         ></img>
//       </div>
//       <div className=" w-[15%] flex justify-center items-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
//           alt="profile"
//           className="h-11"
//         ></img>
//       </div>
//     </div>
//   );
// };
// export default Head;

import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/const";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  //console.log("Search suggestion - ", suggestion);
  useEffect(() => {
    const timer = setTimeout(() => getSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // const getSuggestion = async () => {
  //   try {
  //     if (searchQuery.trim() === "") {
  //       console.error("Empty search query");
  //       return;
  //     }
  //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //     console.log("Data given", data.json)
  //     const json = await data.json();
  //     console.log("API CALLED");
  //     setSuggestion(json);
  //     console.log("json data is ", json);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const getSuggestion = async () => {
    console.log("API CALLED - " + searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/xml");

    // Extract suggestions from the XML document
    const suggestionElements = doc.querySelectorAll("suggestion");
    const extractedSuggestions = Array.from(suggestionElements);

    setSuggestion(extractedSuggestions);
  };
  const dispatch = useDispatch();
  const menuHandle = () => {
    dispatch(menuHandler());
  };
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="w-1/4 sm:w-1/6 md:w-1/12 lg:w-1/12 xl:w-1/12 flex items-center justify-center">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
          alt="hamburger"
          className="h-4 ml-4 sm:ml-12 mr-2 sm:mr-4 cursor-pointer"
          onClick={menuHandle}
        />
        <img
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
          alt="logo"
          className="h-12 sm:h-16"
        />
      </div>

      <div className="w-full sm:w-2/3 md:w-3/4 lg:w-3/4 xl:w-3/4 flex justify-center items-center mt-4 sm:mt-0">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <input
            type="text"
            className="border-2 p-2 my-2 border-gray-300 rounded-l-full w-full "
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          {showSuggestion && (
            <div className="absolute bg-white  py-2 px-5 rounded-lg shadow-lg border-2 border-gray-100">
              <ul>
                {/* Map through the suggestions array and render each suggestion */}
                {suggestion.map((suggestion, index) => (
                  <div className="flex hover:bg-gray-100">
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnVMpxvmkJHTSJYC5M4KnzuTzzZV-_FJQN9QJZchDUFbUUbgDZ"
                      alt="search"
                      className="h-7"
                    />

                    <li key={index} className="">
                      {suggestion.getAttribute("data")}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnVMpxvmkJHTSJYC5M4KnzuTzzZV-_FJQN9QJZchDUFbUUbgDZ"
          alt="search"
          className="h-10 sm:h-[44px] border-2 border-gray-300 rounded-r-full"
        />
      </div>

      <div className="w-1/4 sm:w-1/6 md:w-1/12 lg:w-1/12 xl:w-1/12 flex justify-center items-center mt-4 sm:mt-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
          alt="profile"
          className="h-8 sm:h-11"
        />
      </div>
    </div>
  );
};

export default Head;
