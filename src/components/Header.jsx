import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <img src="/paralyzed.png" alt="Brain with lightning Brain icons created by Freepik - Flaticon" className="logo" />
                <h1>Brain Cast</h1>
                <nav>
                    <ul>
                        <li><a href="#">🏠<span>All Shows</span></a></li>
                        <li><a href="#">🎧<span>Genre</span></a></li>
                        <li><a href="#">🎧<span>Your Favourites</span></a></li>
                        <li><a href="#">🔍<span>Search</span></a></li>
                    </ul>
                </nav>
                <div className="profile-area" onClick={toggleDropdown}>
                    <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
                    <span className="profile-text">MyBrain Profile</span>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;