import React, { useState } from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "John",
      comment: "Nice video",
      replies: [
        {
          name: "Abrar",
          comment: "Thank you",
          replies: [
            {
              name: "John",
              comment: "No problem",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "Arun",
      comment:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Akil",
      comment: "Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      name: "Amir",
      comment: "Nice video",
    },
  ];

  // const Comment = ({ data }) => {
  //   const [viewReply, setViewReply] = useState(false);

  //   return (
  //     <div>
  //       {data &&
  //         data.map((comment, index) => (
  //           <div key={index} className="flex m-3 bg-slate-50">
  //             <img
  //               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
  //               alt="profile"
  //               className="h-7"
  //             ></img>
  //             <div className="mx-2">
  //               <div className="flex">
  //                 <p className="text-sm">{comment.name}</p>
  //                 <p className="text-sm font-thin mx-2">3 minutes ago</p>
  //               </div>
  //               <p>{comment.comment}</p>
  //               <span>👍🏼</span>
  //               <span>👎🏻</span>
  //               <span className="text-xs">Reply</span>
  //               {comment.replies?.length > 0 && (
  //                 <button
  //                   className="text-blue-600 mx-2"
  //                   onClick={() => setViewReply(!viewReply)}
  //                 >
  //                   {viewReply ? "Hide replies" : "View replies"}
  //                 </button>
  //               )}
  //               {viewReply && comment.replies?.length > 0 && (
  //                 <div className="ml-6">
  //                   <Comment data={comment.replies} />
  //                 </div>
  //               )}
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   );
  // };
  // return (

  //   <div>
  //     <h1 className="font-bold mt-5 text-2xl">Comments</h1>
  //     <hr className="my-3 border-1 border-black"></hr>
  //     <Comment data={commentsData}></Comment>
  //   </div>
  // );

  const Comment = ({ data }) => {
    const [viewReply, setViewReply] = useState(false);

    return (
      <div>
        {data &&
          data.map((comment, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row m-3 bg-slate-50 p-4"
            >
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
                  alt="profile"
                  className="h-7 mb-4 md:mr-4"
                />
              </span>
              <div>
                <div className="flex flex-col md:flex-row">
                  <p className="text-sm">{comment.name}</p>
                  <p className="text-sm font-thin mx-0 md:mx-2 mb-2 md:mb-0">
                    3 minutes ago
                  </p>
                </div>
                <p className="text-sm md:text-base">{comment.comment}</p>
                <div className="flex mt-2">
                  <span className="mr-4">👍🏼</span>
                  <span className="mr-4">👎🏻</span>
                  <span className="text-xs">Reply</span>
                  {comment.replies?.length > 0 && (
                    <button
                      className="text-blue-600 mx-2"
                      onClick={() => setViewReply(!viewReply)}
                    >
                      {viewReply ? "Hide replies" : "View replies"}
                    </button>
                  )}
                </div>
                {viewReply && comment.replies?.length > 0 && (
                  <div className="ml-6">
                    <Comment data={comment.replies} />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="font-bold mt-5 text-2xl">Comments</h1>
      <hr className="my-3 border-1 border-black"></hr>
      <Comment data={commentsData}></Comment>
    </div>
  );
};

export default CommentsContainer
