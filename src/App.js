import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
