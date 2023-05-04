import { getAllCategory } from "../../api";
import AddCategory from "./components/Category/AddCategory";
import CategoryList from "./components/Category/CategoryList";

export default async function Home() {
  const dataCat = await getAllCategory();
  console.log(dataCat);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Мэдээний ангилал</h1>
        <AddCategory />
      </div>
      <CategoryList dataCat={dataCat} />
    </main>
  );
}
