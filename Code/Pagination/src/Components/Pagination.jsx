import React from "react";
import { useHome } from "./GlobalState";

const Pagination = () => {
  const { dispatch, currentPage,totalpage } = useHome();

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({ type: "CURRENT_PAGE", payload: currentPage - 1 });
    }
  };

  const handleNext = () => {
    if (currentPage < totalpage) {
      dispatch({ type: "CURRENT_PAGE", payload: currentPage + 1 });
    }
  };

  const pageNumbers = () => {
    const pages = [];

    pages.push(
      <button
        className="p-1 bg-blue-700 text-white rounded-md"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    );

    if (currentPage > 2) {
      pages.push(
        <button onClick={() => dispatch({ type: "CURRENT_PAGE", payload: 1 })}>
          1
        </button>
      );
      if (currentPage > 3) {
        pages.push(<span>...</span>);
      }
    }

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalpage, currentPage + 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => dispatch({ type: "CURRENT_PAGE", payload: i })}
          className={
            currentPage === i ? " bg-blue-700 text-white p-1.5 rounded-md" : ""
          }
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalpage - 1) {
      if (currentPage < totalpage - 2) {
        pages.push(<span>...</span>);
      }
      pages.push(
        <button
          onClick={() => dispatch({ type: "CURRENT_PAGE", payload: totalpage })}
        >
          {totalpage}
        </button>
      );
    }

    pages.push(
      <button
        className="p-1 bg-blue-700 text-white rounded-md"
        onClick={handleNext}
        disabled={currentPage === totalpage}
      >
        Next
      </button>
    );

    return pages;
  };

  return (
    <>
      <div className="flex flex-row gap-2 2xl:flex 2xl:flex-row 2xl:gap-6 xl:flex xl:flex-row xl:gap-6 md:flex md:flex-row md:gap-6 sm:flex sm:flex-row sm:gap-3  place-content-center">
        {pageNumbers()}
      </div>
    </>
  );
};

export default Pagination;
