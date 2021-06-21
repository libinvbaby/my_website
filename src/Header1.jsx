import React from "react";
import "./header1.css";
import {Link} from 'react-router-dom'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { colors } from "@material-ui/core";
 


function Header1() {
    let newstyle={
        color:"white"
    }
    const navStyle={
        Color: 'white',
        textDecoration:"none",
        fontSize:"30px",
    
       
    };
    
    return (
        <div>
            const MyHeader = () ={">"}(
  <StickyHeader
    // This is the sticky part of the header.
    header={
            <nav>
                <Link to="/home"><img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F23%2F00%2F19%2F54%2Fc32a1054-0542-46d1-9d27-1d4c759858ba%2F480456_gustigraphic.png?auto=format&ch=Width%2CDPR&w=500&h=500" alt="" style={{width:"100px",marginTop:"5px"}}/></Link>
                <ul className='nav-links'>
                <Link style={navStyle} to='/home'> <li style={newstyle}>Home</li></Link>
                   <Link style={navStyle} to='/shop'> <li style={newstyle}>Shop</li></Link>
                   <Link style={navStyle} to='/contact'> <li style={newstyle}>Contact</li></Link>
                    <Link style={navStyle} to='/about'><li style={newstyle}>About</li></Link>
                </ul>
            </nav>
            }
            ></StickyHeader>
        </div>
    );
}


export default Header1;
