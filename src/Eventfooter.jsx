import React, { Component } from 'react';
import k5 from './img/light.jpg';
import k2 from './img/Event.jpg';
import k6 from './img/poson.jpg';
import k7 from './img/vesak.jpg';
import './Places.css';


import './App.css';
import './Eventfooter.css';


class Eventfooter extends Component {
    render() {
        return (
            <div className="gal23"  >
                <div className="gallery23">
                    <a target="_blank" href="">
                        <img src={k5} alt="k1" width="600" height="400"/>
                    </a>
                    <div className="desc23">Festival of lights</div>
                </div>

                <div className="gallery23">
                    <a target="_blank" href="">
                        <img src={k2} alt="k2" width="600" height="400"/>
                    </a>
                    <div className="desc23">Asela Perahera</div>
                </div>

                <div className="gallery23">
                    <a target="_blank" href="">
                        <img src={k6} alt="k3" width="600" height="400"/>
                    </a>
                    <div className="desc23">Poson Poya Festival</div>
                </div>

                <div className="gallery23">
                    <a target="_blank" href="">
                        <img src={k7} alt="k4" width="600" height="400"/>
                    </a>
                    <div className="desc23">Vesak Poya Festival</div>
                </div>


            </div>
        );
    }
}

export default Eventfooter;


