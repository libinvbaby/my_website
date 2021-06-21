import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const newstyle={
    color:"white"
}

const navStyle={
    Color: 'white',
    listStyle:"none",
    fontSize:"30px",
    textDecoration:"none"

   
};
const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
    <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F23%2F00%2F19%2F54%2Fc32a1054-0542-46d1-9d27-1d4c759858ba%2F480456_gustigraphic.png?auto=format&ch=Width%2CDPR&w=500&h=500" style={{width:"150px",marginRight:"15px"}} />

		Website
	</h1>
    <br />
	<Container style={{marginLeft:"600px"}}>
		<Row>
		<Column>
			<Heading>About Us</Heading>
            <Link style={navStyle}  to='/about'> <li style={newstyle}>About</li></Link>
		</Column>
	
		<Column>
			<Heading>Contact Us</Heading>
            <Link style={navStyle}  to='/Contact'> <li style={newstyle}>Contact US</li></Link>
		
		</Column>
		<Column>
			<Heading>Shop</Heading>
            <Link style={navStyle}  to='/Shop'> <li style={newstyle}>Shop</li></Link>
			
		</Column>
		</Row>
	</Container>
    
	</Box>
   
);
};
export default Footer;
