import '../css/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + 'Images/logo.png'} alt="" />
                </Link>
                <div className="collapse navbar-collapse pb-sm-0 pb-3" id="navbarNavAltMarkup">
                    <div className="navbar-nav container">
                    <Link className="nav-link px-4" to="#">تواصل معنا</Link>
                    <Link className="nav-link px-4" to="#">معلومات عنا</Link>
                    <Link className="nav-link px-4" aria-current="page" to="/menu">قائمة الطعام</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;