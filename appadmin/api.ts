import { ICategory } from "./types/category";

const baseUrl = "http://localhost:8080";

export const getAllCategory = async (): Promise<ICategory[]> => {
  const res = await fetch(`${baseUrl}/category`, { cache: "no-store" });
  const catD = await res.json();
  return catD;
};

export const addCat = async (cat: ICategory): Promise<ICategory> => {
  const res = await fetch(`${baseUrl}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  });
  const newCD = await res.json();
  return newCD;
};

export const editCat = async (cat: ICategory): Promise<ICategory> => {
  const res = await fetch(`${baseUrl}/category/${cat._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  });
  const editCD = await res.json();
  return editCD;
};

export const deleteCat = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/category/${id}`, {
    method: "DELETE",
  });
};
