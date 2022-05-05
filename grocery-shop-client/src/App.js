import { Route, Routes } from 'react-router-dom';
import ErrorPage from './component/ErrorPage/ErrorPage';
import HeaderNav from './component/HeaderNav/HeaderNav';
import Home from './component/Home/Home';
import ManageInventory from './component/ManageInventory/ManageInventory';
import ManageItem from './component/ManageItems/ManageItems';
import AddItem from './component/AddItem/AddItem';
import MyItem from './component/MyItem/MyItem';
import Blog from './component/Blog/Blog';
import Login from './component/Login/Login';
import Footer from './component/Footer/Footer';
import Registration from './component/Registration/Registration';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
         <Route path='/manageitems' element={<ManageItem></ManageItem>}></Route>
         <Route path='/additem' element={<AddItem></AddItem>}></Route>
         <Route path='/myitem' element={
           <RequireAuth>
             <MyItem></MyItem>
           </RequireAuth>
         }></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/registration' element={<Registration></Registration>}></Route>
         <Route path='/forgetpassword' element={<ForgotPassword></ForgotPassword>}></Route>
         <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes> 
      <Footer></Footer>
    </div>
  );
}

export default App;
