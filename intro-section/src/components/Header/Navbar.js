import React from 'react';

import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navMenu'>
            <ul>
                <li>Features</li>
                <li>Company</li>
                <li>Career</li>
                <li>About</li>
            </ul>
            </div>
            <div className='navButtons'>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Navbar;