
import React, {Component} from 'react';

import './style.css';
import {Link} from "react-router-dom";
export default class login extends Component {

    render() {
        return (
            <div className={"abc"}>


                <div className={"abc"}>

                    <h1 name="Register"  style={{ color: 'Black', borderRadius: '9px', marginTop: '10px', marginLeft: '250px'}}>Login</h1>

                    <form >
                        <table style={{marginLeft:'0px',paddingTop:'90px'}}>


                            <tr>
                                <td>Username:</td>
                                <td><input type="text" name="username" placeholder=" Username" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>


                            <tr>
                                <td>Password:</td>
                                <td><input type="password" name="password" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'40px'}}></tr>

                            <tr><th></th>
                                <th ><div className={"asd"}><Link to="/AdminMen"><input name="submit" type="Submit" value="Login" style={{width: '90px', height: '50px', backgroundColor: '#5f5e63', color: 'white', borderRadius: '9px', marginTop: '10px', marginLeft: '160px'}}/></Link></div>
                                </th></tr>

                        </table>
                    </form>

                </div>
            </div>
        )

    }
}
