import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css';

const Heading = () => {
    return (
        <div>
         <ul className='list-items'>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/AboutUs' ><li>About us</li></Link>
            <Link to='/ContactUs' ><li>Contact Us</li></Link>
             
         </ul>

        </div>


    )
}

export default Heading; 