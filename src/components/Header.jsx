import React from 'react';
import '../styles/Header.css'; // Optional: if you want to style it separately

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src="/paralyzed.png" alt="Brain with lightning Brain icons created by Freepik - Flaticon" className="logo" />
                <h1>Brain Cast</h1>
                <nav>
                    <ul>
                        <li><a href="#">🏠<span>All Shows</span></a></li>
                        <li><a href="#">🎧<span>Genre</span></a></li>
                        <li><a href="#">🔍<span>Search</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;