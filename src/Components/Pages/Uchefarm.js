import React from 'react';
import '../Styles/Farmer.css';

import Uche1 from '../../Components/Assets/uche1.png';
import Uche2 from '../../Components/Assets/uche2.png';
import AboutProject from '../../Components/Assets/about-project-img.png';
import Apps from '../Review/Apps';
import Projects from './Projects';
import ProgressBar from '../ProgressBar/ProgressBar';

function Uchefarm() {
    return (
        <div className="farmers-main-div" id='uchefarm'>
            <div className="farmers-div-1">
                <div className="adaobi-profile-left">
                    <img className="adaobi-prof-img" src={Uche1} alt="" />
                    
                    <div className="adaobi-profile-images">
                        <img className="adaobi-profile-img" src={Uche2} alt="" />
                        <img className="adaobi-profile-img" src={Uche2} alt="" />
                        <img className="adaobi-profile-img" src={Uche2} alt="" />
                    </div>
                </div>
                

                <div className="adaobi-profile-right">
                    <h1 className="adaobi-profile-h1">Uche Cassava Farm</h1>

                    <p className="adaobi-profile-pragraph-text">Mechanized cassava farm with dryer and grinder for processing</p>

                    <h3 className="adaobi-profile-needed
                    ">Needed: 200000 Naira<p></p><ProgressBar value={38} max={100}/></h3>

                    <h5 className="adaobi-profile-raised">Raised: 180000 Naira</h5>

                    <a className="consultancy-acrotag" href="#consultancy"><button className="profile-fund-project-button">Fund this project</button><span> </span>Offer Consultancy</a>                    
                </div>
            </div>

            <div className="farmer-auxil-div">
                <div className="farmers-prim-div">
                    <ul>
                        <li className="about-project-text">About Project</li>

                        <li className="updates-text">Updates</li>
                    </ul>

                    <p className="about-projects-paragraph-text">When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support. When I first heard of farm fund I was sceptical cause I had tried out similar services in the past and my experience with them was not pleasant at all. Either they have issues with funding the farm or they tend to take full control of your farm and 90% of all profits made from your produce. With farm fund, I retained full control of my farm and got full time consultancy support.</p>

                    <img className="about-project-img" src={AboutProject} alt="" />
                    
                    <div className="project-undered-lists">
                        <ul>
                            <li>Irigation System</li>
                            <li>1 Tractor</li>
                            <li>2 Plaws</li>
                            <li>3 Dryers</li>
                            <li>1 Rice per Boiler</li>
                            <li>Sealing Machine</li>
                        </ul>
                    </div>
                </div>

                <div className="farmers-sec-div">
                    <h4 className="reviews-text">Reviews</h4>
                    <Apps />
                </div>
            </div>

            <div className="projects-div">
                <h1 className="similar-projects-text">Similar Projects</h1>

                <div className="farmer-projects-div">
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Uchefarm;
