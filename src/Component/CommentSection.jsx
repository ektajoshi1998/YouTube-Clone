import React from "react";

const commentData = [
  {
    name: "Ekta Joshi",
    text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
    replies: [],
  },
  {
    name: "Ekta Joshi",
    text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
    replies: [
      {
        name: "Ekta Joshi",
        text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
        replies: [
          {
            name: "Ekta Joshi",
            text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
            replies: [{
              name: "Ekta Joshi",
              text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
              replies: [{
                name: "Ekta Joshi",
                text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
                replies: [],
              },],
            },],
          },
        ],
      },
    ],
  },
  {
    name: "Ekta Joshi",
    text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
    replies: [],
  },
  {
    name: "Ekta Joshi",
    text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
    replies: [
      {
        name: "Ekta Joshi",
        text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
        replies: [],
      },
    ],
  },
  {
    name: "Ekta Joshi",
    text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
    replies: [
      {
        name: "Ekta Joshi",
        text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
        replies: [{
          name: "Ekta Joshi",
          text: "lkj ldjfhg dhdfbeuigf duiwhfuiwh sjbfhwyfwi rfheiu",
          replies: [],
        },],
      },
    ],
  },
]

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
     <div className="flex  shadow-sm rounded-md bg-gray-100 my-3">
      <img
      className="w-12 h-10"
        alt="user"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
      />
      <div className="px-3">
        <p className="text-sm font-bold">{name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};



const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comments data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };
const CommentSection = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className=" text-lg font-bold">Comments:</h1>
      <CommentsList comments={commentData}/>
    </div>
  );
};

export default CommentSection;
