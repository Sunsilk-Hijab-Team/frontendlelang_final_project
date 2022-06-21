import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import CardProduct from '../../components/Cards/CardProduct';
import ButtonFilter from '../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <ButtonFilter />
            <CardProduct />
        </div>
    )
}

export default Home