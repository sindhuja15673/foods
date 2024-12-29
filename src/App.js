
import './App.css';
import Home from './home';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Menu from './component/menu/menu';
import Cart from './component/cart/cart';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import HelmetComponent from './component/helmet/helmet';
import FoodDetail from './component/foodDetails/foodDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './saga/store';
function App() {

const title = "Welcome to our Restaurant";
  const description = "Order food online from our wide selection of meals.";
  const imageUrl = "https://foods-1.onrender.com/assets/pizza.jpg";
  const url = "https://foods-1.onrender.com";
  return (
    <div className='app'>
 <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <HelmetComponent
        title="Welcome to our Restaurant"
        description="Order food online from our wide selection of meals."
        keywords="restaurant, food delivery, online ordering, best food, order food online"
        ogTitle="Best Place to Order Food Online"
        ogDescription="Explore our wide variety of delicious food items available for online ordering. Get your favorite meals delivered to your doorstep!"
        ogUrl="http://192.168.43.46:3000"
        ogImage="https://i.imgur.com/lQAb1MH.png"
        ogImageAlt="Delicious food banner"
        ogImageWidth="300"
        ogImageHeight="200"
      /> */}
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
    </div>
  );
}

export default App;
