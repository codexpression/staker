import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div id="logo">
                <a href="/home">STAKER</a>
            </div>

            <button id="get-quote">GET A QUOTE</button>

            <a href="/search"><i className="fas fa-search"></i></a>
            <a href="/menu"><i className="fas fa-bars"></i></a>
        </nav>
    )
} 

export default NavBar