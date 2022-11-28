import { useState } from 'react';
import '../css/AddItemModal.css';

const AddMenuItemModal = ({ createItemOnClick, idx }) => {

    const [mealName, setMealName] = useState('');
    const [price, setPrice] = useState(0);

    const onSubmitItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: mealName,
            price,
        };

        createItemOnClick(newItem);
    };

    return ( 
    <>
        <div className="modal fade" id={"itemModal" + idx} tabIndex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
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
                        <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value='أضف الوجبة'/>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}
 
export default AddMenuItemModal;