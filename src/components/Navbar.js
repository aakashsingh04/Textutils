import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'? 'light' : 'dark'} bg-${props.mode==='light'? 'light' : 'dark'}`}>
        <div className="container-fluid">
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
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>

            <div className="theme">
              <button className="btn btn-primary mx-2" id="red" onClick={() => props.themeChange('red')}>Red</button>
              <button className="btn btn-success mx-2" id="green" onClick={() => props.themeChange('green')}>Green</button>
            </div>

            <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
                <button className="btn btn-dark" onClick={props.toggleMode}>Enable DarkMode </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
