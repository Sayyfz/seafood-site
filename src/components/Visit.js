import { useState } from 'react';
import FancyButton from './FancyButton';
import '../css/Visit.css'
import '../css/FancyButton.css';

const Visit = () => {

    const [visitTitle, setVisitTitle] = useState('تعالى زورنا')
    const [visitText, setVisitText] = useState('تعالى نورنا فى 3 شارع مراد جنب جامعة القاهرة. كل جمعة عندنا عروض الحق و تعالى.')

    return (  
        <section className='visit-section d-flex flex-column justify-content-center align-items-center'>
            <h2 className="section-title text-center">{visitTitle}</h2>
            <p className="section-text text-center">{visitText}</p>
            <FancyButton text='اطلب الان'/>
        </section>
    );
}
 
export default Visit;