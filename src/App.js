import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Visit from './components/Visit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Hero />
        <About />
        <div className="bg">
          <img src={process.env.PUBLIC_URL + 'Images/img4.jpg'} alt="" />
          <Contact />
          <Visit />
        </div>
      </div>
    </div>
  );
}

export default App;
