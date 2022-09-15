import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setmenuOpen(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="home"
              activeClass="active"
              span={true}
              smooth={true}
            >
              Heros
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="programes"
              span={true}
              smooth={true}
            >
              Programes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="plans-i"
              span={true}
              smooth={true}
            >
              PLans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setmenuOpen(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
