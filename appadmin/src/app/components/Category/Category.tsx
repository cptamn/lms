"use client";

import React, { FormEventHandler, useState } from "react";
import { ICategory } from "../../../../types/category";
import { BiEdit, BiTrash } from "react-icons/bi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteCat, editCat } from "../../../../api";

interface CategoryProps {
  dataCat: ICategory;
}

const Category: React.FC<CategoryProps> = ({ dataCat }) => {
  const router = useRouter();
  const [openModulEdit, setOpenModulEdit] = useState<boolean>(false);
  const [openModulDelete, setOpenModulDelete] = useState<boolean>(false);
  const [dataToEdit, setDataToEdit] = useState<string>(dataCat.title);

  const handleSubmitEditCat: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editCat({
      id: dataCat.id,
      title: dataToEdit,
    });
    setDataToEdit("");
    setOpenModulEdit(false);
    router.refresh();
  };

  const handleDeleteCat = async (id: string) => {
    await deleteCat(id);
    setOpenModulDelete(false);
    router.refresh();
  };

  return (
    <tr key={dataCat.id}>
      <td className="w-full">{dataCat.title}</td>
      <td className="flex gap-5">
        <BiEdit
          onClick={() => setOpenModulEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModulEdit} setModalOpen={setOpenModulEdit}>
          <form onSubmit={handleSubmitEditCat}>
            <h3 className="font-bold text-lg">Ангилал засах</h3>
            <div className="modal-action">
              <input
                value={dataToEdit}
                onChange={(e) => setDataToEdit(e.target.value)}
                type="text"
                placeholder="Мэдээний ангиллаа оруулна уу"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                засах
              </button>
            </div>
          </form>
        </Modal>
        <BiTrash
          onClick={() => setOpenModulDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModulDelete} setModalOpen={setOpenModulDelete}>
          <h3 className="text-lg">Устгахдаа итгэлтэй байна уу?</h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteCat(dataCat.id)} className="btn">
              Тийм
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Category;
