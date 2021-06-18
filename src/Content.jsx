import React, { Component } from "react";
import "./content.css";
import Images from "./Images";
import Shop from "./Shop";
import "bootstrap/dist/css/bootstrap.min.css";

class Content extends Component {
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
            <div>
                <div  className="first_row  container">
                    <div>
                        <h1 className="heading">
                            Hello every one
                            <br />
                            This is My site
                        </h1>
                        <br />
                        <p className="col-lg-8" style={{ textAlign: "justify" }}>
                            Writing isn’t an easy task. Whether you craft words for B2B or B2C audiences, the challenges can
                            be many. I’ve created a diverse set of tips, tools, and resources to aid in shaping and
                            modifying your work.It’s not an exhaustive collection. Some ideas may seem familiar. Some will
                            be fresh. My hope is that you’ll walk away with some insights or new tools to help address or
                            minimize the content creation challenges you face. Ready to explore? I’ve divided this article
                            into two sections – the first takes a larger view and incorporates brand examples, while the
                            second gets granular with writing tips and tools you can use today.
                        </p>
                    </div>
                    <div className="img   col-lg-5">
                        <h1 className="heading1">This is second row</h1>
                        <img
                            src="https://image.shutterstock.com/image-vector/web-development-coding-cross-platform-260nw-1128653108.jpg"
                            alt="children"
                        />
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
                                name="twitter"
                                age="120"
                                image="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130__340.jpg"
                            />
                            <button onClick={this.ButtonChange}>{this.state.change}</button>
                        </div>
                    </div>
                </div>
                <div className="shop container">
                    <h1 style={{ textAlign: "center" }}>SHOP</h1>
                    <br />
                    <div className="blue">
                        <div className="col-lg-5 ">
                            <Shop
                                source=" https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=M
                                nwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVu
                  fDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                            />
                            <button className='btnbtn'>Shop Now</button>
                        </div>

                        <div className="col-lg-5 ">
                            <Shop
                                source="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=
                  MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            />
                            <button className='btnbtn'>Shop Now</button>
                        </div>
                    </div>
                    <br />
                    <div className="green ">
                        <div className="col-lg-5 ">
                            <Shop
                                source="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=
                      rb-1.2.1&auto=format&fit=crop&w=1574&q=80"
                            />
                            <button className='btnbtn'>Shop Now</button>
                        </div>
                        <div className="col-lg-5 ">
                            <Shop
                                source="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&a
                        uto=format&fit=crop&w=750&q=80"
                            />
                            <button className='btnbtn'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
