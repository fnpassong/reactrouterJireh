import { Fragment } from "react"
import { NavLink } from "react-router-dom"

import '../stylos/header.scss';

export const Header = () => {
    return (
        <Fragment>
            <header className="menu">
                <div className="menu__logo">
                    Acá el logo
                </div>

                <nav className="menu__nav">
                    <NavLink to ='/'>Home</NavLink>
                    <NavLink to= '/artistas'>Artistas</NavLink>
                    <NavLink to ='/contacto'>Contacto</NavLink>
                </nav>
            </header>

            <div className="prueba">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim officiis doloremque temporibus veniam obcaecati unde.</p>
            </div>
        </Fragment>
    )
}