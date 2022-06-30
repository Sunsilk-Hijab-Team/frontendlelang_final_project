import NavigationBar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import CardProduct from '../../components/Cards/CardProduct';
import ButtonFilter from '../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';
import Search from '../../components/Search/Search'

function Home() {
    return (
        <div>
            <NavigationBar navMiddle={<Search/>} />
            <Carousel />
            <ButtonFilter />
            <CardProduct />
        </div>
    )
}

export default Home