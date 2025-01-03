
import './App.css';
import Home from './home';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Menu from './component/menu/menu';
import Cart from './component/cart/cart';
import { Provider } from 'react-redux';
import FoodDetail from './component/foodDetails/foodDetails';
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './saga/store';
function App() {
  return (
    <div className='app'>
<HelmetProvider>
      <Provider store={store}>
    <Router>
      <Header/>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/food/:id" element={<FoodDetail />} />
        
      </Routes>
      <Footer/>
   </Router>
   </Provider>
   </HelmetProvider>
    </div>
  );
}

export default App;
