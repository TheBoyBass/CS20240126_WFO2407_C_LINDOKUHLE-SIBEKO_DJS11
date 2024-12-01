import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isGenreDropDownOpen, setGenreDropDownOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleGenreDropdown = () => {
        setGenreDropDownOpen(!isGenreDropDownOpen);
    };
    return (
        <header className="header">
            <div className="header-content">
                <Link className='site-logo'><img src="/paralyzed.png" alt="Brain with lightning Brain icons created by Freepik - Flaticon" className="logo" /></Link>
                <h1>Brain Cast</h1>
                <nav>
                    <ul>
                        <li><Link to="/">🏠<span>All Shows</span></Link></li>
                        <li className='Genre-area' onClick={toggleGenreDropdown}><Link to="">🎧<span>Genre</span></Link></li>
                        {isGenreDropDownOpen && (
                            <div className="dropdown-Genre-menu">
                                <ul className='Genre-List'>
                                    <li className='Genre-List-Item'><a href="#">Personal Growth</a></li>
                                    <li className='Genre-List-Item'><a href="#">Investigative Journalism</a></li>
                                    <li className='Genre-List-Item'><a href="#">History</a></li>
                                    <li className='Genre-List-Item'><a href="#">Comedy</a></li>
                                    <li className='Genre-List-Item'><a href="#">Entertainment</a></li>
                                    <li className='Genre-List-Item'><a href="#">Business</a></li>
                                    <li className='Genre-List-Item'><a href="#">Fiction</a></li>
                                    <li className='Genre-List-Item'><a href="#">News</a></li>
                                    <li className='Genre-List-Item'><a href="#">Kids and Family</a></li>

                                </ul>
                            </div>
                        )}
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