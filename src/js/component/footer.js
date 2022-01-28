import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
                    <path fill="#3B4252" fill-opacity="1" d="M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>

                <div className='App-footer-copyright'> 
                    <div className='App-footer-name'>
                        <p>Made with <b>&hearts;</b> by hand</p>
                        <p><b>Not at all</b> powered by WordPress</p>
                        <p>Source code on <b>GitHub</b></p>
                    </div>
                    <div className='App-footer-name'>
                        <p>All rights reserved</p>
                        <p>Kolowy ‒ Paul Dufour ‒  © 2022</p>
                    </div>
                    <div>
                        <ul className='App-footer-menu'>
                            <li className='App-footer-list'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='App-footer-list'>
                                <Link to="/credit">Credit</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;