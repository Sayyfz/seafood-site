import Remove from "./Remove";
import { editItemById } from "../api/MenuApi";
import { useEffect, useState } from "react";
import MenuItemModal from "./MenuItemModal";


const MenuItem = ({ item, removeMenuItem }) => {

    const [currentItem, setCurrentItem] = useState({})

    const editItemOnClick = async (newItem) => {
        const res = await editItemById(item._id, newItem);

        if(res.ok) {
        }
        
        setCurrentItem(newItem)
    };

    useEffect(() => {
        setCurrentItem(item);
    }, [])

    return (  
        <li className="menu-category__item d-flex justify-content-between">
            <Remove callback={removeMenuItem} item={item}/>
            <span className="menu-category__item-price">
                {currentItem.price ? currentItem.price : ''}
            </span>
            <p className="menu-category__item-name">
                {currentItem.name ? currentItem.name : ''}
            </p>
            <div data-bs-toggle="modal" data-bs-target={"#editItemModal" + item._id} className="edit-item">
                <i className="fa-solid fa-pen-to-square fa-sm"></i>
            </div>

            <MenuItemModal onSubmitClicked={editItemOnClick} idx={item._id} edit={ true }/>
        </li>
    );
}
 
export default MenuItem;