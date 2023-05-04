"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addCat } from "../../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddCategory = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newCatgory, setNewCategory] = useState<string>("");

  const handleSubmitNewCat: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addCat({
      id: uuidv4(),
      title: newCatgory,
    });
    setNewCategory("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Ангилал нэмэх
        <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewCat}>
          <h3 className="font-bold text-lg">Ангилал нэмэх</h3>
          <div className="modal-action">
            <input
              value={newCatgory}
              onChange={(e) => setNewCategory(e.target.value)}
              type="text"
              placeholder="Мэдээний ангиллаа оруулна уу"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Нэмэх
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCategory;
