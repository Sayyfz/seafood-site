import '../css/About.css';
import { useState } from 'react';

const About = () => {

    const [aboutTitle, setAboutTitle] = useState('جعان؟');
    const [aboutText, setAboutText] = useState(',كونسيكتيتور أدايبا,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد يوت انيم أد مينيم فينايم,كيواس نوستري' )

    return (  
        
         <section className="section about-section">
            <div className="about-info d-flex flex-column justify-content-center align-items-center section-grid-item">
                <h2 className="section-title">{ aboutTitle }</h2>
                <p className="section-text text-center">{ aboutText }</p>
            </div>
            <div className="section-img-side section-grid-item">
                <img src={process.env.PUBLIC_URL + 'Images/img2.jpg'} alt="" />
            </div>
         </section>
       
        
    );
}
 
export default About;