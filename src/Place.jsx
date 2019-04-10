
import React, {Component} from 'react';

import './style.css';
export default class AppContainer extends Component {

    render() {
        return (
            <div>


                <div className={"abc"}>
                    <h1 style={{marginLeft:'100px'}}>Add Place</h1>
                    <form >
                        <table style={{marginLeft:'0px',paddingTop:'100px'}}>

                            <tr>
                                <td>Place Name          :</td>
                                <td><input type="text" name="fullname" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td>Far                 :</td>
                                <td><input type="text" name="fullname" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td>Address             :</td>
                                <td><textarea name="description" style={{width:'364px', height:'60px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}></textarea></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td>Description          :</td>
                                <td><input type="text" name="nic" style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td>Entrance Fee          :</td>
                                <td><input type="text" name="contact"  style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td>Contact Number          :</td>
                                <td><input type="text" name="contact"  style={{width:'364px', height:'30px',paddingLeft:'16px',borderRadius:'5px',marginLeft:'55px'}}/></td>
                            </tr>
                            <tr style={{height:'8px'}}></tr>
                            <tr>
                                <td><input name="submit" type="submit" Value="Add Place" style={{width:'150px',height:'50px',backgroundColor:'#5f5e63',color:'white',borderRadius:'9px',marginTop:'10px',marginLeft:'60px'}}/></td>
                                <td><input name="submit" type="submit" Value="Update Place" style={{width:'150px',height:'50px',backgroundColor:'#5f5e63',color:'white',borderRadius:'9px',marginTop:'10px',marginLeft:'60px'}}/></td>
                            </tr>

                        </table>
                    </form>
                </div>
            </div>
        )

    }
}
