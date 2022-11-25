import { useEffect, useState } from "react";
import { deleteItemById } from "../api/MenuApi.js";
import AddMenuItemModal from "./AddMenuItemModal";
import FancyOpenModal from "./FancyOpenModal";
import MenuItem from "./MenuItem";
import Remove from "./Remove.js";

 
const MenuCategory = ({ category, removeCategory }) => {

    const [catItems, setCatItems] = useState([]);

    const removeMenuItem = async (id) => {
        const newItems = catItems.filter(item => item._id !== id);
        setCatItems(newItems);
        
        await deleteItemById(id);
    };

    useEffect(() => {
        if(category.content)
            setCatItems(category.content);
    }, [])

    return (
         <div className="menu-category d-flex flex-column align-items-center text-center my-4">
            <div className="d-flex align-items-center mb-5">
                <Remove callback={removeCategory} item={category}/>
                <h2 className="menu-category__title mb-0 px-3">{ category.title }</h2>
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
                <FancyOpenModal text={'أضف وجبة'} target='#itemModal' />
                <AddMenuItemModal />
            </span>
         </div>
            
    )}
 
export default MenuCategory;