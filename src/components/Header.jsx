import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <Link className='site-logo'><img src="/paralyzed.png" alt="Brain with lightning Brain icons created by Freepik - Flaticon" className="logo" /></Link>
                <h1>Brain Cast</h1>
                <nav>
                    <ul>
                        <li><Link to="/">🏠<span>All Shows</span></Link></li>
                        <li><Link to="">🎧<span>Genre</span></Link></li>
                        <li><Link to="">🎧<span>Your Favourites</span></Link></li>
                        <li><Link to="">🔍<span>Search</span></Link></li>
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