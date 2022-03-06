import logo from '../../images/patateLogo.png';
import '../../css/App.css';
import '../../css/header.css';
import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        const header = document.querySelector('.App-header');
        const logo = document.querySelector('.App-logo');
        if (!header.classList.contains('active')) {
            if (window.scrollY > 60) {
                header.classList.add('small');
                logo.classList.add('small');
            } else if (window.scrollY < 20) {
                header.classList.remove('small');
                logo.classList.remove('small');
            }
        }
    };
    handleClick = () => {
        const header = document.querySelector('.App-header');
        if (header.classList.contains('active')) {
            header.classList.remove('active');
        } else {
            header.classList.add('active')
        }
    };
    closeMenu = () => {
        const header = document.querySelector('.App-header');
        if (header.classList.contains('active')) {
            header.classList.remove('active');
        }
    };
    render() {
        return (
            <header  className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-header-content">
                    <p className='App-header-title'>
                        <Link to="/" onClick={this.closeMenu} >BattleFields: Return of the Potatoes</Link>
                    </p>
                    <ul className='App-header-menu'>
                        <li className='App-header-list'>
                            <Link to="/" onClick={this.closeMenu}><i class="fas fa-home"></i> Home</Link>
                        </li>
                        <li className='App-header-list'>
                            <Link to="/credit" onClick={this.closeMenu}><i class="fas fa-address-book"></i> Credit</Link>
                        </li>
                    </ul>
                    <button onClick={this.handleClick} className="App-header-small" type="button">
                        <span class="App-header-small-icon"><i className="fas fa-bars"></i></span>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;