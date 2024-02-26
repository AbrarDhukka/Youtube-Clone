import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Abrar",
      comment: "Nice video",
      replies: [
        {
          name: "john",
          comment: "Nice video",
          replies: [
            {
                name: "Alex",
                comment: "Nice video",
                replies: [],
              },
          ],
        },
      ],
    },
    {
      name: "Abrar",
      comment: "Nice video",
    },
    {
      name: "Abrar",
      comment: "Nice video",
    },
    {
      name: "Abrar",
      comment: "Nice video",
    },
    {
      name: "Abrar",
      comment: "Nice video",
    },
  ];

  return (
    <div>
      <h1 className="font-bold mt-5 text-2xl">Comments</h1>
      <div className="flex m-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1baO4t0RgM8tpHYBW_Ue7aiZUOhNoNP5Q&usqp=CAU"
          alt="profile"
          className="h-7"
        ></img>
        <div className="mx-2">
          <p>Name</p>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
