import React from 'react'
import './Home.css'
import { Link } from 'react-scroll';

function Home() {
    return (
        <div className='home-container'>
            <div className='rocket-union1'></div>
            <div className='header-nav'>
                <div className='header-start'>
                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>Logo</div>
                    </div>
                </div>
                <div className='header-end'>
                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>
                            <Link to="about" activeClass="active" spy={true} smooth={true}>
                                About
                            </Link>
                        </div> 
                    </div>

                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>
                            <Link to="services" activeClass="active" spy={true} smooth={true}>
                                Services
                            </Link>
                        </div> 
                    </div>

                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>
                            <Link to="case-studies" activeClass="active" spy={true} smooth={true}>
                                Case Studies
                            </Link>
                        </div> 
                    </div>

                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>
                            <Link to="testimonials" activeClass="active" spy={true} smooth={true}>
                                Testimonials
                            </Link>
                        </div> 
                    </div>

                    <div className='header-button'>
                        <div style={{display:'flex',alignSelf:'center'}}>
                            <Link to="contact-us" activeClass="active" spy={true} smooth={true}>
                                ContactUs
                            </Link>
                        </div> 
                    </div>

                    <div className='header-button login-button'>
                        <div className='login-text'>
                            Login
                        </div>
                    </div>
                </div>
            </div>

            <div className = 'home-content-big'></div>
            <div className = 'home-content-small'></div>

            <div className = "home-get-started">
                <div style={{display: 'flex', marginRight: '6px'}}>
                    Get Started
                </div>
                <div className='home-arrow-down-sign'></div>
                <div className='home-arrow-down-sign'></div> 
            </div>

            <div className = 'triangle-37501-1'></div>
            <div className = 'triangle-37501-2'></div>
            <div className = 'triangle-37502'></div>
            <div className = 'triangle-37484'></div>
            <div className = 'triangle-37485'></div>
            <div className = 'triangle-37459-1'></div>
            <div className = 'triangle-37459-2'></div>
            <div className = 'triangle-37489-1'></div>
            <div className = 'triangle-37489-2'></div>
            <div className = 'triangle-37482-1'></div>
            <div className = 'triangle-37482-2'></div>
            <div className = 'triangle-37500'></div>
            <div className = 'triangle-37488'></div>
            <div className = 'triangle-37483'></div>

            <div className = 'ellipse-223'></div>
            
        </div>
    )
}

export default Home
