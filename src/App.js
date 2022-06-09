
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/HomePage/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import NotFound from './Components/Shared/NotFound';
import ToolDetail from './Components/ToolDetail/ToolDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/purchase/:purchaseId' element={<Purchase/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
