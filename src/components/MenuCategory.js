import AddMenuItemModal from "./AddMenuItemModal";
import FancyOpenModal from "./FancyOpenModal";

 
const MenuCategory = ({ category }) => {

    const removeMenuItem = () => {
        console.log('remove');
    };

    return (
         <div className="menu-category d-flex flex-column align-items-center text-center my-4">
            <h2 className="menu-category__title mb-5">{ category.title }</h2>
            <ul className="menu-category__list d-flex flex-column">
                {
                    category.content.map(item => {
                        return (
                            <li key={item._id} className="menu-category__item d-flex justify-content-between">
                                <i onClick={removeMenuItem} className="fa-solid fa-circle-xmark remove-icon fa-md"></i>
                                <span className="menu-category__item-price">
                                    {item.price ? item.price : ''}
                                </span>
                                <p className="menu-category__item-name">
                                    {item.name ? item.name : ''}
                                </p>
                            </li>
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