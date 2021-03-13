import React from 'react'
import "./CoreTech.css"

function CoreTech() {


    return (
        <div className = 'coretech-container'>
            <div className='group-35700'></div>
            <div style = {{marginRight:'1%', fontSize: '3vw', fontWeight: 'bold', marginBottom:'2%'}}>Core Technologies</div>
            <div style={{width:'40%',textAlign:'center',fontSize:'1.5vw'}}>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                 Aliq uam ex odio, is the turpis accu msan congue euisque 
                 blandit dui Pelle ntesque habitant.
            </div>

            <div className='coretech-categories'>
                <div style={{fontSize:'1.3vw', cursor:'pointer'}}>Design</div>
                <div style={{border:'1px solid #707070', height:'50%',backgroundColor:'grey'}}></div>
                <div style={{color: '#0e77ff', opacity:'0.8',fontSize:'1.3vw', cursor:'pointer'}}>Development</div>
                <div style={{border:'1px solid #707070', height:'50%',backgroundColor:'grey'}}></div>
                <div style={{fontSize:'1.3vw', cursor:'pointer'}}>Marketing</div>
            </div>

            <div className='icons-container'>
                <div className='logo-container'><div className='logo-props react-logo'></div></div>
                <div className='logo-container' style={{backgroundColor:'#0e77ff'}}><div className='logo-props aws-logo-dark'></div></div>
                <div className='logo-container'><div className='logo-props mask-logo'></div></div>
                <div className='logo-container'><div className='logo-props redux-logo'></div></div>
                <div className='logo-container'><div className='logo-props js-logo'></div></div>
                <div className='logo-container'><div className='logo-props sf-logo'></div></div>
                <div className='logo-container'><div className='logo-props aws-logo-light'></div></div>
                <div className='logo-container'><div className='logo-props sf-logo'></div></div>
                <div className='logo-container'><div className='logo-props redux-logo'></div></div>
                <div className='logo-container'><div className='logo-props node-logo'></div></div>
                <div className='logo-container'><div className='logo-props path3-logo'></div></div>
                <div className='logo-container'><div className='logo-props react-logo'></div></div>
                <div className='logo-container'><div className='logo-props js-logo'></div></div>
                
               
            </div>
        </div>
        
    )
}

export default CoreTech
