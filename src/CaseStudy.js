import React from 'react'
import "./CaseStudy.css"

function CaseStudy() {


    return (
        <div className = 'casestudy-container' id='case-studies'>
            <div className='background-airplane'></div>
            <div className='cs-triangle'></div>
            <div style = {{fontSize: '1.8vw', fontWeight: 'bold', marginBottom: '1%'}}>Case Studies</div>
            <div style={{width:'40%',textAlign:'center',fontSize:'1.4vw'}}>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                 Aliq uam ex odio, is the turpis accu msan congue euisque 
                 blandit dui Pelle ntesque habitant.
            </div>

            <div className = 'caseStudy-tiles-container'>
                <div className = 'caseStudy-tile'>
            
                    <div className='CS-1'></div>
                    <div style = {{textAlign:'center',fontWeight: 'bold', fontSize: '1.3vw', marginTop: '4%'}}>Isomorphic Web App</div>

                    <div style={{fontSize:'0.8vw', marginTop:'4%', textAlign:'left', width:'92%',marginLeft:'8%'}}>
                    Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div style={{display:'flex',marginTop:'5%',marginLeft:'8%',alignItems:'center',cursor:'pointer'}}>
                        <div className='about-arrow-down-sign' style={{width: '8px',transform: 'scale(0.8)'}}></div>
                        <div className='about-arrow-down-sign' style={{width: '8px',transform: 'scale(0.8)'}}></div>
                        <div style={{color: '#0e77ff',marginLeft:'2%',fontSize:'1.2vw'}}>Read More</div>
                    </div>

                </div>

                <div className = 'caseStudy-tile'>
            
                    <div className='CS-2'></div>
                    <div style = {{textAlign:'center',fontWeight: 'bold', fontSize: '1.3vw', marginTop: '4%'}}>Isomorphic Web App</div>

                    <div style={{fontSize:'0.8vw', marginTop:'4%', textAlign:'left', width:'92%',marginLeft:'8%'}}>
                    Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div style={{display:'flex',marginTop:'5%',marginLeft:'8%',alignItems:'center',cursor:'pointer'}}>
                        <div className='about-arrow-down-sign' style={{width: '7px',transform: 'scale(0.8)'}}></div>
                        <div className='about-arrow-down-sign' style={{width: '7px',transform: 'scale(0.8)'}}></div>
                        <div style={{color: '#0e77ff',marginLeft:'2%',fontSize:'1.2vw'}}>Read More</div>
                    </div>

                </div>

                <div className = 'caseStudy-tile'>
            
                    <div className='CS-3'></div>
                    <div style = {{textAlign:'center',fontWeight: 'bold', fontSize: '1.3vw', marginTop: '4%'}}>Isomorphic Web App</div>

                    <div style={{fontSize:'0.8vw', marginTop:'4%', textAlign:'left', width:'92%',marginLeft:'8%'}}>
                    Getting involved matters. Crucial causes to the if ever, come from passive action.
                    </div>

                    <div style={{display:'flex',marginTop:'5%',marginLeft:'8%',alignItems:'center',cursor:'pointer'}}>
                        <div className='about-arrow-down-sign' style={{width: '7px',transform: 'scale(0.8)'}}></div>
                        <div className='about-arrow-down-sign' style={{width: '7px',transform: 'scale(0.8)'}}></div>
                        <div style={{color: '#0e77ff',marginLeft:'2%',fontSize:'1.2vw'}}>Read More</div>
                    </div>

                </div>

                

            </div>

            <div className="viewAll-button">
                View All
            </div>
        </div>
        
    )
}

export default CaseStudy
