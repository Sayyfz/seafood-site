import axios from 'axios';

// const domain = 'https://plucky-deciduous-spruce.glitch.me/';
const domain = 'http://localhost:5000/';

export const getAllItems = async () => {
   const res = await axios.get(`${domain}api/menu/`);
   if (!res) return { err: 'Error requesting data' };
   return res;
};

export const createNewCategory = async (data) => {
    const res = axios.post(`${domain}api/menu/`, data);
    if (!res) return { err: 'Error requesting data' };
   return res;
};

export const createCategoryItem = async (id, data) => {
    const res = axios.post(`${domain}api/menu/item/${id}`, data);
    if (!res) return { err: 'Error requesting data' };
   return res;
};


export const deleteItemById = async (id) => {
    const res = axios.delete(`${domain}api/menu/item/${id}`);
    if (!res) return { err: 'Error requesting data' };
    return res;
};

export const deleteCategoryById = async (id) => {
    const res = axios.delete(`${domain}api/menu/${id}`);
    if (!res) return { err: 'Error requesting data' };
    return res;
};

export const editItemById = async (id, item) => {
    const res = axios.post(`${domain}api/menu/edit/item${id}`, item);
    if (!res) return { err: 'Error requesting data' };
    return res;
};

export const editCategoryById = async (id, category) => {
    const res = axios.post(`${domain}api/menu/edit/${id}`, category);
    if (!res) return { err: 'Error requesting data' };
    return res;
};
