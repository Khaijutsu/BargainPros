import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="logo" className="logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Deals">Deals</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar