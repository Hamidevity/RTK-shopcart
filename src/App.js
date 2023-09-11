import './App.css';
import {Route, Routes } from 'react-router-dom';

// components
import Header from './template/Header/Header';
import Navbar from './template/Navbar/Navbar';


import { Provider } from 'react-redux';
import store from './app/store';
import Products from './features/product/Products';



function App() {
 
  
  return (
    
    <Provider store={store}>
       <Header/>
       <Navbar/>
       
       <Routes>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </Provider>
     
    
  );
}

export default App;
