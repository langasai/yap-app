import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;