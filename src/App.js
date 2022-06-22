
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import AddReview from './Components/Dashboard/AddReview';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import MyOrders from './Components/MyOrders/MyOrders';
import Purchase from './Components/Purchase/Purchase';
import NotFound from './Components/Shared/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders/>}></Route>
          <Route path='addreview' element={<AddReview/>}></Route>
          <Route path='myprofile' element={<MyProfile/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
