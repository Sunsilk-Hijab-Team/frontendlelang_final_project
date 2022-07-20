import React from 'react';
import style from './stylePreviousButton.module.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function PreviousButton() {
    let navigate = useNavigate();
    return (
        <div>
            <Button className={style.previous} onClick={() => navigate(-1)}>
                <img className='d-flex' src="/assets/fi_arrow-left.svg" alt="halo" />
            </Button>
        </div >

    )
}

export default PreviousButton