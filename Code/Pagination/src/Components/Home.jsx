import React, { createContext, useContext, useEffect, useReducer } from "react";

const HomeContext = createContext();

const initialState = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
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
