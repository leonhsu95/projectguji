import React from 'react';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import styled from 'styled-components';

const MobileMenu = styled.ul`
    list-style: none;
    display: flex;
    justfy-content: space-around;
    flex-flow: row nowrap;

    li{
        padding: 10px;
        text-decoration: none;
    }

    @media screen and (max-width: 1200px){
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        flex-flow: column nowrap;
        background-color: #f2efec;
        box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
        position: fixed;
        top: -5%;
        right: 0%;
        height: 105vh;
        width: 50%;
        padding-top: 3.5rem;
        z-index: 3;
        transition: transform 0.3s ease-in-out;

        li > a{
            padding: 10px;
            text-decoration: none;
        }
    }
`;

const Sidebar = ({open}) => {
    if (Auth.loggedIn()) {
        return(
        <MobileMenu id="mobile-menu" open={open}>
            <li className="">
                <Link to="/shop">
                Shop
                </Link>
            </li>
            <li>
                <Link to="/addProduct">
                Add Product
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
            <li>
                <Link to="/orderHistory">
                    Order History
                </Link>
                </li>
                <li>
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                    Logout
                </a>
            </li>
        </MobileMenu>
        )}else{
    return (
            <MobileMenu id="mobile-menu" open={open}>
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
                Sign Up
                </Link>
            </li>
            <li className="">
                <Link to="/login">
                Login
                </Link>
            </li>
        </MobileMenu>
    )}
}

export default Sidebar;

