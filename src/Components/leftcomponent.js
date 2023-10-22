import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


function Leftcomponent() {
  return (
    < div className='fixedcontent scroll-animation'>
    <ul className='leftul scroll-animation'>
        <li><a href="https://www.linkedin.com/in/faiz-khan-699b2b237/" rel='_blank' target="" className='links'><i className="fa-brands fa-2x fa-linkedin-in"></i></a></li>
        <li><a href="#instagram" className='links'><i className="fa-brands fa-2x fa-instagram"></i></a></li>
        <li><a href="https://github.com/Faiz7499" className='links'><i className="fa-brands fa-2x fa-github"></i></a></li>
        <li><a href="https://twitter.com/faizk5515" className='links'><i class="fa-brands fa-2x fa-twitter"></i></a></li>
    </ul>
    </div>
  )
}

export default Leftcomponent;