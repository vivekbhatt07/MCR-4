import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useData } from "../../context/DataContext";
import { Chip } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = props;

  const { dispatch } = useData();
  return (
    <article className="flex gap-8 px-4 py-2 bg-[#fff] rounded-xl">
      <div className="flex flex-col gap-3 items-center">
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT_VOTE", payload: postId });
          }}
          className="rounded-full p-1 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95"
        >
          <ArrowDropUpIcon style={{ fontSize: "24px" }} />
        </button>
        <span>{upvotes - downvotes}</span>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT_VOTE", payload: postId });
          }}
          className="rounded-full p-1 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95"
        >
          <ArrowDropDownIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {/* 1st  */}
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full">
            <img src={picUrl} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2 items-center">
            <p>
              Posted by <span className="text-blue-400">{username}</span>
            </p>
            <span>|</span>
            <span className="text-xs text-[#aaa]">{createdAt}</span>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-semibold">{post}</span>
          <div className="flex gap-2">
            {tags.map((currentTag, index) => {
              return <Chip label={currentTag} key={index} />;
            })}
          </div>
          <p className="text-sm opacity-80">{postDescription}</p>
        </div>
        {/* 3rd */}
        <div className="flex justify-between pt-2 border-t">
          <Link
            to={`/postDetail/${postId}`}
            className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95"
          >
            <CommentIcon />
          </Link>
          <button className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95">
            <ShareIcon />
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_BOOKMARK", payload: postId });
            }}
            className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95"
          >
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
