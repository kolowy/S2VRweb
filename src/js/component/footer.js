import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
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