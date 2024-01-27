import './App.css';
import Login from './pages/Login' 
import SignUp from './pages/SignUp'
//import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
