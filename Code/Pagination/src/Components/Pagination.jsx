import React from "react";
import { useHome } from "./Home";

const Pagination = () => {
  const { data } = useHome();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
        <div className="w-full max-w-4xl">
          <h1 className="text-center uppercase p-8">
            <span className="text-4xl">Pagination</span>
          </h1>
          <div>
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border-r w-[50px] p-2">ID</th>
                  <th className="border-r w-[200px]">Name</th>
                  <th className="border-r w-[300px]">Email</th>
                  <th className="border-r w-[100px]">Age</th>
                  <th className="w-[150px]">Country</th>
                </tr>
              </thead>
              <tbody >
                {data.map((datas, index) => (
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
        </div>
      </div>
    </>
  );
};

export default Pagination;
