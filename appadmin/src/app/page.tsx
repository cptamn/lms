"use client";

import { useEffect, useState } from "react";
import { getAllCategory } from "../../api";
import AddCategory from "./components/Category/AddCategory";
import CategoryList from "./components/Category/CategoryList";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default async function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
    }
  }, []);

  const dataCat = await getAllCategory();
  console.log(dataCat);

  return (
    <div>
      <div className="flex">
        <div className="bg-white-400 h-[500px]">
          <ul>
            <li className="cursor-pointer py-4 px-8 bg-slate-400 text-blue-900 rounded-lg hover:bg-blue-900 hover:text-white">
              Мэдээний ангилал
            </li>
            <li>Мэдээ</li>
          </ul>
        </div>
        <div className="">
          <div className="text-center my-5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Мэдээний ангилал</h1>
            <AddCategory />
          </div>
          <CategoryList dataCat={dataCat} />
        </div>
        <div>{loaded && <ReactQuill theme="snow" />}</div>
      </div>
    </div>
  );
}
