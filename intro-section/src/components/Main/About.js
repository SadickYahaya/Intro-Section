import React from 'react';

import Sponsors from './Sponsors';
import '../Styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='details'>
                <h1>Make <br></br>remote work</h1>
                <p>Get your team in sync, no matter your location. <br></br>
                    Streamline processes, create team rituals, and<br></br> watch productivity soar
                </p>
                <button>Learn More</button>
            </div>
            <div>
                <Sponsors />
            </div>
        </div>
    )
}

export default About;