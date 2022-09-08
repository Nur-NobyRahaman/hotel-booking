import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home';
import { Routes, Route} from "react-router-dom";
import SingleRoom from './Component/Checkin/Checkin';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Checkin from './Component/Checkin/Checkin';
import Required from './Component/Required/Required';
import Check from './Component/Check/Check';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkin' element={<Required><Checkin></Checkin></Required>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/check' element={<Check></Check>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
