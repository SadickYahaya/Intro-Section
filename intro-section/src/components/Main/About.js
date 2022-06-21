import React from 'react';
import { useState } from 'react';

import Sponsors from './Sponsors';
import '../Styles/About.css';

const About = () => {
    const [message, setMessage] = useState('')
    return (
        <div className='about'>
            <div className='details'>
                <h1>Make <br></br>remote work</h1>
                <p>Get your team in sync, no matter your location. <br></br>
                    Streamline processes, create team rituals, and<br></br> watch productivity soar
                </p>
                <button onClick={() => setMessage('Oops, still in construction...')}>Learn More</button>
                <p className='message'>{message}</p>
            </div>
            <div>
                <Sponsors />
            </div>
        </div>
    )
}

export default About;