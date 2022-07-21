// import NavigationBar from '../../components/NavbarDashboardBuyer/NavbarDashboard';
import NavigationBar from '../../components/NavbarAfterLogin/NavbarDashboard';
import NavigationBarBefore from '../../components/NavbarBeforeLogin/NavbarDashboard';
import Carousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/Cards/CardProduct';
import ButtonFilter from '../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import Search from '../../components/Search/Search';
import SellButton from '../../components/SellButton/SellButton';


function Home() {

    const token = localStorage.getItem('token');


    return (
        <div>
            {
                token ?
                 <NavigationBar
                    middle={<Search/>}
                    />

                 :

                <NavigationBarBefore
                middle={<Search/>}
                right={<ButtonLogin/>}
                />

            }

            <Carousel />
            <ButtonFilter />

            <CardComponent
            />

            {
                token ? <SellButton 
                tambah="jual"
                /> : <></>
            }

        </div>
    )
}

export default Home