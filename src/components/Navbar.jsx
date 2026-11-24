import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    function closeMenu() {
        setMenuOpen(false);
    }
    return (
        <nav className="navbar">
            <h2 className="logo">Our Services</h2>
            <button
                className="menu-btn"
                onClick={function () {
                    setMenuOpen(!menuOpen);
                }}
            >
                ☰
            </button>
            <div className={menuOpen ? "nav-links active" : "nav-links"}>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;