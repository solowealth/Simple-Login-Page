import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router';
import Heading from './Pages/Header/Heading';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/AboutUs' element={<AboutUs />}/>
        <Route exact path='/ContactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
