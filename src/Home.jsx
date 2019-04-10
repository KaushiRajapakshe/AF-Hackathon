import React, { Component } from 'react';
import Imgslid from "./Imgslid";
import Slimg from "./Slimg";
import Eventfooter from "./Eventfooter";
class Home extends Component {
    render() {
        return (
            <div>

                <div>
          <Imgslid />
        </div>
          <div>
            <Slimg />
          </div>
          <div style={{width:'100%'}}>
              <Eventfooter/>
          </div>
            </div>

        );
    }
}

export default Home;
