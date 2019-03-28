import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Odonto App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submenu/slides">Slides</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submenu/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submenu/videos">Videos</Link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
);

export default Header;
