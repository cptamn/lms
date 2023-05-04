import { ICategory } from "../../../../types/category";
import Category from "./Category";

interface CatListProps {
  dataCat: ICategory[];
}

const CategoryList: React.FC<CatListProps> = ({ dataCat }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Мэдээний ангилал</th>
            <th>Үйлдэл</th>
          </tr>
        </thead>
        <tbody>
          {dataCat.map((dataCats) => (
            <Category key={dataCats._id} dataCat={dataCats} />
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
