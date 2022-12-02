import { useEffect, useState } from "react";
import { createCategoryItem, deleteItemById, editCategoryById } from "../api/MenuApi.js";
import FancyOpenModal from "./FancyOpenModal";
import MenuItem from "./MenuItem";
import Remove from "./Remove.js";
import MenuItemModal from "./MenuItemModal";
import MenuCategoryModal from "./MenuCategoryModal.js";

 
const MenuCategory = ({ category, removeCategory }) => {

    const [catItems, setCatItems] = useState([]);
    const [catTitle, setCatTitle] = useState('');

    const createItem = async(item) => {
        const res = await createCategoryItem(category._id, item);
        
        setCatItems([...catItems, res.data]);
    };

    const editCategory = async (catTitle) => {

        const newCategory = {
            title: catTitle,
            content: category.content,
        };

        setCatTitle(catTitle);
        await editCategoryById(category._id, newCategory);
    }

    const removeMenuItem = async (id) => {
        const newItems = catItems.filter(item => item._id !== id);
        setCatItems(newItems);
        
        await deleteItemById(id);
    };

    useEffect(() => {
        if(category.content)
            setCatItems(category.content);
        
        setCatTitle(category.title);
    }, [category.content])

    return (
         <div className="menu-category d-flex flex-column align-items-center text-center my-4">
            <div className="category-header d-flex align-items-center mb-5 justify-content-between">
                <Remove callback={removeCategory} item={category}/>
                <h2 className="menu-category__title mb-0 px-3">{ catTitle }</h2>

                <div data-bs-toggle="modal" data-bs-target={`#editCategoryModal${category._id}`} className="edit-item">
                    <i className="fa-solid fa-pen-to-square fa-sm"></i>
                </div>
                <MenuCategoryModal onSubmitCategoryClicked={editCategory} edit={ true } idx={category._id} />
            </div>
            <ul className="menu-category__list d-flex flex-column">
                {
                    catItems && catItems.map(item => {
                        return (
                            <MenuItem item={item} removeMenuItem={removeMenuItem} key={item._id}/>
                        )
                    })
                }
            </ul>
            <span className="add-item">
                <FancyOpenModal text={'أضف وجبة'} target={'#itemModal' + category._id} />
                <MenuItemModal onSubmitClicked={createItem} idx={category._id} edit={false} />
            </span>
         </div>
            
    )}
 
export default MenuCategory;