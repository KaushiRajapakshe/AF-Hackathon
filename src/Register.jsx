
import React, {Component} from 'react';
import './style.css';

export default class Register extends Component {

    render() {
        return (
            <div>

            <div className={"abc"}>

                <h1 name="Register"  style={{ color: 'Black', borderRadius: '9px', marginTop: '10px', marginLeft: '120px'}}>Register New User</h1>

                <form >
                <table style={{marginLeft:'0px',paddingTop:'90px'}}>

                    <tr>
                        <td>Full Name:</td>
                        <td><input type="text" name="fullname" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                    </tr>
                    <tr style={{height:'8px'}}></tr>
                    <tr>
                        <td>Username:</td>
                        <td><input type="text" name="username" placeholder=" Username" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                    </tr>
                    <tr style={{height:'8px'}}></tr>
        <tr>
            <td>NIC:</td>
            <td><input type="text" name="nic" placeholder="123456789V" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td>Contact Number:</td>
            <td><input type="text" name="contact" placeholder="0770000000" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td>Password:</td>
            <td><input type="password" name="password" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td>Confirm Password:</td>
            <td><input type="password" name="cpassword" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'40px'}}></tr>

                    <tr><td></td>
                    <td ><div className={"asd"}><input name="submit" type="Submit" value="Register"  style={{width: '160px', height: '50px', backgroundColor: '#5f5e63', color: 'white', borderRadius: '9px', marginTop: '10px', marginLeft: '160px'}}/>
                    </div> </td></tr>

        </table>
    </form>

            </div>
    </div>
        )

    }
}
