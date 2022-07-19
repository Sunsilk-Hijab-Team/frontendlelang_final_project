import NavigationBar from '../../components/NavbarBeforeLogin/NavbarDashboard';
import Carousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/Cards/CardProduct';
import ButtonFilter from '../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import Search from '../../components/Search/Search';


function Home() {

    return (
        <div>
            <NavigationBar
            middle={<Search/>}
            right={<ButtonLogin/>}
            />
            <Carousel />
            <ButtonFilter />
            <CardComponent
            />
        </div>
    )
}

export default Home