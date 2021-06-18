import React from "react";
import "./header1.css";

function Header1() {
    return (
        <div className="header">
            <div className="Left_side">
                <img
                    src="data:image/png;base64,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"
                    alt="logo"
                />
               <div className='logo1'> <h1>WEBSITE</h1></div>
            </div>
            <div className="right_side">
                <div className="input">
                    <li>HOME</li>
                </div>
                <div className="input">
                    <li>ABOUT US</li>
                </div>
                <div className="input">
                    <li>CONTACT US</li>
                </div>
                <div className="input">
                    <li>BLOGS</li>
                </div>
                <div className="input">
                    <button className="Button">CLICK HERE</button>
                </div>
            </div>
        </div>
    );
}

export default Header1;
