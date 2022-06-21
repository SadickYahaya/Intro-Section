import React from 'react';

import About from './About';
import Image from './Image';
import '../Styles/Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div>
                <About />
            </div>
           <div>
                <Image />
           </div>
        </div>
    )
}

export default Main;