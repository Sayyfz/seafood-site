import { useEffect, useState } from "react";
import { createCategoryItem, deleteItemById, editCategoryById } from "../api/MenuApi.js";
import FancyOpenModal from "./FancyOpenModal";
import MenuItem from "./MenuItem";
import Remove from "./Remove.js";
import MenuItemModal from "./MenuItemModal";
import MenuCategoryModal from "./MenuCategoryModal.js";

 
const MenuCategory = ({ category, removeCategory }) => {

    // const [catItems, setCatItems] = useState([]);
    // const [catTitle, setCatTitle] = useState('');
    const [currentCat, setCurrentCat] = useState({});

    const createItem = async(item) => {
        const res = await createCategoryItem(currentCat._id, item);
        
        setCurrentCat({...currentCat, content: [...currentCat.content, res.data]});
    };

    const editCategory = async (catTitle) => {

        const newCategory = {
            title: catTitle,
            content: currentCat.content,
        };
        const res = await editCategoryById(currentCat._id, newCategory);
        console.log(newCategory.title);
        setCurrentCat(res.data);
        //AFTER I EDIT CATEGORY NAME, THE ID CHANGES, SO WE NEED TO SEARCH WITH THE NEW ID
    }

    const removeMenuItem = async (id) => {
        const newItems = currentCat.content.filter(item => item._id !== id);
        setCurrentCat({...currentCat, content: newItems});
        
        await deleteItemById(id);
    };

    useEffect(() => {
        // if(category.content)
        //     setCatItems(category.content);

        // setCatTitle(category.title);

        if(category)
            setCurrentCat(category)
    }, [])

    return (
         <div className="menu-category d-flex flex-column align-items-center text-center my-4">
            <div className="category-header d-flex align-items-center mb-5 justify-content-between">
                <Remove callback={removeCategory} item={category}/>
                <h2 className="menu-category__title mb-0 px-3">{ currentCat.title }</h2>

                <div data-bs-toggle="modal" data-bs-target={`#editCategoryModal${category._id}`} className="edit-item">
                    <i className="fa-solid fa-pen-to-square fa-sm"></i>
                </div>
                <MenuCategoryModal onSubmitCategoryClicked={editCategory} edit={ true } idx={category._id} />
            </div>
            <ul className="menu-category__list d-flex flex-column">
                {
                    currentCat?.content ? currentCat.content.map(item => {
                        return (
                            <MenuItem item={item} removeMenuItem={removeMenuItem} key={item._id}/>
                        )
                    }) : null
                }
            </ul>
            <span className="add-item">
                <FancyOpenModal text={'أضف وجبة'} target={'#itemModal' + category._id} />
                <MenuItemModal onSubmitClicked={createItem} idx={category._id} edit={false} />
            </span>
         </div>
            
    )}
 
export default MenuCategory;