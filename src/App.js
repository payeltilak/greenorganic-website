
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';

// import LogOut from './Pages/LogOut/Logout';

import NotFound from './Pages/NotFound/NotFound';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import MyItem from './Pages/MyItem/MyItem';
import AddItems from './Pages/AddItems/AddItems';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

import RequireAuth from './Pages/RequireAuth/RequireAuth';

import About from './Pages/About/About';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetails></InventoryDetails>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
       
        {/* <Route path='/logout' element={<LogOut></LogOut>}></Route> */}
        {/* <Route path='/checkProduct' element={<RequireAuth>
            <CheckProducts></CheckProducts>
        </RequireAuth>}></Route> */}

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>

        <Route path='/manageInventory' element={
          // <RequireAuth>
           <ManageInventory></ManageInventory>
          // </RequireAuth>
        }></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>

         <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
