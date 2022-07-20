import Navbar from '../../../components/NavbarDashboard/NavbarDashboard';
import React from 'react';
import './styleProductDetail.css';
// import Details from './Details/Details';
import Details from '../../../components/Details/Details'

function ProductDetail() {
    return (
        <div>
            <Navbar title="Product Details" />
            <Details />
        </div>
    )
}

export default ProductDetail