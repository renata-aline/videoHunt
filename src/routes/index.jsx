


import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Register from '../pages/Register';

const RoutesApp = () => {
  return (
   <BrowserRouter>
   
    <Routes>
     {/* <Route path="home" element={<Home />}/>  */}
     <Route path="signim" element={<Signin />}/> 
     <Route path="Register" element={<Register/>}/>
     <Route path="*" element={<Signin />}/>   
    </Routes>
   
   </BrowserRouter>
  )
}

export default RoutesApp