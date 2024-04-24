import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Landing from './components/Landing';
// import mountain from './img/mountain.jpg';

function App() { 

    const myStyle={
         backgroundImage: "url(./img/mountain/jpg)",
         height:'100vh',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
     };

  return ( 
    <div style={{myStyle}}> 
       
      <BrowserRouter> 
        <Routes>
          <Route path='/landing' element={<Todo/>}></Route>  
          <Route path='/' element={<Landing/>}></Route> 
        </Routes> 
      </BrowserRouter> 
    </div> 
  ); 
  
} 
  
export default App;