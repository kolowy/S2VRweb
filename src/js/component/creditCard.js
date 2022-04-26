import React, { Component } from 'react';
import '../../css/credit.css';

class Card extends Component {
    render() {
        return (
            <div className='App-credits-name'>
                <a href={this.props.website} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.logo} href={this.props.website} className={this.props.tag} alt='test'/><br/>
                    {this.props.name}
                </a>
            </div>
        );
    }
}

export default Card;
