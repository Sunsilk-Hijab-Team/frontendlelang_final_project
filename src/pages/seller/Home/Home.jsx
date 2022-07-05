import Navbar from '../../../components/NavbarSeller/NavbarSeller';
import Carousel from '../../../components/Carousel/Carousel';
import CardProduct from '../../../components/Cards/CardProduct';
import ButtonFilter from '../../../components/buttonFilter/ButtonFilter';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styleNavSeller from '../../../components/NavbarSeller/styleNavSeller.module.css';
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
        </div>
    )
}

export default SellerHome