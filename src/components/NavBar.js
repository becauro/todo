import React from "react";
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component {

    render() {
        return (
          <nav className="navbar bg-light navbar-expand-lg navbar-light">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item navbar-item-left">
                <Link to="/" className="nav-link"><span className="nav-link-span">Listar</span></Link>
            </li>
            <li className="navbar-item navbar-item-right">
                <Link to="/create" className="nav-link"><span className="nav-link-span nav-link-span-right" >Criar</span></Link>
            </li>
            </ul>
          </nav>
        )
    }
}