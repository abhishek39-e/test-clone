import './App.css';
import Login from '../component/login';
import { Route, Routes } from 'react-router-dom';
import Loginpage from '../component/Loginpage.jsx';
import Register from '../component/Register.jsx';

function App() {
  return (
    //route
    <>
      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/loginpage' element={<Loginpage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
