
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Details from './Pages/Inventory/Inventory';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import LogOut from './Pages/LogOut/Logout';

import NotFound from './Pages/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
<Route path='/' element={<Home></Home>} ></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/signup' element={<SignUp></SignUp>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/inventory' element={
  <RequireAuth>
    <Inventory></Inventory>
    </RequireAuth>
}></Route>
<Route path='/inventory' element={<InventoryItems></InventoryItems>}></Route>
<Route path='/logout' element={<LogOut></LogOut>}></Route>

<Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
