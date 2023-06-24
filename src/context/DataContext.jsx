import { createContext, useContext, useReducer } from "react";
import { forumData } from "../data/Data";

const DataContext = createContext();

const InitialState = {
  formList: [],
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReduce, InitialState);
  return (
    <DataContext.Provider value={{ state, dispatch, forumData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
