import '../css/Contact.css';
import { useState } from 'react';


const Contact = () => {

    const accentColor = '#39E4D0'
    const iconSize = 'fa-xl'
    const [facebook, setFacebook] = useState('#');
    const [instagram, setInstagram] = useState('#');
    const [tiktok, setTiktok] = useState('#');
    const [twitter, setTwitter] = useState('#');

    const [contactTitle, setContactTitle] = useState('تواصل معنا')

    return (  
        <section className="section">
            <div className='d-flex flex-column justify-content-center align-items-center section-grid-item'>
                <h2 className="section-title">{contactTitle}</h2>
                <ul className="social-list d-flex mt-3">
                    <li className="social-item circle-border">
                        <i className={`fa-brands fa-facebook-f ${iconSize}`}></i>
                        <a className='social-link' href={facebook}></a>
                    </li>
                    <li className="social-item circle-border">
                        <i className={`fa-brands fa-instagram ${iconSize}`}></i>
                        <a className='social-link' href={instagram}></a>
                    </li>
                    <li className="social-item circle-border">
                        <i className={`fa-brands fa-tiktok ${iconSize}`}></i>
                        <a className='social-link' href={tiktok}></a>
                    </li>
                    <li className="social-item circle-border">
                        <i className={`fa-brands fa-twitter ${iconSize}`}></i>
                        <a className='social-link' href={twitter}></a>
                    </li>
                </ul>
            </div>
            <div className="section-img-side section-grid-item">
                <img src={process.env.PUBLIC_URL + 'Images/img3.jpg'} alt="" />
            </div>
        </section>
    );
}
 
export default Contact;