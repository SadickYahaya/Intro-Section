import React from 'react';

import Logo from './Logo';
import Navbar from './Navbar';
import '../Styles/Header.css'


const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header;