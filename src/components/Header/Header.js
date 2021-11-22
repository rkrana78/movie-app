import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div onClick={()=> window.scroll(0, 0)}>
            <h3 className="header"> Movie Hub </h3>
        </div>
    );
};

export default Header;