import '../css/FancyButton.css'

const FancyButton = ({ text }) => {
    return (  
        <a className="fancy mt-5" href="#">
            <span className="top-key"></span>
            <span className="text">{text}</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </a>
    );
}
 
export default FancyButton;