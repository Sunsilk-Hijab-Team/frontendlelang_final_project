import NavigationBar from '../../components/NavbarAfterLogin/NavbarDashboard';
import NavigationBarBefore from '../../components/NavbarBeforeLogin/NavbarDashboard';
import React from 'react';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import Search from '../../components/Search/Search';
// import './styleProductDetail.css';
import Details from '../../components/Details/Details';

function ProductDetail() {
    const token = localStorage.getItem('token');
    return (
        <div>
            {
                token ?
                 <NavigationBar
                    />

                 :

                <NavigationBarBefore
                middle={<Search/>}
                right={<ButtonLogin/>}
                />

            }
            <Details />
        </div>
    )
}

export default ProductDetail