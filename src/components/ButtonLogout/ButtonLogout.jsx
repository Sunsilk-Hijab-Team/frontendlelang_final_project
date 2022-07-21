import React from 'react';
import imageLogin from './fi_log-in.svg';
import { Button } from 'react-bootstrap';
import styleButton from './styleButton.module.css';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonLogout() {

    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        nav('/login')
    }


    return (
        <div>
            <Button onClick={handleLogout} className={styleButton.styleLogin}>
                <img src={imageLogin} alt="" /> Log Out
            </Button>
        </div>
    )
}

export default ButtonLogout