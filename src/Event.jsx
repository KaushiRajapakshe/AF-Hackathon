
import React, {Component} from 'react';

import './style.css';
export default class Event extends Component {

    render() {
        return (
            <div>


            <div className={"abc"}>
                <h1 style={{marginLeft:'100px'}}>Add Event</h1>
            <form >
                <table style={{marginLeft:'0px',paddingTop:'100px'}}>

                    <tr>
                        <td>Event Name      :</td>
                        <td><input type="text" name="fullname" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                    </tr>
                    <tr style={{height:'8px'}}></tr>
                <tr>
                    <td>Event Category      :</td>
                    <td><input type="text" name="fullname" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                </tr>
                    <tr style={{height:'8px'}}></tr>
            <tr>
                <td>Description             :</td>
                <td><textarea name="description" style={{width:'364px', height:'60px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}></textarea></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td>Date                        :</td>
            <td><input type="date" name="nic" placeholder="    123456789V" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td>Far                         :</td>
            <td><input type="text" name="contact"  style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
        </tr>
                <tr style={{height:'8px'}}></tr>
        <tr>
            <td><input name="submit" type="submit" Value="Add Event" style={{width:'150px',height:'50px',backgroundColor:'#5f5e63',color:'white',borderRadius:'9px',marginTop:'10px',marginLeft:'60px'}}/></td>
<td><input name="submit" type="submit" Value="Update Event" style={{width:'150px',height:'50px',backgroundColor:'#5f5e63',color:'white',borderRadius:'9px',marginTop:'10px',marginLeft:'60px'}}/></td>
        </tr>

        </table>
    </form>
            </div>
    </div>
        )

    }
}
