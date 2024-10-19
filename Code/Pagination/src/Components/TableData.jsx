import React, { useEffect } from "react";
import { useHome } from "./GlobalState";
import Pagination from "./Pagination";
const TableData = () => {
  const { data, lastPageOfPage, firstindexOfPage, loading, dispatch } =
    useHome();

  const currentData = data.slice(firstindexOfPage, lastPageOfPage);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
      <div className="w-auto max-w-4xl">
        <h1 className="text-center uppercase p-8">
          <span className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl">
            Pagination
          </span>
        </h1>
        <div className="2xl:flex 2xl:flex-col 2xl:gap-12 xl:flex xl:flex-col xl:gap-12">
          <div>
            <table className="w-auto border">
              <thead>
                <tr className="border-b 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
                  <th className="border-r p-2 2xl:w-[100px] xl:w-[100px] lg:w-[100px] ">
                    ID
                  </th>
                  <th className="border-r 2xl:w-[300px] xl:w-[300px] lg:w-[300px]">
                    Name
                  </th>
                  <th className="border-r 2xl:w-[400px] xl:w-[400px] lg:w-[400px]">
                    Email
                  </th>
                  <th className="border-r 2xl:w-[200px] xl:w-[200px] lg:w-[200px]">
                    Age
                  </th>
                  <th className="2xl:w-[250px] xl:w-[250px] lg:w-[250px]">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((datas, index) => (
                  <tr key={index}>
                    <td className="border p-2 text-center">{datas.id}</td>
                    <td className="border p-2 text-center">{datas.name}</td>
                    <td className="border p-2 text-center">{datas.email}</td>
                    <td className="border p-2 text-center">{datas.age}</td>
                    <td className="border p-2 text-center">{datas.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableData;
