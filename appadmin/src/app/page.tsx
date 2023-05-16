import { getAllCategory } from "../../api";
import AddCategory from "./components/Category/AddCategory";
import CategoryList from "./components/Category/CategoryList";
// import Post from "./components/News/Post";

export default async function Home() {
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
          {/* <Post /> */}
        </div>
      </div>
    </div>
  );
}
