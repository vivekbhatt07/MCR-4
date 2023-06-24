import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { useData } from "../../context/DataContext";
import { forumData } from "../../data/Data";
import "./Home.css";

const Home = () => {
  const { state } = useData();
  return (
    <div className="page max-w-[1280px] bg-blue-400 mx-auto min-h-screen">
      <div className="top p-4 bg-blue-600 flex items-center text-blue-50">
        MyForum
      </div>
      <Header className="bottom_left bg-blue-200" />
      <div className="bottom_center">
        {forumData.posts.map((currentPost) => {
          return <Card key={currentPost.postId} {...currentPost} />;
        })}
      </div>
      <div className="bottom_right"></div>
    </div>
  );
};

export default Home;
