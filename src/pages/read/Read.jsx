import React from 'react';
import '../read/Read.sass';
import { Link } from 'react-router-dom';
import { IoCaretBackCircle } from "react-icons/io5";

const Read = () => {
  return (
    <div className="read-container">
      <div className="title-container">
        <Link to = '/' > <IoCaretBackCircle className='back-button'/> </Link>
        <h3 className='read-title'>Products Menu</h3>
      </div>
    </div>
  )
}

export default Read