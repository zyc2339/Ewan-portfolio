import "./styles/style.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiMenu } from "react-icons/fi";

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="body">
      <header className="header">
        <Link className="link" to="/">
          <img src="/image/icon.png" alt="" />
        </Link>
        <ul>
          <Link className="link" to="/">
            <li>HOME</li>
          </Link>
          <Link className="link" to="about">
            <li>ABOUT</li>
          </Link>
          <Link className="link" to="portfolio">
            {" "}
            <li>PORTFOLIO</li>
          </Link>
          <Link className="link" to="contact">
            <li>CONTACT</li>
          </Link>
        </ul>

        <div className="menu">
          <div className="menu-icon">
            {/* <GrMenu /> */}
            <FiMenu onClick={handleClick} />
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to="/">
              <MenuItem onClick={handleClose}>HOME</MenuItem>
            </Link>
            <Link className="link" to="about">
              <MenuItem onClick={handleClose}>ABOUT</MenuItem>
            </Link>
            <Link className="link" to="portfolio">
              <MenuItem onClick={handleClose}>PORTFOLIO</MenuItem>
            </Link>
            <Link className="link" to="contact">
              <MenuItem onClick={handleClose}>CONTACT</MenuItem>
            </Link>
          </Menu>
        </div>
      </header>
      <div className="main">
        <Outlet />
      </div>

      <footer className="footer">
        <div className="footer-icons">
          <a
            href="https://github.com/zyc2339/"
            target="_blank"
            title="github"
            rel="noreferrer"
          >
            {" "}
            <FaGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/ewan-zhang/"
            target="_blank"
            title="Linkedin"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icons" />
          </a>
        </div>
        <p>EWAN ZHANG ©2022</p>
      </footer>
    </div>
  );
}
export default Home;
