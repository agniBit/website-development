import React from "react"
import '../css/mainSection.scss'

function MainSection() {
    return(
        <div className='mainSection' id='mainSection'>
            <div className='mainSectionWrapper'>
                <div className='textBox'>
                    <h1>Get yout very own stunning website & grow your business</h1>
                </div>
                <div className='imageContainer'>
                    <div className='imageBox'>
                        <img className='webImage' src='./assests/porfolioWebSS.png' alt='webimage' />
                    </div>
                </div>
                <div className='mobileImageWrapper'>
                    <img className='mobileImage' src='./assests/portfolioMobile.jpg' alt='mobileVersion' />
                </div>
            </div>
        </div>
    );
}

export default MainSection;