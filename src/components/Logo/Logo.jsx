import React from 'react';
import Logo from './Logo.svg';
import Style from './style.module.css'

function LogoNav() {
  return (
    <div className={Style.logo}>
        <img src={Logo} alt="Logo" />
    </div>
  )
}

export default LogoNav