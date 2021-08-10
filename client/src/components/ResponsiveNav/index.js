import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Burger from './Burger';

// import Auth from "../../utils/auth";

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: 2px #f1f1f1 solid;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    #logo{
        padding: 15px 0;
    }
`;

function ResponsiveNav() {
    return (
        <Nav>
            <div id="logo">
            <Link to="/">
                Logo
            </Link>
            </div>
            < Burger />
            
        </Nav>
    )
}
export default ResponsiveNav;
