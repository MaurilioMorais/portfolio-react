import React from 'react';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import reactImg from '../../assets/react.png';
import photoImg from '../../assets/Photo.png';

export default function Portfolio() {
    return(
    <div className="container">   
    <ul>
        <div className="page-container">
                <img src={photoImg} alt="photo" />
                    <ul>
                         <h1>Maurilio Morais</h1>
                         <h2>React/React Native | Electron | Java | C | JavaScript | NodeJs | SqLite</h2>
                        <li>
                             <button type="button">WPP</button>
                              <button type="button">TLG</button>
                              <button type="button">GIT</button>
                              <button type="button">LKD</button>
                        </li>
                    
                     </ul>
        </div>

        <div className="bio-container">
            <h1>About me</h1>
            <h2>Currently living in Monte Sião - MG, and studying Computer Engineering at Universidade São Francisco, 
                Campus Bragança Paulista.</h2>
        </div>

        <div className="skills-container">
        <h1>My Skills</h1> 
            <ul>
                <li>
                <h1>Languages</h1>
                    <h2>JavaScript</h2>
                     <div className="progress-bar"></div> 
                     <h2>Java</h2>
                     <div className="progress-barJava"></div> 
                     <h2>C</h2>
                     <div className="progress-barC"></div> 
                     <h2>NodeJs</h2>
                     <div className="progress-barNodeJs"></div>
                     <h2>CSS</h2>
                     <div className="progress-barCSS"></div>  
                </li>
                <li>
                <h1>Frameworks and Tools</h1>
                    <h2>ReactJs</h2>
                     <div className="progress-barReactJs"></div> 
                     <h2>React Native</h2>
                     <div className="progress-barReactNative"></div> 
                     <h2>Electron</h2>
                     <div className="progress-barElectron"></div>
                     <h2>Express</h2>
                     <div className="progress-barExpress"></div>  
                </li>
                <li>
                <h1>Others</h1>
                    <h2>Frontend</h2>
                     <div className="progress-barFront"></div> 
                     <h2>Backend</h2>
                     <div className="progress-barBack"></div>
                     <h2>Mobile</h2>
                     <div className="progress-barMobile"></div>  
                     <h2>UI/UX</h2>
                     <div className="progress-barUI"></div> 
                     <h2>English</h2>
                     <div className="progress-barEnglish"></div> 
                </li>
             </ul>
         </div> 

        <div className="skills">
            <ul>
                <li className="jav">Jav</li>
                <li className="scrit">Scrit</li>
            </ul>
        </div>

        <div className="portfolio-container">

            <h1>Projects</h1>
            <ul>
                <li>
                    <img src={reactImg} alt="react" />
                    <strong>React Project</strong>
                    <p>Portfolio in React</p>
                    <button type="button">follow</button>
                </li>
                <li>
                    <img src={reactImg} alt="react" />
                    <strong>React Native Project</strong>
                    <p>Reat Native App</p>
                    <button type="button">follow</button>
                </li>
                <li>
                    <img src={reactImg} alt="react" />
                    <strong>Electron Project</strong>
                        <p>Electron</p>
                        <button type="button">follow</button>
                    </li>
            </ul>
        </div>
    </ul>
    </div>
    )
};