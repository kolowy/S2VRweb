import React, { Component } from 'react';
import Happy_duck from '../../images/poule.gif';
import Button from '../component/boutton';


class NoFound extends Component {
    render() {
        return (
            <div className="App-body">
                <div className="nofound">
                    <img src={Happy_duck} alt='404'/>
                    <Button>
                        <a href='/'>Home</a>
                    </Button>
                </div>
            </div>
        );
    }
}

export default NoFound;