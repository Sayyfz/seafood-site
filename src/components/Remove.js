

const Remove = ({ callback, item }) => {
    return (  
        <i onClick={() => callback(item._id)} className="fa-solid fa-circle-xmark remove-icon fa-md"></i>
    );
}
 
export default Remove;