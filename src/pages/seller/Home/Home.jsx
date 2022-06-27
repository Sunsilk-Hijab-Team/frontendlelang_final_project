import NavSeller from '../../../components/NavbarSeller/NavbarSeller';
import Carousel from '../../../components/Carousel/Carousel';
import CardProduct from '../../../components/Cards/CardProduct';
import ButtonFilter from '../../../components/buttonFilter/ButtonFilter';
import React from 'react';
import './styleHome.css';

function SellerHome() {
    return (
        <div>
            <NavSeller />
            <Carousel />
            <ButtonFilter />
            <CardProduct />
        </div>
    )
}

export default SellerHome