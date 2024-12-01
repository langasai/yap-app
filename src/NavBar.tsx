import React from 'react';
import './NavBar.css'; // {{ edit_1 }} - Optional: for styling

const NavBar: React.FC = () => {
    return (
        <div className="navbar">
            <h1>Yap App</h1>
            <nav> {/* {{ edit_2 }} */}
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;