import React, {useState} from 'react'
import "./Services.css"

function Services() {

    const [service, setService] = useState('Web Development')    

    return (
        <div className = 'services-container' id='services'>
            <div style={{display: 'flex', flexDirection: 'row',width: '100%', height: '100%'}}>
                
                
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '50%', height: '60vw', backgroundColor: 'white'}}>
                    
                <div className='services-box'>
                    <div className='services-line'>
                        <div className='services-triangle'></div>
                        <div style={{color:'#0e77ff', fontWeight: 'bold', fontSize: '1.2vw'}}>OUR SERVICES</div>
                    </div>

                     <div className='services-line'>
                        <div style={{color: 'black', fontWeight: 'bold', fontSize:'2vw'}}>Transforming your ideas into Reality</div>
                    </div>

                    <div className='services-button-container'>
                        <div className = {service==='Web Development'? 'services-button sb-active': 'services-button'} onClick = {()=>setService('Web Development')}>Web Development</div>
                        <div className = {service==='Mobile Development'? 'services-button sb-active': 'services-button'} onClick = {()=>setService('Mobile Development')}>Mobile Development</div>
                        <div className = {service==='UI/UX Designing'? 'services-button sb-active': 'services-button'} onClick = {()=>setService('UI/UX Designing')}>UI/UX Designing</div>
                        <div className = {service==='Branding'? 'services-button sb-active': 'services-button'} onClick = {()=>setService('Branding')}>Branding</div>
                        <div className = {service==='Cloud Technology'? 'services-button sb-active': 'services-button'} onClick = {()=>setService('Cloud Technology')}>Cloud Technology</div>
                    </div>

                    </div>

                </div>



                <div style={{display: 'flex', alignItems: 'center', alignContent:'center', justifyContent: 'flex-end', width: '50%', height: '60vw'}}>
                    <div style={{display:'flex',justifyContent:'flex-end', height: '100%', width: '100%'}}>
                        <div className='blue-rect'></div>
                    </div>

                    <div className = "UIUX-box">
                        <div style={{width: '90%', height: '100%', marginLeft: '5%'}}>
                            <div className = 'UIUX-line-1'>
                                <div className='group-35621'></div>
                                <div style={{fontSize:'2.5vw',fontWeight: 'bold'}}>{service}</div>
                            </div>
                            <div style={{color: 'black',marginTop: '1vw', lineHeight: '2vw', marginBottom: '2vw', fontSize:'1.3vw'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam ex odio, turpis accumsan congue. Quisque blandit dui 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada 
                                fames ac turpis egestas. In convallis porta mauris non aliquam.    
                            </div>

                            <div className='UIUX-point'>
                                <div className='green-tick'></div>
                                <div style={{fontSize:'1.3vw'}}>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.</div>
                            </div>

                            <div className='UIUX-point'>
                                <div className='green-tick'></div>
                                <div style={{fontSize:'1.3vw'}}>Lorem ipsum dolor sit amet,</div>
                            </div>

                            <div className='UIUX-point'>
                                <div className='green-tick'></div>
                                <div style={{fontSize:'1.3vw'}}>conse ctetur adipi scing elit.</div>
                            </div>

                            <div className='UIUX-point'>
                                <div className='green-tick'></div>
                                <div style={{fontSize:'1.3vw'}}>Lorem ipsum dolor sit amet, conse ctetur</div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            </div>
            
        
        </div>
    )
}

export default Services
