import { Opacity } from '@material-ui/icons'
import React, { Component } from 'react'
import './about.css'

 class About extends Component {
    render() {
        const style={
        
            backgroundPosition:"center",
          
        }
        const head={
            paddingTop:"70px",
            textAlign:"center",
            fontSize:"10vh",
        }
        return (
            <div style={{background:" linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)"}} >
                <div style={style}>
                <div>
                <h1 style={head}>About US</h1>
                </div>
                <div className="container" style={{ backgroundImage:"url(https://image.freepik.com/free-vector/gradient-geometric-background_78532-364.jpg)",backgroundSize:"cover",display:"flex",}}>
                 <div className="col-lg-7" > <h1>About Us</h1>
                 <p className="col-lg-11" style={{paddingLeft:"20px"}}>When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.</p></div>
                 <div className="col-lg-5" style={{paddingBottom:"30px"}}> <h2 className="col-lg-11" style={{paddingBottom:"30px"}}>Click Here</h2>
                 <img src="https://www.burchcom.com/wp-content/uploads/2019/01/images1997-5c2f99436aa28.jpg" alt="" />
                 <img className="second-image" src="https://www.burchcom.com/wp-content/uploads/2018/11/Society-3-300x169.jpg" alt="" />
                 <br /><br />
                 </div>
                
                </div>
                <br /><br />
                </div>
            </div>
        )
    }
}
export default About;
