import logo from './logo.svg';
import './App.css';
import Login from './loginComponent/Login.js';
import {Routes, Route} from 'react-router-dom'
import Signup from './loginComponent/Signup.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
