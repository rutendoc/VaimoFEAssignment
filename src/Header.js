import React from 'react'
import './css/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <h3>Rutendo Vaimo FE Technical Assignment &#128587;&#127998;</h3>
            </Link>
            
        </div>
    )
}

export default Header
