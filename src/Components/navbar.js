import React from 'react';
import '../App.css';
import '../ourCustom.css';
import Sidepannel from './sidepannel';
import { useState,useEffect } from 'react';


function Navbar() {
  
  const[side,setside]=useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const click=()=>{
    if (side===false) {
      setside(true);
    }
    else{
      setside(false);
    }
  }
  

  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <>
     <div class="navbar fade-in">
     <ul className={`navul `}>
  <li className='Topname'  ><a href="#HEADER">Faiz</a></li>
  
      <li className='navsbtn'><a href="/images/faizResume2.pdf">Resume</a></li>
      <li className='navsbtn'><a href="#CONTACT">Contact</a></li>
      <li className='navsbtn'><a href="#PROJECT">Projects</a></li>
      <li className='navsbtn'><a href="#EXPERINCE">Experience</a></li>
      <li className='navsbtn'><a class="active" href="#ABOUT"> About</a></li>

  <li onClick={click} style={{float:'right',marginRight:'30px',padding:'20px'}} className='menubar'><i class="fa-solid fa-2x fa-bars"></i></li>
</ul>

 {side && <Sidepannel side={side}   setside={setside}/>}

  
    </div>
   </>
  )

}

export default Navbar;