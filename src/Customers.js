import React from 'react'
import "./Customers.css"

function Customers() {


    return (
        <div className = 'customers-container' id='testimonials'>
            <div className='group-35649'></div>
            <div className='group-35648'></div>
            <div className = 'blue-box-frame'>
                <div className = 'circle-frame'>
                    <div className = 'ellipse-216'></div>
                </div>
            </div>

            <div className='customers-body'>
                <div style={{display:'flex',marginLeft:'10%',flexDirection:'column',width:'80%',height:'40vw'}}>
                    <div className='customers-line'>
                        <div className='customers-triangle'></div>
                        <div style={{color:'#0e77ff', fontWeight: 'bold', fontSize: '1.3vw'}}>SELECTED CUSTOMERS</div>
                    </div>

                    <div style={{width:'50%', fontSize:'1.8vw',fontWeight:'bold',marginTop:'2%'}}>
                        Check what our client say about us
                    </div>

                    <div style={{fontSize:'1vw', width:'70%',lineHeight:'2.5vw',marginTop:'5%'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac 
                    turpis egestas. In convallis porta mauris non aliquam.
                    </div>

                    <div className='logo-container' style={{marginLeft:'-1%',height:'10vw',width:'17%',marginTop:'5%',border:'none'}}><div className='logo-props react-logo'></div></div>

                    <div className='group-35601'></div>

                </div>
            </div>

        </div>
        
    )
}

export default Customers
