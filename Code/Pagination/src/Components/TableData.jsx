import React, { useEffect } from "react";
import { useHome } from "./GlobalState";
import Pagination from "./Pagination";
const TableData = () => {
  const { data, lastPageOfPage, firstindexOfPage } =
    useHome();

  const currentData = data.slice(firstindexOfPage, lastPageOfPage);

  return (
    <div className="p-4 flex justify-center items-center h-screen bg-slate-900 text-white">
      <div className="w-auto">
        <h1 className="text-center uppercase pb-4">
          <span className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl">
            Pagination
          </span>
        </h1>
        <div className="2xl:flex 2xl:flex-col 2xl:gap-12 xl:flex xl:flex-col xl:gap-12 lg:flex lg:flex-col lg:gap-12 md:flex md:flex-col md:gap-12 sm:flex sm:flex-col sm:gap-12 flex flex-col gap-12">
          <div>
            <table className="w-auto border">
              <thead>
                <tr className="border-b 2xl:text-3xl xl:text-2xl lg:text-3xl md:text-3xl sm:text-3xl text-[10px]">
                  <th className="border-r p-2 2xl:w-[100px] xl:w-[100px] lg:w-[100px] md:w-[100px] sm:w-[100px] w-[50px] ">
                    ID
                  </th>
                  <th className="border-r 2xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[300px] sm:w-[200px] w-[50px] ">
                    Name
                  </th>
                  <th className="border-r 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[300px] w-[50px] ">
                    Email
                  </th>
                  <th className="border-r 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] w-[50px] ">
                    Age
                  </th>
                  <th className="2xl:w-[250px] xl:w-[250px] lg:w-[250px] md:w-[250px] sm:w-[250px] w-[50px] ">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((datas, index) => (
                  <tr
                    key={index}
                    className=" text-[10px] 2xl:text-[30px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px]  min-h-[30px]"
                  >
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
