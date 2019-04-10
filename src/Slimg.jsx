import React, { Component } from 'react';
import sl from './img/sl_map-larg.png';
import './App.css';

class Slimg extends Component {
    render() {
        return (
            <div className="imgmain" align="center">
                <img src={sl} alt="Srilankamap" style={{width:'60%'}}/>
            </div>
        );
    }
}

export default Slimg;
