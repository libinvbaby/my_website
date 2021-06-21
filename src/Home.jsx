import React, { Component } from "react";
import "./content.css";
import Images from "./Images";

import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            change: "click here",
            age: 220,
        };
    }
    ButtonChange = () => {
        this.setState({ age: "buy now" });
    };
    render() {
        return (
            <div style={{background:"linear-gradient(to bottom left, #33ccff 0%, #cc6600 100%)"}}>
                <br /><br /> <br />
                <div  className="first_row  container-fluid">
                    <div className="col-lg-6">
                        <h1 className="heading1 ">
                            Home Page
                                                        
                        </h1>
                        <br />
                        <p className="col-lg-11" style={{ textAlign: "justify",paddingLeft:"50px" }}>
                            Writing isn’t an easy task. Whether you craft words for B2B or B2C audiences, the challenges can
                            be many. I’ve created a diverse set of tips, tools, and resources to aid in shaping and
                            modifying your work.It’s not an exhaustive collection. Some ideas may seem familiar. Some will
                            be fresh. My hope is that you’ll walk away with some insights or new tools to help address or
                            minimize the content creation challenges you face. Ready to explore? I’ve divided this article
                            into two sections – the first takes a larger view and incorporates brand examples, while the
                            second gets granular with writing tips and tools you can use today.
                        </p>
                    </div>
                   <div className="col-lg-4">
                   <div className="img col-lg-6">
                        <h1 className="heading2">Home</h1>
                        <img
                            src="https://images.pexels.com/photos/4659806/pexels-photo-4659806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="children"
                        />
                    </div>

                   </div>
                </div>
                <br />
                <div className="gallery  container">
                    <div>
                        <h1>Gallery</h1>
                    </div>
                    <br />

                    <div className="Images">
                        <div className="option col-lg-5">
                            <Images
                                name="Google"
                                age="120"
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />

                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                        <div className="option col-lg-5">
                            <Images
                                name="facebook"
                                age={this.state.age}
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                        <div className="option col-lg-5">
                            <Images
                                name="facebook"
                                age={this.state.age}
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                    </div>
                    <div className="images2">
                        <div className="option col-lg-5">
                            <Images
                                name="instagram"
                                age="120"
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                        <div className="option col-lg-5">
                            <Images
                                name="instagram"
                                age="120"
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                        <div className="option col-lg-5">
                            <Images
                                name="twitter"
                                age="120"
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;
