import React from 'react'
import Baner from './component/baner/baner';
import Items from './component/fooditems/items';
import HelmetComponent from './component/helmet/helmet';
import { Helmet } from 'react-helmet-async';
export default function home() {
  return (
    <div>
 <Helmet>
      <title>this is home page</title>
      <meta name="description" content='home page'/>
      <meta property="og:title" content='this is home page' />
      <meta property="og:description" content='home page' />
      <meta property="og:image" content="https://res.cloudinary.com/dhevjlnnc/image/upload/v1735892233/dosa1_cvbvnr.jpg" />
      <meta property="og:url" content="https://foods-1.onrender.com" />
    </Helmet>
{/* <HelmetComponent
        title="Welcome to our Restaurant - Best Place to Order Food Online"
        description="Explore our wide variety of delicious food items available for online ordering. Get your favorite meals delivered to your doorstep!"
        keywords="restaurant, food delivery, online ordering, best food, order food online"
        ogTitle="Best Place to Order Food Online"
        ogDescription="Explore our wide variety of delicious food items available for online ordering. Get your favorite meals delivered to your doorstep!"
        ogUrl="https://foods-1.onrender.com"
        ogImage="https://i.imgur.com/lQAb1MH.png"
        ogImageAlt="Delicious food banner"
        ogImageWidth="300"
        ogImageHeight="200"
      /> */}
    <Baner/>
    <Items/>
    </div>
  )
}



