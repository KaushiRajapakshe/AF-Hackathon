import React, { Component } from 'react';
import {Link} from "react-router-dom";
import k1 from './img/place2.jpg';
import k2 from './img/Event.jpg';
import k3 from './img/item.jpg';
import k4 from './img/hotel2.jpg';
import k5 from './img/regi.jpg';

import './AdminMenu.css';
import logo from "./icon.png";

class AdminMenu extends Component {
    render() {
        return (
            <div >


                <div className="title6">
                    Welcome Admin...!
                </div>
                <div className="gal6">
                    <div className="gallery6">
                        <a target="_blank" href="">

                            <Link to="/Pla"> <img src={k1} alt="k1" width="600" height="400"/></Link>

                        </a>
                        <div className="desc6">Add Places</div>
                    </div>

                    <div className="gallery6">
                        <a target="_blank" href="">
                            <Link to="/Eve"> <img src={k2} alt="k2" width="600" height="400"/></Link>
                        </a>
                        <div className="desc6"> Add Events</div>
                    </div>

                    <div className="gallery6">
                        <a target="_blank" href="">
                            <Link to="/Ite"> <img src={k3} alt="k3" width="600" height="400"/></Link>
                        </a>
                        <div className="desc6"> Add Items</div>
                    </div>

                    <div className="gallery6">
                        <a target="_blank" href="">
                            <Link to="/Hote"><img src={k4} alt="k4" width="600" height="400"/></Link>
                        </a>
                        <div className="desc6">Add Hotels</div>
                    </div>

                    <div className="gallery6">
                        <a target="_blank" href="">
                            <Link to="/reg"><img src={k5} alt="k5" width="600" height="400"/></Link>
                        </a>
                        <div className="desc6">Register</div>
                    </div>


                </div>



            </div>
        );

    }
}

export default AdminMenu;
