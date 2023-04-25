import Link from "next/link";
import React from "react";

const companyData = [
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
  {
    code: "1",
    companyName: "“Монгол Такс ТМЗ” ХХК",
    ognoo: "2022.08.07",
    DirectorName: "Н.Алтанзул",
    PhoneNumber: "88106006, 70114144",
    Email: "info@mongoltax.mn",
    address:
      "БЗД 1-р хороо, 12-р хороолол, Залуучуудын өргөн чөлөө, North центр 207 тоот",
  },
];
const TmzCompany = () => {
  return (
    <div className="w-[1290px] mx-auto">
      <div className="">
        <ul className="flex flex-wrap text-sm font-medium text-center text-[#3764EB] pt-10 border-b border-gray-200 ">
          <li className="mr-2">
            <Link
              href="#"
              aria-current="page"
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-[#3764EB] dark:text-white"
            >
              Татварын итгэмжлэгдсэн хуулийн этгээд
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href="tmz-company-2"
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-[#3764EB] dark:hover:text-white"
            >
              Хүчингүй хуулийн этгээд
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="text-2xl text-center py-6">
        "Татварын мэргэшсэн зөвлөхийн үйлчилгээ" эрхлэх тусгай зөвшөөрөл нь
        хүчинтэй, үйл ажиллагаа эрхэлж буй хуулийн этгээдүүдийн жагсаалт
      </h1>
      <p className="text-right">
        /2022 оны 3 дугаар сарын 21-ний өдрийн байдлаар/
      </p>
      <div className="flex items-center justify-end">
        <p className="text-xl pr-4">Хайх:</p>
        <input
          type="text"
          placeholder="Хайх"
          className="flex justify-end content-end border-2 rounded-xl border-blue-600 w-60 h-5 py-5 px-2 my-4"
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Д/д
              </th>
              <th scope="col" className="px-6 py-3">
                Байгууллагын нэр
              </th>
              <th scope="col" className="px-6 py-3">
                Тусгай зөвшөөрлийн хүчинтэй хугацаа
              </th>
              <th scope="col" className="px-6 py-3">
                Захирлын нэр
              </th>
              <th scope="col" className="px-6 py-3">
                Утасны дугаар
              </th>
              <th scope="col" className="px-6 py-3">
                Цахим хаяг
              </th>
              <th scope="col" className="px-6 py-3">
                Байгууллагын хаяг
              </th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((dataCo, index) => {
              return (
                <>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <td className="px-6 py-4">{dataCo.code}</td>
                    <td className="px-6 py-4">{dataCo.companyName}</td>
                    <td className="px-6 py-4">{dataCo.ognoo}</td>
                    <td className="px-6 py-4">{dataCo.DirectorName}</td>
                    <td className="px-6 py-4">{dataCo.PhoneNumber}</td>
                    <td className="px-6 py-4">{dataCo.Email}</td>
                    <td className="px-6 py-4">{dataCo.address}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TmzCompany;
