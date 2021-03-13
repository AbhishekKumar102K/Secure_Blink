import React from 'react'
import "./ContactUs.css"

function ContactUs() {
    return (
        <div className='contact-us-container' id='contact-us'>
            <div style={{height:'100%',width:'100%',display:'flex',alignItems:'flex-end',zIndex:'0'}}>
                <div className='footer-background'></div>   
                <div className='group-35686'></div>

                <div className='footer-container'>
                    <div style={{width:'40%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    
                        <div style={{display:'flex',width:'60%',height:'70%',alignItems:'flex-start',flexDirection:'column'}}>
                            
                            <div style={{color:'white',opacity:'0.8',fontSize:'1.0vw'}}>
                                Lorem Finaldream rure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore e uis nostrud 
                                exercitation isi ut aliquip ex ea commodo consequat.
                            </div>

                            <div className='social-icons-container'>
                                <div className='fb-icon'></div>
                                <div className='twitter-icon'></div>
                                <div className='insta-icon'></div>
                            </div>
                        </div>

                    </div>

                    <div className='footer-col'>
                        <div className='footer-col-heading'>Our Services</div>
                        <div className='footer-col-bar'/>
                        <div className='footer-col-point'>Web Development</div>
                        <div className='footer-col-point'>Mobile Development</div>
                        <div className='footer-col-point'>Cloud Technologies</div>
                        <div className='footer-col-point'>UI/UX Designs</div>
                    </div>
                    
                    <div className='footer-col'>
                        <div className='footer-col-heading'>Our Links</div>
                        <div className='footer-col-bar'/>
                        <div className='footer-col-point'>Terms & Condition</div>
                        <div className='footer-col-point'>Privacy Policy</div>
                        <div className='footer-col-point'>Imprint</div>
                        <div className='footer-col-point'>Legal</div>
                    </div>

                    <div className='footer-col'>
                        <div className='footer-col-heading' style={{marginLeft:'12%'}}>Contact Us</div>
                        <div className='footer-col-bar' style={{marginLeft:'13%'}}/>
                        <div className='footer-col-point' style={{display:'flex',fontSize:'0.9vw'}}>
                            <div className='location-icon'></div>
                            Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.
                        </div>

                        <div className='footer-col-point' style={{display:'flex',fontSize:'0.9vw'}}>
                            <div className='telephone-icon'></div>
                            00 1800 245 453
                        </div>

                        <div className='footer-col-point' style={{display:'flex',fontSize:'0.9vw'}}>
                            <div className='mail-icon'></div>
                            hello@inkyy.com
                        </div>
                    </div>


                </div>
            </div>

            <div style={{position:'absolute',display:'flex',width:'40%',height:'100%',zIndex:'1',marginRight:'15%'}}>
                <div className = 'send-us-msg'>
                    <div style={{display:'flex',flexDirection:'column',width:'80%',height:'90%'}}>
                        
                        <div style={{fontWeight:'bold',fontSize:'2vw',marginBottom:'5%'}}>Send Us message</div>
                        
                        <input placeholder = 'Your Email*' className='input-field'></input>
                        <div className='h-line'></div>

                        <input placeholder = 'Your Name*' className='input-field'></input>
                        <div className='h-line'></div>

                        <input placeholder = 'Phone Number*' className='input-field'></input>
                        <div className='h-line'></div>

                        <input placeholder = 'Subject' className='input-field'></input>
                        <div className='h-line'></div>

                        <textarea placeholder = 'Your Message' className='input-field your-msg' style={{height:'70px',overflow:'wrap'}}></textarea>
                        <div className='h-line' style={{marginTop:'10%',marginBottom:'0'}}></div>

                        <div style={{display:'flex',alignItems:'center'}}>
                            <input type="checkbox" style={{width:'1.5vw',height:'1.5vw',marginTop:'7%'}}/>
                            <div style={{display:'flex',alignItems:'center',width:'60%',height:'30px',fontSize:'0.85vw',marginTop:'7%',marginLeft:'2%'}}>
                                By sending this message, you confirm that you 
                                have read and agreed to our privacy-policy.
                            </div>
                        </div>


                        <div className='contact-us-get-started'>
                            <div style={{color:'white',marginRight:'2%',fontSize:'1.2vw'}}>Get Started</div>
                            <div className='contact-us-arrows'></div>
                            <div className='contact-us-arrows'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
