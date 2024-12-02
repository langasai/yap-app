import React from 'react';
import logo from './assets/yap.svg'
const Header: React.FC = () => {
    return (
        <header>
            <h1>Immersion without leaving home.</h1>
            <img src={logo} alt="logo" style={{ width: '96px', height: '96px' }} />
        </header>
    );
};

export default Header;