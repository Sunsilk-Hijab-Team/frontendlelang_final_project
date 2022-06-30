import React from 'react';
import Card from '../../../components/Cards/CardProduct';
import Nav from '../../../components/Navbar/Navbar';
import Button from '../../../components/buttonFilter/ButtonFilter';
import Carousel from '../../../components/Carousel/Carousel';
import Search from '../../../components/Search/Search'

function Home() {
    return (
        <div>
            <Nav navMiddle={<Search/>}/>
            <Carousel/>
            <Button />
            <Card />
        </div>
    )
}

export default Home