import React from 'react'
import logo from '../Assets/logo_website.png'
import hamburger_website from '../Assets/hamburger_website.png'
import '../Styles/Navbar.css'

function Navbar() {
    const [showNav, setShowNav] = React.useState(false)
    return (
        <div className='navbar_main_container'>
            <div className='phone_container'>
                <div className='logo_container'>
                    <img src={logo} />
                </div>
                <img onClick={() => { setShowNav(!showNav) }} className='hamburger' src={hamburger_website} />

            </div>
            <div className={'list_signup ' + (showNav && 'active')}>
                <div className='list_container'>
                    <p>Product</p>
                    <p>Resource</p>
                    <p>Pricing</p>
                    <p>Explore</p>
                </div>
                <div className='signup_container'>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar