import React, { Component } from 'react';
import sl1 from './img/Classic-Cultural-l.jpg';
import {Link} from 'react-router-dom';
import sl2 from './img/Royal-Heritage.jpg';
import sl3 from './img/Sri-Lanka-Highlights.jpg';
import './Imgslid.css';
import './w3.css';
import logo from "./icon.png";
import './Header.css';
import './css/sa.css';

class Imgslid extends Component {
    render() {
        return (
            <div style={{width:'100%'}}>
            <div className="container" style={{width:'100%'}}>
                <img className="mySlides w3-animate-top" src={sl1} style={{width:'100%'}}/>
               {/* <img className="mySlides w3-animate-bottom" src={sl2} style={{width:'100%'}}/>
                <img className="mySlides w3-animate-top" src={sl3} style={{width:'100%'}}/>*/}
                <div className="top-left">
                    <img src={logo} className="sllogo" alt="logo"/>
                    <span className="ti">Sri Lankan Traveler</span>
                    <Link to="/log"><a href="#" className="singBut">Sign in</a></Link>

                </div>
                <div className="centered">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search..."/>
                        <a href="#" className="search_icon"><Link to="/Place"><i className="fas fa-search"></i></Link></a>
                    </div>
                </div>
            </div>

            </div>

        );
    }
}

export default Imgslid;
