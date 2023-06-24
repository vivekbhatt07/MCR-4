import { createContext, useContext, useReducer } from "react";
import { forumData } from "../data/Data";

const DataContext = createContext();

const InitialState = {
  formList: [...forumData.posts],
};

const DataReducer = (state, action) => {
  switch (action.type) {
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);

  console.log(state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
