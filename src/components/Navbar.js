import "bulma/css/bulma.min.css";
import { useState } from "react";

function Navbar() {
  const [isBurguerActive, setIsBurguerActive] = useState(false);
  const burguerMenuHandler = () => {
    setIsBurguerActive(!isBurguerActive);
  };
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="" width="112" height="28"></img>
          </a>

          <a
            role="button"
            className={`navbar-burger ${isBurguerActive && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={burguerMenuHandler}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isBurguerActive && "is-active"}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">INICIO</a>
            <a className="navbar-item">PRODUCTOS</a>
            <a className="navbar-item">CONTACTO</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
