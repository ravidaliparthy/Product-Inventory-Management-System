import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/Addproduct.js';
import EditProduct from './components/Editproduct.js';
import ListProduct from './components/ListProduct.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/edit/:id' element={<EditProduct/>}></Route>
          <Route path='/' element={<ListProduct/>}></Route>
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
