import React from 'react';
import { Link } from 'react-router-dom';


function footer(){
    return (
        <div id="footer">
            <div id="footer-container" className="wrapper">
                <h4>The Cold Drip</h4>
                <ul>
                <li className="">
                 <Link to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="">
                  <Link to="/about">
                    About
                  </Link>
                </li>
                <li className="">
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="">
                  <Link to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="">
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                 </ul>

            </div>
            
        </div>        
    )
}

export default footer;