
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import Nofound from './pages/nofound/Nofound';
import Nav from './compoments/nav/Nav';
import Footer from './compoments/footer/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
      <div className='App'>
        <Nav />
        <Router>
          <Routes>
            <Route path='/' element ={<Home  /> } />
            <Route path='/about' element ={<About /> } />
            <Route path='/accomodation' element ={<Accomodation /> } />
            <Route path='/*' element ={<Nofound /> } />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
}

export default App;
