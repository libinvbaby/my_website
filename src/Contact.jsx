import React, { Component } from 'react';
import './contact.css';
import "bootstrap/dist/css/bootstrap.min.css";

 class Contact extends Component {
    render() {
        return (
            <div  style={{background:" linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>
               <div> <h1>Contact </h1></div>
               <div className="container" style={{display:"flex"}} >
               <div className="col-lg-5" style={{border:"0px solid white",borderRadius:"50px",backgroundImage:"url(https://image.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg)"}}> <h2>contact information</h2>
               <p>contact no:78690555</p> 
               <p>address:gmjfvvfvnvvv</p>
               <p>mail:ddvsnadj@gmail.com</p>
               </div>
               <div className="col-lg-3">
                   <h2 className="col-lg-12" style={{marginLeft:"250px", fontSize:"5vh"}} >Information</h2>
                   <img  src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""  />
               </div>
               </div>
                <br />
                <br />


                <form className="container">
                    <h1 style={{textAlign:"center"}}>Contact Us</h1>
                <div className="row col-lg-12">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="first name" />
                    </div>
                    <div className="col">
                        <input type="text " className="form-control" placeholder="last name" />
                    </div>
                   
                </div>
                <br />
                <div className="row col-lg-12">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                    <div className="col">
                        <input type="text " className="form-control" placeholder="phone no" />
                    </div>
                </div>
                <br />
                <div >
                <button type="submit" className="btn btn-primary " style={{marginLeft:"600px"}}>Submit</button>
                <br />
                <br />

                </div>
              </form>              






                
            </div>
        )
    }
}
export default Contact;