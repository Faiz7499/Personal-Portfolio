import React from 'react';

function About() {
  return (
<>
< div className='aboutsection scroll-animation fade-in' id='ABOUT'>
   <div className='row'>
   
    <div className='col-12 col-lg-6 col-md-12 col-sm-12 aboutside scroll-animation'>
     <h2 className='sectionname'><span style={{fontSize:'20px',marginRight:'10px',color:'white'}}>01</span>About Me </h2>
     <br/>
     <br/>
     <p className='scroll-animation descriptivestyle' >Hello, I'm Faiz Khan, a passionate and forward-thinking individual currently in my final year pursuing a Bachelor's degree in Computer Science and Engineering. With a diverse skill set that spans across various programming languages and technologies, I've always been eager to explore and adapt to new challenges.</p>
          
          <p className='scroll-animation descriptivestyle'>As a MERN stack developer, I've honed my skills in building dynamic web applications that thrive in the fast-paced world of modern technology. But my journey doesn't stop there. I've also embarked on the exciting path of data analysis, where I eagerly delve into the world of data to unearth meaningful insights and make informed decisions.
          </p>
          <p className='scroll-animation descriptivestyle'>I am a dedicated learner, continuously expanding my horizons to stay at the forefront of the ever-evolving tech landscape. My knack for problem-solving, critical thinking, and analytical skills are my driving force in this journey.</p>
   </div>
   <div className='col-5 col-12 col-lg-6 col-md-12 col-sm-12 scroll-animation'>
    
      <div className='row' style={{marginTop:'90px'}}>
      <div className=' col-6 ' >
          <ul className='skills scroll-animation' style={{listStyleType:'none'}}>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>C</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Java</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Python</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>JavaScript</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Sql</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Git</li>
           
          </ul>
        </div>
        <div className='col-6 ' >
        <ul className='skills' style={{listStyleType:'none'}}>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>React.js</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Node.js</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Express.js</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Mongodb</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>Mysql</li>
            <li><span style={{color:'red',fontSize:'14px'}}><i class="fa-solid fa-right-long"></i></span>cloud</li>
          </ul>
      </div>
      </div>
   </div>
   </div>
   </div>
</>

  )
}

export default About;