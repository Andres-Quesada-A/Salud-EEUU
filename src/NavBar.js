import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/hipotesis">Hipotesis</CustomLink>
        <CustomLink to="/visualizaciones">Visualizaciones</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch( {path: resolvePath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}