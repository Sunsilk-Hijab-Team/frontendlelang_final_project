import React from 'react';
import imageLogin from './fi_log-in.svg';
import { Button } from 'react-bootstrap';
import styleButton from './styleButton.module.css';

function ButtonLogin() {
    return (
        <div>
            <Button className={styleButton.styleLogin}>
                <img src={imageLogin} alt="" /> Log in
            </Button>
        </div>
    )
}

export default ButtonLogin