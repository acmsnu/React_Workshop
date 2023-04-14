import React from 'react'
import '../Styles/Home.css'
import dashboard_image from '../Assets/dashboard_image.png'

function Home() {
    return (
        <div className='home_main_container'>
            <div className='home_button'>
                <p>Just Launched Ghost 3.0</p>
            </div>
            <div className='home_heading'>
                <p>Turn your audience <br /> <span className='business'>into a business</span></p>
            </div>
            <div className='home_background'></div>
            <img className='home_image' src={dashboard_image} />
        </div>
    )
}

export default Home