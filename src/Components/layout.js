
import React from 'react';
import Leftcomponent from './leftcomponent';
import Header from './header';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import { Element } from 'react-scroll';


function Layout(props) {
  props.setnn(20);
  props.setnn(40);
  
  return (
    <div className="app-layout">
     
      <Element name="example" >
      <Leftcomponent />
      <div className="main-content scroll-animation">
      <Header setnn={props.setnn} />
      <About />
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
      </Element>
    
    </div>
  );
}

export default Layout;
