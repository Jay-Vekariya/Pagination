import React, { createContext, useContext, useEffect, useReducer } from "react";

const HomeContext = createContext();

const initialState = {
  data: [],
  currentPage: 1,
  dataperpagePage: 6,
  lastPageOfPage: "",
  firstindexOfPage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "DATA_PER_PAGE":
      return { ...state, dataperpagePage: action.payload };
    case "LAST_INDEX_OFPAGE":
      return { ...state, lastindexOfPage: currentPage * dataperpagePage };
    case "FIRST_INDEX_OFPAGE":
      return { ...state, firstindexOfPage: lastindexOfPage - dataperpagePage };
    default:
      return state;
  }
};

const Home = ({ children }) => {
  const [{ data }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://6704c252ab8a8f892734b80d.mockapi.io/api/v1/Users")
      .then((response) => response.json())
      .then((jsondata) => {
        dispatch({ type: "SET_DATA", payload: jsondata });
      });
  });

  return (
    <>
      <HomeContext.Provider
        value={{
          data,
          dispatch,
        }}
      >
        {children}
      </HomeContext.Provider>
    </>
  );
};

export const useHome = () => {
  return useContext(HomeContext);
};

export default Home;
