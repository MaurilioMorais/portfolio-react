import React from 'react';
import {FaWhatsapp, FaTelegram, FaLinkedin, FaGithub, FaLink} from 'react-icons/fa';

import './styles.css';

import reactImg from '../../assets/react.png';
import photoImg from '../../assets/Photo.png';
import Port from '../../assets/React-Portfolio.png';


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
                            <a href="https://api.whatsapp.com/send?phone=5535992012025"><FaWhatsapp size={30} color="EFEFEF" /></a>
                            <a href="https://t.me/maurilio_morais"><FaTelegram size={30} color="EFEFEF" /></a>
                            <a href="https://www.linkedin.com/in/mauriliomorais/"><FaLinkedin size={30} color="EFEFEF" /></a>
                            <a href="https://github.com/MaurilioMorais"><FaGithub size={30} color="EFEFEF" /></a>
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

        <div className="portfolio-container">

            <h1>Projects</h1>
            <ul>
                <li>
                    <img src={Port} alt="portfolio" />
                    <div className="project-links">
                        <div className="aoba">
                        <strong>Projeto Portfólio</strong>
                        <p>ReactJs + CSS</p>
                        </div>

                     <div className="ospra">
                        <a href="https://github.com/MaurilioMorais/portfolio-react"><FaGithub size={30} color="EFEFEF" /></a>
                        <a href="http://maurilio.dev.br/"><FaLink size={30} color="EFEFEF" /></a>
                     </div>
                    </div>
                    
                    
                    
                </li>
            </ul>
        </div>
    </ul>
    </div>
    )
};