import { useState } from "react";


const MenuCategoryModal = ({ onSubmitCategoryClicked,idx, edit }) => {

    const [catName, setCatName] = useState('');

    const onSubmitCategory = (e) => {
        e.preventDefault();

        onSubmitCategoryClicked(catName);

    };

    return (  
        <div className="modal fade" id={edit ? `editCategoryModal${idx}` : `categoryModal`} tabIndex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">معلومات القائمة</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={(e) => onSubmitCategory(e)}>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">اسم القائمة</label>
                    <input value={catName} type="text" className="form-control" id="recipient-name" dir="rtl" onChange={(e) => setCatName(e.target.value)}/>
                    <div className="modal-footer mt-4">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">أغلق</button>
                        <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" value='حفظ'/>
                    </div>
                </div>
                
                </form>
            </div>
            
            </div>
        </div>
        </div>
    );
}
 
export default MenuCategoryModal;