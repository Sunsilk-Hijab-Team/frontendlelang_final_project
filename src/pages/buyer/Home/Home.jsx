import React from 'react';
import Card from '../../../components/Cards/CardProduct';
import Nav from '../../../components/Navbar/Navbar';
import Button from '../../../components/buttonFilter/ButtonFilter';
import Carousel from '../../../components/Carousel/Carousel'

function Home() {
    return (
        <div>
            <Nav />
            <Carousel/>
            <Button />
            <Card />
        </div>
    )
}

export default Home