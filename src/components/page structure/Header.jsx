import React from 'react';
import '../../styles/Header.sass';
import { RiShoppingCartLine } from "react-icons/ri";

const Header = ({ onLogOut }) => {
  return (
    <header className='header-main'>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <div className="button-container">
          <button onClick={onLogOut} className='button-header'>Logout</button> 
        </div>
        <div className="header-title-container">
          <div className="icon" ><RiShoppingCartLine /></div>
          <h1 className='logo-container' >Inventory</h1>
        </div>
    </header>
  )
}

export default Header