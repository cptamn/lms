import React from "react";

const membersCpta = () => {
  return (
    <div className="w-[1299px] h-[250px] mx-auto">
      <div className="flex">
        <div>
          <div className="pt-4">
            <p>Овог</p>
            <input
              type="text"
              placeholder="Овог бичнэ үү"
              className="border-2 rounded-lg px-2 py-2"
            />
          </div>
          <div className="pt-4">
            <p>Нэр</p>
            <input
              type="text"
              placeholder="Нэр бичнэ үү"
              className="border-2 rounded-lg px-2 py-2"
            />
          </div>
          <button className="bg-[#3764EB] py-2 px-10 rounded-lg text-white hover:text-[#3764EB] hover:bg-white hover:border-blue-500 border-2 mt-4">
            Хайх
          </button>
          <p className="select-none">
            * тэмдэглэгээтэй талбарыг заавал бөглөх шаарлдлагатай
          </p>
        </div>
        <div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Овог
                </th>
                <th scope="col" className="px-6 py-3">
                  Нэр
                </th>
                <th scope="col" className="px-6 py-3">
                  ТМЗ-ийн дугаар
                </th>
                <th scope="col" className="px-6 py-3">
                  Хүчинтэй огноо
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  hover:bg-gray-50 ">
                <td className="px-6 py-4">Галаа</td>
                <td className="px-6 py-4">Хишигзул</td>
                <td className="px-6 py-4">10-1010</td>
                <td className="px-6 py-4">20280425</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default membersCpta;
