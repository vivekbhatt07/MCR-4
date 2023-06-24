import Header from "../../Components/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="page max-w-[1280px] bg-blue-400 mx-auto min-h-screen">
      <div className="top p-4 bg-blue-600 flex items-center text-blue-50">
        MyForum
      </div>
      <Header className="bottom_left bg-blue-200" />
      <div className="bottom_center"></div>
      <div className="bottom_right"></div>
    </div>
  );
};

export default Home;
