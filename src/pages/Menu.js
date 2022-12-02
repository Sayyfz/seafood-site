import Navbar from "../components/Navbar";
import '../css/Menu.css'
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import MenuCategory from "../components/MenuCategory";
import Edit from "../components/Edit";
import FancyOpenModal from "../components/FancyOpenModal";
import { createNewCategory, deleteCategoryById, getAllItems } from "../api/MenuApi";
import MenuCategoryModal from "../components/MenuCategoryModal";

const Menu = () => {

    const [categories, setMenuItems] = useState([]);
    const menuPage = useRef(null);

    

    const onEditClicked = () => {
        menuPage.current.classList.toggle('edit-mode');
    };

    const createCategory = async (catTitle) => {
        const newCategory = {
            title: catTitle,
            content: []
        };

        const res = await createNewCategory(newCategory);
        
        setMenuItems([...categories, res.data]);

    };

    

    const removeCategory = async (id) => {
        await deleteCategoryById(id);
        const newCats = categories.filter(cat => cat._id !== id);
        setMenuItems(newCats);

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
                <div  className={categories.length > 0 ? `menu-page mx-auto p-sm-5 px-4 py-5` : 'menu-page mx-auto'}>
                    {
                        categories.map(category => <MenuCategory removeCategory={removeCategory} category={category} key={category._id}/>)
                    }
                </div>
                <div className="add-category">
                    <FancyOpenModal text='أضف قائمة' target='#categoryModal'/>
                    <MenuCategoryModal onSubmitCategoryClicked={createCategory} edit={ false } idx=''/>
                </div>
            </div>
            <Edit edit={onEditClicked}/>
        </>
    );
}
 
export default Menu;