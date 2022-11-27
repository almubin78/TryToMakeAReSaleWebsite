import React from 'react';
import Advetise from './Advetise';
// import Banner from './Banner';
import Footer from './Footer';
import ProductsCategories from './ProductsCategories';
import Servicing from './Servicing';
import useDynamicTitle from './useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home')
    return (
        <div>
            {/* <Banner></Banner> */}
            <ProductsCategories></ProductsCategories>
            <Advetise></Advetise>
            <Servicing></Servicing>
            <Footer></Footer>
        </div>
    );
};

export default Home;