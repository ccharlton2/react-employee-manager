import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppBarStyles = styled.nav `
    box-shadow:0 0 3px 1px gray;
    padding:1rem;
    ul {
        display:flex;
        justify-content:center;
    }
    li {
        margin:0 1rem 0;
    }
    a {
        text-decoration:none;
        color:gray;
    }
    a:hover {
        color:lightpink;
    }
`

const AppBar = () => {
    return ( 
        <AppBarStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </AppBarStyles>
     );
}
 
export default AppBar;