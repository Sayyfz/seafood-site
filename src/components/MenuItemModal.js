import { useState } from 'react';
import '../css/AddItemModal.css';

const MenuItemModal = ({ onSubmitClicked, idx, edit }) => {

    const [mealName, setMealName] = useState('');
    const [price, setPrice] = useState(0);

    // const [error, setError] = useState(null);
    // const [emptyFields, setEmptyFields] = useState([]);

    const onSubmitItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: mealName,
            price,
        };

        onSubmitClicked(newItem);
    };

    return ( 
    <>
        <div className="modal fade" id={edit? "editItemModal" + idx: "itemModal"  + idx} tabIndex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <h5 className="modal-title" id="exampleModalLabel">معلومات الوجبة</h5>
            </div>
            <div className="modal-body">
                <form onSubmit={(e) => onSubmitItem(e)}>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">اسم الوجبة</label>
                        <input value={mealName} type="text" className="form-control" id="recipient-name" dir="rtl" onChange={(e) => setMealName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">السعر</label>
                        <input value={price} type="number" className="form-control" id="recipient-name" dir="rtl" onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <div className="modal-footer mt-4">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">أغلق</button>
                        <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value='حفظ'/>
                    </div>
                </form>
            </div>
         
            </div>
        </div>
        </div>
    </>
    );
}
 
export default MenuItemModal;