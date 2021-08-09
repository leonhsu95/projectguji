import React from 'react';
import { Link } from 'react-router-dom';

const fcc = "footer-bar, wrapper";

function footer(){
    return (
        <div id="footer">
            <h4 className="wrapper">The Cold Drip</h4>
            <div id="footer-container" className="wrapper">
                
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
                <ul>
                    <li className="">
                    <Link to="/shop">
                        Shipping
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/about">
                        Return
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/contact">
                        Payments
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/signup">
                        Contact
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li className="">
                    <Link to="/shop">
                        Blends
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/about">
                        Quality
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/contact">
                        Supplies
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/signup">
                        Beans
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li className="">
                    <Link to="/shop">
                        Terms and Conditions
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/about">
                        Privacy Policy
                    </Link>
                    </li>
                    <li className="">
                    <Link to="/contact">
                        Returns and Refunds
                    </Link>
                    </li>
                </ul>

            </div>

            <div className={fcc}>
                <div id="copy">© 2021 Leon Hsu (leonhsu95) | All Rights Reserved.</div>
            </div>
            
        </div>        
    )
}

export default footer;