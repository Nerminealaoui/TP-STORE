import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        {/* Titre ou logo */}
        <a
          className="navbar-brand fw-bold"
          href="/"
          style={{ color: "#d4af37", fontSize: "22px" }}
        >
          Gold & Moon Jewelry
        </a>

        {/* Menu mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/boutiques">
                Nos Boutiques
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/nouveautes">
                Nouveautés
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/bagues">
                Bagues
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/colliers">
                Colliers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/bracelets">
                Bracelets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/ensembles">
                Ensembles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="/collections">
                Collections
              </a>
            </li>
          </ul>

          {/* Icônes à droite */}
          <div className="d-flex align-items-center">
            <a href="/profile" className="me-3">
              <i className="bi bi-person" style={{ fontSize: "20px" }}></i>
            </a>
            <a href="/search" className="me-3">
              <i className="bi bi-search" style={{ fontSize: "20px" }}></i>
            </a>
            <a href="/cart" className="me-3">
              <i className="bi bi-cart" style={{ fontSize: "20px" }}></i>
              <span className="badge text-bg-secondary ms-1">{total}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
