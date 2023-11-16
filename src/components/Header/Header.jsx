import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <div className="header">
                <div className="header-title">
                    <Link to='/' style={{ textDecoration: "none", color: "white" }}>
                        <h1>Zensphinx</h1>
                    </Link>
                </div>
                <div className="header-button">
                    <Link to='/logout' style={{ textDecoration: "none", color: "white" }}>
                        <a className='header-btn'>Logout</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Header;