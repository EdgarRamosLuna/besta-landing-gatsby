import "./topbar.scss"
import React from 'react';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './bestalogo.png';
import { Link } from "gatsby";



export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <Link to="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="itemContainer">
                    <Link to="/#modelos">Modelos</Link>
                </div>
                <div className="itemContainer">
                    <Link to="/#comunidad">¿Cómo funciona?</Link>
                </div>
                <div className="itemContainer">
                    <Link to="/#beneficios">Beneficios</Link>
                </div>
                <div className="itemContainer">
                    <Link to="/visitanos">Contacto</Link>
                </div>
                <div className="itemContainer">
                    Blog
                </div>
            </div>
            
            <div className="right">
            
                <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
