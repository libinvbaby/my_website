import React, { Component } from 'react'

class Shop extends Component {
    render() {
        return (
            <div>
                <div className="shop_images">
                    <div className="imge">
                        <a href="#"><img src={this.props.source} alt="" style={{width:"500px",height:"300px"}}/></a>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Shop
