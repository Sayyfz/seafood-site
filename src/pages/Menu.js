import Navbar from "../components/Navbar";
import '../css/Menu.css'
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import MenuCategory from "../components/MenuCategory";
import Edit from "../components/Edit";
import FancyOpenModal from "../components/FancyOpenModal";
import AddMenuCategoryModal from "../components/AddMenuCategoryModal";

const Menu = () => {

    const [menuItems, setMenuItems] = useState([]);
    const menuPage = useRef(null);

    const onEditClicked = () => {
        menuPage.current.classList.toggle('edit-mode');
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/menu')
            .then(res => {
                setMenuItems(res.data);
            }).catch(err => console.log(err.message));
    }, []);

    return (  
        <>
            <Navbar />
            <div ref={menuPage}>
                <div  className="menu-page mx-auto p-sm-5 px-4 py-5">
                    {
                        menuItems.map(menuItem => <MenuCategory category={menuItem} key={menuItem._id}/>)
                    }
                </div>
                <div className="add-category">
                    <FancyOpenModal text='أضف قائمة' target='#categoryModal'/>
                    <AddMenuCategoryModal />
                </div>
            </div>
            <Edit edit={onEditClicked}/>
        </>
    );
}
 
export default Menu;