import { useState } from "react";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import { useData } from "../../context/DataContext";
import { forumData } from "../../data/Data";
import "./Home.css";

const Home = () => {
  const { state, dispatch, originalList } = useData();

  const [sortValue, setSortValue] = useState("latest");

  const handleSort = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <div className="page max-w-[1280px] bg-blue-400 mx-auto min-h-screen">
      <div className="top p-4 bg-blue-600 flex items-center text-blue-50">
        MyForum
      </div>
      <Header className="bottom_left bg-blue-200" />
      <div className="bottom_center flex flex-col gap-9 px-4 py-2">
        <div className="flex gap-4 bg-blue-950 px-3 py-2 text-blue-50 rounded-lg justify-center">
          <span>
            {sortValue == "latest" ? "LATEST POSTS" : "MOST UPVOTED POSTS"}
          </span>
        </div>
        {originalList.map((currentPost) => {
          return <Card key={currentPost.postId} {...currentPost} />;
        })}
      </div>
      <div className="bottom_right py-2 px-4 bg-blue-400">
        <div className="flex flex-col gap-3">
          <span className="flex bg-blue-950 px-3 py-2 text-blue-50 rounded-lg justify-center">
            SORT BY
          </span>
          <select
            className="p-2 rounded-md"
            name="sortBySelect"
            onChange={(event) => {
              handleSort(event);
              dispatch({ type: "SORT", payload: event.target.value });
            }}
            value={sortValue}
          >
            <option value="latest">Latest Posts</option>
            <option value="vote">Most Upvoted</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
