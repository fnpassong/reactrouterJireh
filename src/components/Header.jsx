import { Fragment } from "react"
import logo from "/jirehLogo.svg"
import { NavLink } from "react-router-dom"

import '../stylos/header.scss';

export const Header = () => {
    return (
        <Fragment>
            <header className="menu">
                <div className="menu__logo">
                    <img src={logo} alt="Logo de Jireh" />
                </div>

                <nav className="menu__nav">
                    <NavLink to ='/'>Home</NavLink>
                    <NavLink to= '/artistas'>Artistas</NavLink>
                    <NavLink to ='/contacto'>Contacto</NavLink>
                </nav>
            </header>

        </Fragment>
    )
}