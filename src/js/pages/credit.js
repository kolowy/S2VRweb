import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../css/credit.css';

class Credit extends Component {
    render() {
        return (
            <div className="App-body">
                <div className="App-credits">
                    <div className='App-credits-name'>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <img src={logo} href="https://reactjs.org/" className="App-credit-logo react" alt='test'/>
                            React
                        </a>
                    </div>

                    <div className='App-credits-name'>
                        <a href="https://www.nordtheme.com/" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 128 128" size="80" className='App-credit-logo'>
                                <path d="M87.102 118.131L42.667 61.255V45.473l49.247 63.665h26.463V19.492H73.87l-9.623-9.623H128v108.262z"/>
                                <path d="M40.899 9.869l44.434 56.874v15.781L36.087 18.861H9.624v89.646h44.507l9.623 9.623H0V9.869z"/>
                            </svg><br></br>
                            NORD Theme
                        </a>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Credit;