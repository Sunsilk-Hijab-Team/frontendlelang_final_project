import NavigationBar from '../../../components/NavbarAfterLogin/NavbarDashboard';
// import NavigationBarBefore from '../../../components/NavbarBeforeLogin/NavbarDashboard';
import React from 'react';
// import ButtonLogin from '../../../components/ButtonLogin/ButtonLogin';
// import Search from '../../../components/Search/Search';
// import './styleProductDetail.css';
import Details from './DetailsSeller/DetailsSeller';

function ProductDetailSeller() {
    const token = localStorage.getItem('token');
    return (
        <div>
            <NavigationBar
                title="Product Detail"
            />
            <Details />
        </div>
    )
}

export default ProductDetailSeller