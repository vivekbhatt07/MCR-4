import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CommentCard = (props) => {
  console.log(props);
  const {
    commentId,
    username,
    picUrl,
    likes,
    comment,
    createdAt,
    postUserName,
  } = props;
  return (
    <article className="flex gap-8 px-4 py-2 bg-[#fff] rounded-xl">
      <div className="w-10 h-10 rounded-full">
        <img src={picUrl} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <p>
              <span>{username}</span>
            </p>
            <FiberManualRecordIcon className="w-2 h-2" />
            <span>{createdAt}</span>
          </div>
          <p>
            Replying to <a className="text-blue-400">{postUserName}</a>
          </p>
          <p className="font-bold">{comment}</p>
        </div>
        <div className="flex justify-between pt-2 border-t">
          <button className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95">
            <FavoriteBorderIcon />
          </button>
          <button className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95">
            <CommentIcon />
          </button>
          <button className="rounded-full p-2 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95">
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;
