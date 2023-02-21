import React from "react";

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand ms-4" href="#">
              Kiki's Travel Services 
              </a>
              <img className="neko" src="https://em-content.zobj.net/thumbs/160/softbank/173/cat-face_1f431.gif" />
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
            <div className="collapse navbar-collapse me-5" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };

  export default Navbar;