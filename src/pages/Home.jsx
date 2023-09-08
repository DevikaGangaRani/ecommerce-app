import React from 'react';
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
