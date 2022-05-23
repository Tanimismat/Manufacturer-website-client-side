import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Tools></Tools>
            <Footer></Footer>
        </div>
    );
};

export default Home;