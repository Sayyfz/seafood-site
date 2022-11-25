import '../css/AddItemModal.css';

const AddMenuItemModal = () => {
    return ( 
    <>
        <div className="modal fade" id="itemModal" tabIndex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">اسم الوجبة</label>
                    <input type="text" className="form-control" id="recipient-name" dir="rtl"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">السعر</label>
                    <input type="number" className="form-control" id="recipient-name" dir="rtl"/>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Send message</button>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}
 
export default AddMenuItemModal;