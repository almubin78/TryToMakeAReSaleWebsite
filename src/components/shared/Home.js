import React from 'react';
import Advetise from './Advetise';
import Banner from './Banner';
import Footer from './Footer';
import ProductsCategories from './ProductsCategories';
import useDynamicTitle from './useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Advetise></Advetise>
            <ProductsCategories></ProductsCategories>
            <Footer></Footer>
        </div>
    );
};

export default Home;