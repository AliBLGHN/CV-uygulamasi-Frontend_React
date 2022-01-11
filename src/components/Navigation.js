import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" >
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link class="btn btn-info d-inline m-2 bg-dark text-white" to="/adminlogin">Admin Ekranı</Link>
                        <Link class="btn btn-info m-2 d-inline  bg-dark text-white" to="/userlogin">Kullanıcı Ekranı</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}