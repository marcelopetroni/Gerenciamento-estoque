import React from 'react';
import '../../styles/Header.sass';
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
        <div className="icon" ><RiShoppingCartLine /></div>
        <h1 className='logo-container' >Inventory</h1>
    </header>
  )
}

export default Header