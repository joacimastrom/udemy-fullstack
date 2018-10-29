import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Udemy</a>
          <ul className="right">
            <li>
              <a>Login with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
