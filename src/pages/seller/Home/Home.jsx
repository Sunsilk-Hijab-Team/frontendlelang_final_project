import Navbar from '../../../components/NavbarSeller/NavbarSeller';
import Carousel from '../../../components/Carousel/Carousel';
import CardProduct from '../../../components/Cards/CardProduct';
import ButtonFilter from '../../../components/buttonFilter/ButtonFilter';
import React from 'react';
import { Form } from 'react-bootstrap';
import styleNavSeller from '../../../components/NavbarSeller/styleNavSeller.module.css';
import iconSearch from '../../../components/NavbarSeller/search.svg';

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
        </div>
    )
}

export default SellerHome