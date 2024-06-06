import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../main menu/MainMenu.sass';
import Parse from 'parse';

const MainMenu = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      setIsAdmin(currentUser.get('position') === 'admin');
    }
  }, []);

  return (
    <div className="main-menu-container">
      <h3 className='menu-title'>Products Menu</h3>
      <div className="buttons">
        <button className="menu-button">
          <Link to='/Create' style={{textDecoration: "none", color: "#000"}}>Create item</Link>
        </button>
        <button className="menu-button">
          <Link to='/Read' style={{textDecoration: "none", color: "#000"}}>Read items</Link>
        </button>
        <button className="menu-button">
          <Link to='/Update' style={{textDecoration: "none", color: "#000"}}>Update item</Link>
        </button>
        <button className="menu-button">
          <Link to='/Delete' style={{textDecoration: "none", color: "#000"}}>Delete item</Link>
        </button>
        {isAdmin && (
          <button className="menu-button">
            <Link to='/Register' style={{textDecoration: "none", color: "#000"}}>Registrar Funcionário</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default MainMenu;
