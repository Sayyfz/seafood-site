import '../css/Edit.css'

const Edit = ({ edit }) => {
    return (  
        <div onClick={() => edit()} className="edit circle-border">
            <i  className="fa-solid fa-pen-to-square fa-xl"></i>
        </div>
    );
};
 
export default Edit;