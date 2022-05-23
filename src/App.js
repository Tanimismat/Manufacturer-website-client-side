
import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/HomePage/Home';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
