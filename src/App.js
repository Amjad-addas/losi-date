import { Route, Routes } from 'react-router-dom';
import './App.css'
import hero from './assite/image/hero.jpg'
import Home from './screens/home/Home';
import OurDate from './screens/date/Date';
import { Dates } from './screens/ourdate/Dates';
import All from './screens/all/All';
import AddDates from './screens/AddDates';
import Add from './screens/addDates/Add';
export default function App() {

  return (
    <div className="hero">
      <div className='header-container'>
        <h1 className='logo'>Amjad <br/>&<br/> Lamis</h1>

        <ul className='links'>
          <li>
          <a href='/'>
          clock
          </a>
        </li>
        <li>
          <a href='/our'>
          Our Date 
          </a>
        </li>

        <li>
          <a href='/add'>
          Add Date
          </a>
        </li>
       </ul>
      </div>
      <img className='hero-image' src={hero} alt='aaa'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/date' element={<OurDate/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/our' element={<Dates/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/add' element={<AddDates/>}/>
        <Route path='/dates' element={<Add/>}/>

      </Routes>
    </div>
  );
}