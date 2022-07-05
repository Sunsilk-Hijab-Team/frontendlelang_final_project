import NavigationBar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import CardProduct from '../../components/Cards/CardProduct';
import ButtonFilter from '../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import LogoNav from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';

function Home() {
    return (
        <div>
            <NavigationBar 
            navRight={<ButtonLogin/>}
            navLeft={<LogoNav/>} 
            navMiddle={<Search/>} 
            />
            <Carousel />
            <ButtonFilter />
            <CardProduct />
        </div>
    )
}

export default Home