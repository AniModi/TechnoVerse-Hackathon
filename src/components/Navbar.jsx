import React from 'react';
import "./Navbar.scss";



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_left">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" />
            </div>
            <div className="navbar_right">
                <div className="navbar_right_menu">Menu</div>
            </div>
        </div>
    );
}


export default Navbar;