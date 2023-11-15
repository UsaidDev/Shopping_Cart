import React from 'react'
import './Header.css';

function header() {
    return (
        <div>
            <div className="header">
                <div className="header-title">
                    <h1>Zensphinx</h1>
                </div>
                <div className="header-button">
                    <a className='header-btn'>Click here</a>
                </div>
            </div>
        </div>
    )
}

export default header