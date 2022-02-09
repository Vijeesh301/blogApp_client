import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (
        <div>
            <nav className="header">
                <div className="articles">
                    <Link className="link" to="/">HOME</Link>
                    <Link className="link" to="/register">REGISTER</Link>
                    <Link className="link" to="/login">LOGIN</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;