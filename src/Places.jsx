import React, { Component } from 'react';

import k1 from './img/places.jpg';
import k2 from './img/Event.jpg';
import k3 from './img/item.jpg';
import k4 from './img/hotel.jpg';
import k5 from './img/light.jpg';
import k6 from './img/poson.jpg';
import k7 from './img/vesak.jpg';
import './Places.css';
import logo from "./icon.png";

class Places extends Component {
    render() {
        return (
            <div>
                {/*<div className="navbar">
                    <img src={logo}  className="sllogo" alt="logo"/>

                </div>*/}
                <div className="title">
                 Searched Place: Kandy
                </div>
<div className="gal">
                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={k1} alt="k1" width="600" height="400"/>
                    </a>
                    <div className="desc">Places</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={k2} alt="k2" width="600" height="400"/>
                    </a>
                    <div className="desc">Events</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={k3} alt="k3" width="600" height="400"/>
                    </a>
                    <div className="desc">Items</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="">
                        <img src={k4} alt="k4" width="600" height="400"/>
                    </a>
                    <div className="desc">Hotels</div>
                </div>


</div>
            <div className="para">
            Kandy is a major city in Sri Lanka located in the Central Province. It was the last capital of the ancient kings' era of Sri Lanka. The city lies in the midst of hills in the Kandy plateau, which crosses an area of tropical plantations, mainly tea. Kandy is both an administrative and religious city and is also the capital of the Central Province. Kandy is the home of The Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most sacred places of worship in the Buddhist world. It was declared a world heritage site by UNESCO in 1988.
        </div>

                <div className="gal">
                    <div className="gallery">
                        <a target="_blank" href="">
                            <img src={k2} alt="k2" width="600" height="400"/>
                        </a>
                        <div className="desc">Asela Perahera</div>
                    </div>

                    <div className="gallery">
                        <a target="_blank" href="">
                            <img src={k5} alt="k5" width="600" height="400"/>
                        </a>
                        <div className="desc">Festival of lights </div>
                    </div>

                    <div className="gallery">
                        <a target="_blank" href="">
                            <img src={k6} alt="k6" width="600" height="400"/>
                        </a>
                        <div className="desc">Poson Poya Festival </div>
                    </div>

                    <div className="gallery">
                        <a target="_blank" href="">
                            <img src={k7} alt="k7" width="600" height="400"/>
                        </a>
                        <div className="desc">Vesak Poya Festival </div>
                    </div>


                </div>
            </div>
        );

    }
}

export default Places;
