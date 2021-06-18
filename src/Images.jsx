import React, { Component } from 'react'
import './image.css'
 class Images extends Component {
       
    render() {
        return (
            <div>
                <li className='images'> 
                    <img src={this.props.image} alt="" />
                    <p>{this.props.name}</p>
                     <p>{this.props.age}</p>
                     

                </li>
            </div>
        )
    }
}
export default Images;
