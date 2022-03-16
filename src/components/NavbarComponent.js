import React from 'react';
import { Nav } from 'reactstrap';

function Navbar() {
    return (
        <>
        <Nav>
            <img className="logo" alt="airbnb logo" src="assets/airbnb-logo.png"></img>
        </Nav>
        </>
    );
}

export default Navbar;