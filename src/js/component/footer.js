import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#3B4252" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,261.3C480,277,600,299,720,288C840,277,960,235,1080,218.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
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