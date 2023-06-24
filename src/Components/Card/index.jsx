import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
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
  return (
    <article className="flex gap-8 px-4 py-2 bg-[#fff] rounded-xl">
      <div className="flex flex-col gap-3">
        <button>
          <ArrowDropUpIcon />
        </button>
        <span>{upvotes - downvotes}</span>
        <button>
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
              Posted by <a>{username}</a>
            </p>
            <FiberManualRecordIcon className="w-2 h-2" />
            <span>{createdAt}</span>
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
          <p className="text-sm">{postDescription}</p>
        </div>
        {/* 3rd */}
        <div className="flex justify-between pt-2 border-t">
          <Link to={`/postDetail/${postId}`}>
            <CommentIcon />
          </Link>
          <button>
            <ShareIcon />
          </button>
          <button>
            <BookmarkBorderIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
