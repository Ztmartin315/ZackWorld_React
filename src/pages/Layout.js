import { Outlet, Link } from "react-router-dom";
import '../styles/layout.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li class="title">
            <Link class="a1" to="/">ZackWorld  </Link>
          </li>
          <li>
            <Link class="a2" to="/about">About</Link>
          </li>
          <li>
            <Link class="a2" to="/resume">Resume</Link>
          </li>
          <li>
            <Link class="a2" to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;