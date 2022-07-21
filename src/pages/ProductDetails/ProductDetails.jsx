import Navbar from '../../components/NavbarSeller/NavbarSeller';
import React from 'react';
// import './styleProductDetail.css';
import Details from '../../components/Details/Details';

function ProductDetail() {
    return (
        <div>
            <Navbar title="Product Details" />
            <Details />
        </div>
    )
}

export default ProductDetail