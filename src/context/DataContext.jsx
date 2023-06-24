import { createContext, useContext, useReducer } from "react";
import { forumData } from "../data/Data";

const DataContext = createContext();

const InitialState = {
  formList: [...forumData.posts],
  sortType: "latest",
};

const DataReducer = (state, action) => {
  switch (action.type) {
    case "SORT": {
      return { ...state, sortType: action.payload };
    }
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

  // console.log(state);

  let originalList = state.formList;

  if (state.sortType === "latest") {
    originalList = [...originalList].sort((a, b) => {
      let dateA = new Date(a.createdAt);
      let dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  } else if (state.sortType === "vote") {
    originalList = [...originalList].sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
  }

  return (
    <DataContext.Provider value={{ state, dispatch, originalList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
