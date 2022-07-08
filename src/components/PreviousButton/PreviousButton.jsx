import React from 'react';
import style from './stylePreviousButton.module.css';
import { Button } from 'react-bootstrap';

function PreviousButton() {
    return (
        <div>
            <Button className={style.previous}>
                <img className='d-flex' src="/assets/fi_arrow-left.svg" alt="halo" />
            </Button>
        </div >

    )
}

export default PreviousButton