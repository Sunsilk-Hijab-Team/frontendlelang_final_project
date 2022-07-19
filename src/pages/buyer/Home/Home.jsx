import React from 'react';
import Card from '../../../components/Cards/CardProduct';
import Nav from '../../../components//NavbarBeforeLogin/NavbarDashboard';
import Button from '../../../components/buttonFilter/ButtonFilter';
import Carousel from '../../../components/Carousel/Carousel';
import Search from '../../../components/Search/Search';
import ButtonLogin from '../../../components/ButtonLogin/ButtonLogin'

function Home() {
    return (
        <div>
            <Nav
            middle={<Search/>}
            right={<ButtonLogin/>}
            />
            <Carousel/>
            <Button />
            <Card />
        </div>
    )
}

export default Home