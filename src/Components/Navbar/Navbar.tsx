import { Link, useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime";

function Navbar() {
  const links = [
    {
      pathname: '/home',
      title: 'Accueil'
    },
    {
      pathname: '/a-propos',
      title: 'À Propos'
    }
  ];

  const location = useLocation();

  return (
    <Fragment>
      {links.map((link, index) => (
        <Link
          key={index}
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