import React from 'react';
import logo from './assets/yap.svg'
import './NavBar.css'; // {{ edit_1 }} - Optional: for styling

const NavBar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="left">   
                <img src={logo} alt="logo" style={{ width: '96px', height: '96px' }} />
                <h1>Yap App</h1>
            </div>
            <nav> {/* {{ edit_2 }} */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;