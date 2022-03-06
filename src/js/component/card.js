import React, { Component } from 'react';
import '../../css/card.css';

class Card extends Component {
    render() {
        return (
            <div className="card-body">
                <img className="card-body-img" src={this.props.img} alt=""/>
                <div className="card-body-">
                    <div className="card-body-title">
                        {this.props.name}
                    </div>
                    <div className="card-body-content">
                        <div className="card-body-content-title">
                            {this.props.title}
                        </div>
                        <div className="card-body-content-description">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
