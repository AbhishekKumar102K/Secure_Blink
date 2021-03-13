import React from 'react'
import "./About.css"

function About() {
    return (
        <div className = 'about-container' id="about">
            <div className='group-35699'></div>
            <div className='group-35650'></div>
            <div className='group-35698'></div>
            <div className='about-box'>
                <div className='about-us-line'>
                    <div className='about-us-triangle'></div>
                    <div style={{color:'#0e77ff', fontWeight: 'bold', fontSize: '1.4vw'}}>ABOUT US</div>
                </div>

                <div className='about-us-line'>
                    <div style={{color: 'black', fontWeight: 'bold', fontSize:'2vw'}}>Great Digital Agency</div>
                </div>

                <div className='about-us-line'>
                    <div style={{color: 'black', fontWeight: 'bold',fontSize:'1.2vw', marginTop:'15%'}}>
                        Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                    </div>
                </div>

                <div className='about-us-line'>
                    <div style={{color: 'black', fontSize:'1.2vw', lineHeight: '23px', marginTop:'50%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam ex odio, turpis accumsan congue. Quisque blandit dui 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada 
                        fames ac turpis egestas. In convallis porta mauris non aliquam.    
                    </div>
                </div>

                <div className='about-us-line'>
                    <div className='about-get-started'>
                        <div style={{display: 'flex', color:'#0e77ff',marginRight:'5%', fontSize:'1vw'}}>
                            Get Started
                        </div>
                        <div className='about-arrow-down-sign'></div>
                        <div className='about-arrow-down-sign'></div> 
                    </div>
                </div>




            </div>
        </div>
    )
}

export default About
