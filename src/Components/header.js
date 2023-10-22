import React from 'react';
import '../ourCustom.css';


function Header(props) {
  props.setnn(60);
  return (
   < div className='headd fade-in ' id='HEADER'>
   <div className='row'>
  
    <div className='col-lg-7 col-md-12 col-sm-12 col-12  hmiddle'>
    <h4 className='fontstylee scroll-animation'>Hey,! I'M </h4>
    <h1  className='fontstylee scroll-animation' style={{fontSize:"70px",fontWeight:'600'}}>Faiz Khan</h1>
  
    <h2 className='fontstylee scroll-animation' style={{fontWeight:'600',fontSize:'35px'}}>Software Engineer Who Develops.</h2>
    <br/>
  
    
  <div style={{paddingRight:'50px',textAlign:'justify'}}>
  <h6 >I am a undergraduate at PESCOE pursuing B.tech in Computer Science and Engineering who Develops , Design And Analyse ! <p style={{fontSize:'30px'}}>Love What I do .</p></h6>
  </div>
    <br/>
    <br/>

    <button className='btnstructure'>Contact Me</button>

   </div>
   <div className='col-4 col- col-lg-4 col-md-12 col-sm-12 sideimagecontaiener'>
     <img id='sideimagec'  height='500px' width='500px' src="/images/backgoudnimag.jpg" alt="not availabe"/>
   </div>
   </div>
   { props.setnn(100)}
   </div>
   
  )

}

export default Header;
