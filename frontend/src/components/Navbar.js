import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <div>
                Skander
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>

            </ul>
        </div>
    )
}