import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">ZackWorld</Link>
          </li>
          <li>
            <Link to="/resume">resume</Link>
          </li>
      
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;