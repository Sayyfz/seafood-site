import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Visit from '../components/Visit';
import Edit from '../components/Edit';

const Home = () => {

    const onEditClicked = () => {
        console.log('Edit Clicked');
    };

    return (  
        <>
            <Navbar />
            <Hero />
            <About />
            <div className="bg">
                <img src={process.env.PUBLIC_URL + 'Images/img4.jpg'} alt="" />
                <Contact />
                <Visit />
            </div>
            <Edit edit={onEditClicked}/>
        </>
    );
}
 
export default Home;