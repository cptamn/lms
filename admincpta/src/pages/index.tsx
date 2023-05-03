import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import {
  RiAddBoxLine,
  RiDeleteBin6Line,
  RiEditBoxLine,
  RiSave2Line,
} from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ cat }) {
  const [categories, setCategories] = useState(cat);
  const [catname, setCatname] = useState("");
  const router = useRouter();
  const editRef = useRef(true);
  const [isEdit, setIsEdit] = useState(false);

  const refreshData = () => {
    router.replace(router.asPath);
  };
  useEffect(() => {
    refreshData();
  }, [categories]);
  const catDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8080/category/${id}`);
    const data = await res.data;
    setCategories(categories.filter((category) => category._id !== id));
    console.log("data", data);
  };

  const catAdd = async () => {
    const res = await axios.post(`http://localhost:8080/category/`, {
      name: catname,
    });
    const data = await res.data;
    console.log("nemehed buttsan data:", data);
    const newData = [...categories, data];
    console.log("new data", newData);
    setCategories(newData);
  };

  const canEdit = async (index) => {
    setIsEdit(!isEdit);
    editRef.current.readOnly = false;
    console.log(categories[index].name);
    console.log(categories[index]._id);
    const res = await axios.patch(
      `http://localhost:8080/category/${categories[index]._id}`,
      { ...categories[index] }
    );
  };

  return (
    <div>
      <div className="w-[700px]">
        <h1>Мэдээний ангилал</h1>
        <input
          type="text"
          onChange={(e) => setCatname(e.target.value)}
          name="catName"
          placeholder="angilal nemeh"
          className="py-4 px-6 border rounded-md my-2"
        />
        <button
          className="bg-blue-800 text-white rounded-md ml-4 py-4 px-6"
          onClick={catAdd}
        >
          add
        </button>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Д/д
              </th>
              <th scope="col" className="px-6 py-3">
                Ангилал
              </th>
              <th scope="col" className="px-6 py-3">
                Засах
              </th>
              <th scope="col" className="px-6 py-3">
                Устгах
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((catname: object, index: number) => {
              return (
                <>
                  <tr
                    className="bg-white border-b  hover:bg-gray-50 "
                    key={index}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        name="catEdit"
                        className="focus:outline-none"
                        value={catname.name}
                        onChange={(e) => {
                          categories[index].name = e.target.value;
                          setCategories([...categories]);
                        }}
                        ref={editRef}
                        readOnly
                      />
                    </td>
                    <td className="px-6 py-4 cursor-pointer text-2xl ">
                      <button onClick={() => canEdit(index)}>
                        {!isEdit ? <RiEditBoxLine /> : <RiSave2Line />}
                      </button>
                    </td>
                    <td className="px-6 py-4 cursor-pointer text-2xl ">
                      <button onClick={() => catDelete(catname._id)}>
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`http://localhost:8080/category`);

  const cat = await res.data;
  console.log(cat);

  // Pass data to the page via props
  return { props: { cat } };
}

// Home.getInitialProps = async (context) => {
//   const res = await axios.get(`http://localhost:8080/category`);

//   const cat = await res.data;
//   console.log(cat);

//   // Pass data to the page via props
//   return { cat };
// };
