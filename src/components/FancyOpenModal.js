import '../css/FancyModal.css';

const FancyOpenModal = ({ text, target}) => {
    return (  
        <a className="fancy mt-5" data-bs-toggle="modal" data-bs-target={target} href="#">
            <span className="top-key"></span>
            <span className="text ">{ text }</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </a>
    );
}
 
export default FancyOpenModal;