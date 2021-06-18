import React from "react";
import "./content.css";

function Content() {
    return (
        <div>
            <div className="first_row">
                <div>
                    <h1 className="heading">
                        Hello every one
                        <br />
                        This is My site
                    </h1>
                    <br />
                    <p>
                        Writing isn’t an easy task. Whether you craft words for B2B or B2C audiences, the challenges can be <br />
                        many. I’ve created a diverse set of tips, tools, and resources to aid in shaping and modifying your <br />
                        work.It’s not an exhaustive collection. Some ideas may seem familiar. Some will be fresh. My hope is <br />
                        that you’ll walk away with some insights or new tools to help address or minimize the content <br />
                        creation challenges you face. Ready to explore? I’ve divided this article into two sections – the <br />
                        first takes a larger view and incorporates brand examples, while the second gets granular with <br />
                        writing tips and tools you can use today.
                    </p>
                </div>
                <div>
                    <h1 className="heading1">This is second row</h1>
                    <img
                        src="https://image.shutterstock.com/image-vector/web-development-coding-cross-platform-260nw-1128653108.jpg"
                        alt="children"
                    />
                </div>
            </div>
    <br />
               <div className='gallery'>
                   <div><h1>Gallery</h1></div>
               </div>
                
        </div>
    );
}

export default Content;
