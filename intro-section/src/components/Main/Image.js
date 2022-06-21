import React from 'react';

import image from '../../images/image-hero-desktop.png';
import '../Styles/Image.css';

const Image = () => {
    return (
        <div className='image'>
            <img src={image} 
            alt='a black guy holding a laptop'/>     
        </div>
    )
}

export default Image;