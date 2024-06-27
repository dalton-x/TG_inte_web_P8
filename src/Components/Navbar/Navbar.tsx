import { Link, useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime";
import "./Navbar.css"

function Navbar() {
  const links = [
    {
      id: 0,
      pathname: '/home',
      title: 'Accueil'
    },
    {
      id: 1,
      pathname: '/a-propos',
      title: 'À Propos'
    }
  ];

  const location = useLocation();

  return (
    <Fragment>
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.pathname}
          className={`ks-nav-link ${location.pathname === link.pathname ? 'active' : ''}`}
        >
          {link.title}
        </Link>
      ))}
    </Fragment>
  );
}

export default Navbar