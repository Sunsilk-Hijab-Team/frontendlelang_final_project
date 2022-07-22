import Navbar from '../../../components/NavbarAfterLogin/NavbarDashboard';
import Carousel from '../../../components/Carousel/Carousel';
import CardProduct from '../../../components/Cards/CardProduct';
import ButtonFilter from '../../../components/buttonFilter/ButtonFilter';
import React from 'react';
import { Form } from 'react-bootstrap';
import styleNavSeller from '../../../components/NavbarAfterLogin/styleNavDashboard.module.css';
import iconSearch from '../../../components/NavbarSeller/search.svg';
import SellButton from '../../../components/SellButton/SellButton';

function SellerHome() {
    return (
        <div>
            <Navbar
                title={<Form className={styleNavSeller.search}>
                    <Form.Control
                        type="search here"
                        placeholder="  Search here"
                        aria-label="Search"
                        className={styleNavSeller.rounded}
                    />
                    <img src={iconSearch} alt="search" className={styleNavSeller.styleIcon} />
                </Form>}
            />
            <Carousel />
            <ButtonFilter />
            <CardProduct />
            <SellButton />
            {console.log('tes')};
        </div>
    )
}

export default SellerHome