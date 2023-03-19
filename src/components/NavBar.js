import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <img
          src="../images/navLogo.png"
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top"
        />
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                {props.homeText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <div
              className="btn-primary rounded mx-2"
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
              onClick={() => props.toggleMode('primary')}
            ></div>
            <div
              className="btn-danger rounded mx-2"
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
              onClick={() => props.toggleMode('danger')}
            ></div>
          </div>

          <div
            className={`custom-control custom-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={() => props.toggleMode(props.mode)}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Enable {props.mode === 'light' ? 'dark' : 'light'} Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.prototype = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: 'Set Your Title Text',
  homeText: 'Set Home Text',
  aboutText: 'Set About Us Text',
};
