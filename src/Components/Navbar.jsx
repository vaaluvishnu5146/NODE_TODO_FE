import React from "react";
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Simple Tasks</span>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              Todos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
