import React from 'react'
import Navlinks from './navlinks';

function Sidepannel(props) {
    const click=()=>{
        props.setside(false);
    }
  return (
    <div aria-hidden="true" className= {`sidepannel ${props.side ? 'active' : ''}`}>
          <div style={{textAlign:'right',marginRight:'40px',marginTop:'40px'}}><i onClick={click} class="fa-solid fa-2x fa-x"></i></div>
          <div className='sidelinkssection'>
          <Navlinks/>
          </div>
    </div>
  )
}

export default Sidepannel