import React from 'react'
import "./Workflow.css"

function Workflow() {


    return (
        <div className = 'workflow-container'>
            <div style = {{fontSize: '3vw', fontWeight: 'bold', marginBottom: '1%'}}>Workflow</div>
            <div style={{width:'40%',textAlign:'center',fontSize:'1.5vw'}}>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                 Aliq uam ex odio, is the turpis accu msan congue euisque 
                 blandit dui Pelle ntesque habitant.
            </div>

            <div className = 'workflow-steps-container'>
                <div className = 'workflow-steps'>
            
                    <div className='step-icon' style={{fontSize:'1.2vw'}}>STEP 1</div>
                    <div style = {{fontWeight: 'bold', fontSize: '2.1vw', marginTop: '4%'}}>Send your brief</div>
                    <div className = 'blue-bar'></div>

                    <div style={{marginTop:'4%', textAlign:'left', width:'92%',fontSize:'1.2vw'}}>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu msan congue euisque 
                        blandit dui Pelle ntesque habitant.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu
                    </div>
                </div>

                <div className = 'workflow-steps'>
                <div className='step-icon' style={{fontSize:'1.2vw'}}>STEP 2</div>
                    <div style = {{fontWeight: 'bold', fontSize: '2.1vw', marginTop: '4%'}}>Wait for delivery</div>
                    <div className = 'blue-bar'></div>

                    <div style={{marginTop:'4%', textAlign:'left', width:'92%',fontSize:'1.2vw'}}>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu msan congue euisque 
                        blandit dui Pelle ntesque habitant.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu
                    </div>
                </div>

                <div className = 'workflow-steps'>
                <div className='step-icon' style={{fontSize:'1.2vw'}}>STEP 3</div>
                    <div style = {{fontWeight: 'bold', fontSize: '2.1vw', marginTop: '4%'}}>Get your files!</div>
                    <div className = 'blue-bar'></div>

                    <div style={{marginTop:'4%', textAlign:'left', width:'92%',fontSize:'1.2vw'}}>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu msan congue euisque 
                        blandit dui Pelle ntesque habitant.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                        Aliq uam ex odio, is the turpis accu
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Workflow
