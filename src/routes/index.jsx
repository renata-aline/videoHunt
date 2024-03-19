


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const RoutesApp = () => {
  return (
   <BrowserRouter>
   
    <Routes>
     <Route path="home" element={<Home />}/> 
     <Route path="signim" element={<Signin />}/> 
     <Route path="signup" element={<Signup />}/>
     <Route path="*" element={<Signin />}/>   
    </Routes>
   
   </BrowserRouter>
  )
}

export default RoutesApp