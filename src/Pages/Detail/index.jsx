import { Link, useParams } from "react-router-dom";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { useData } from "../../context/DataContext";
import "./Detail.css";
import CommentCard from "../../Components/CommentCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Detail = () => {
  const { postID } = useParams();
  const { state } = useData();

  const getDetail = state.formList.find((current) => {
    return current.postId == postID;
  });

  return (
    <div className="page max-w-[1280px] bg-blue-400 mx-auto min-h-screen">
      <div className="top p-4 bg-blue-600 flex items-center text-blue-50">
        MyForum
      </div>
      <Header className="bottom_left bg-blue-200" />
      <div className="bottom_center flex flex-col gap-9 px-4 py-2">
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="rounded-full p-1 hover:bg-blue-950 hover:opacity-60 transition-all duration-200 hover:text-blue-50 active:scale-95"
          >
            <ArrowBackIcon />
          </Link>
          <span>POST</span>
        </div>
        <Card key={getDetail.postId} {...getDetail} />
        <div className="flex flex-col gap-3">
          {getDetail.comments.length !== 0 && (
            <div className="bg-[#fff] px-4 py-3 rounded-md text-center">
              {getDetail.comments.length} Comment
            </div>
          )}
          {getDetail.comments.length !== 0 ? (
            getDetail.comments.map((currentComment) => {
              return (
                <CommentCard
                  key={currentComment.commentId}
                  {...currentComment}
                  postUserName={getDetail.name}
                />
              );
            })
          ) : (
            <div className="bg-[#fff] px-4 py-3 rounded-md text-center">
              No Comments
            </div>
          )}
        </div>
      </div>
      <div className="bottom_right bg-[#ddd]"></div>
    </div>
  );
};

export default Detail;
