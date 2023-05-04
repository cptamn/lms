import { ICategory } from "./types/category";

const baseUrl = 'http://localhost:3002';

export const getAllCategory = async (): Promise<ICategory[]> =>{
    const res=await fetch(`${baseUrl}/catData`,{cache:'no-store'});
    const catD = await res.json();
    return catD;
}

export const addCat = async(cat:ICategory): Promise<ICategory>=>{
    const res = await fetch(`${baseUrl}/catData`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(cat)
    })
    const newCD = await res.json();
    return newCD;
}

export const editCat = async(cat:ICategory): Promise<ICategory>=>{
    const res = await fetch(`${baseUrl}/catData/${cat.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(cat)
    })
    const editCD = await res.json();
    return editCD;
}

export const deleteCat = async(id:string): Promise<void>=>{
    await fetch(`${baseUrl}/catData/${id}`,{
        method:'DELETE',
    })
}