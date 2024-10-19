import React, { createContext, useContext, useEffect, useReducer } from "react";

const HomeContext = createContext();

const initialState = {
  data: [],
  currentPage: 1,
  dataperpagePage: 6,
  lastPageOfPage: 0,
  firstindexOfPage: 0,
  totalpage: 0,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        totalpage: Math.ceil(action.payload.length / state.dataperpagePage),
        lastPageOfPage: state.currentPage * state.dataperpagePage,
        firstindexOfPage: state.lastPageOfPage - state.dataperpagePage,
      };
    case "CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
        lastPageOfPage: action.payload * state.dataperpagePage,
        firstindexOfPage:
          action.payload * state.dataperpagePage - state.dataperpagePage,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

const GlobalState = ({ children }) => {
  const [
    {
      data,
      dataperpagePage,
      currentPage,
      totalpage,
      lastPageOfPage,
      firstindexOfPage,
      loading,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://6704c252ab8a8f892734b80d.mockapi.io/api/v1/Users")
      .then((response) => response.json())
      .then((jsondata) => {
        dispatch({ type: "SET_DATA", payload: jsondata });
      })
      .catch((error) =>
        console.error(
          "Error occurred while loading the Images from API \n OR \n Please, Check your Internet & Try Again..",
          error
        )
      );
  });

  return (
    <>
      <HomeContext.Provider
        value={{
          data,
          dispatch,
          dataperpagePage,
          currentPage,
          totalpage,
          lastPageOfPage,
          firstindexOfPage,
          loading,
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

export default GlobalState;
