import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { selectCartCount } from "../redux/cartSelecors";

function Header()
{

    const cartCount=useSelector(selectCartCount);
    const [menuOpen,setMenuOpen]=useState(false)
    return(
    <header className="header">
        <div className="logo">
            <Link to="/">🛍️ Shoppy Globe</Link>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>☰</div>
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
            <Link to ="/cart" onClick={()=>setMenuOpen(false)}> 🛒 Cart ({cartCount})</Link>
        </nav>
    </header>);
}
export default Header;