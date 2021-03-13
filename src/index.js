import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import CaseStudy from './CaseStudy';
import ContactUs from './ContactUs';
import CoreTech from './CoreTech';
import Customers from './Customers';
import Home from './Home';
import './index.css';
import Services from './Services';
import Workflow from './Workflow';
ReactDOM.render(
    
      <div>
        <Home/>
        <About/>
        <Services/>
        <Workflow/>
        <CoreTech/>
        <Customers/>
        <CaseStudy/>
        <ContactUs/>
      </div>,

  document.getElementById('root')
);

