import React from 'react';
import { Link } from 'react-router-dom';
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
        background-color: gray;
        position: fixed;
        top: -2%;
        right: 0%;
        height: 101vh;
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
    return (
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
    )
}

export default Sidebar;

