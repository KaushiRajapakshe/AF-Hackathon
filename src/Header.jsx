import React, { Component } from 'react';
import logo from './icon.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo}  className="sllogo" alt="logo"/>
                <span className="ti">Sri Lankan Traveller</span>
                {/*<a href="#" class="singBut">Sign in</a>*/}
            </div>
        );
    }
}

export default Header;
