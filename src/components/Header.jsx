import { Fragment } from "react"
import logo from "/jirehLogo.svg"
import { NavLink } from "react-router-dom"

import './MenuData';

import '../stylos/header.scss';
import { MenuData } from "./MenuData";

export const Header = () => {
    return (
        <Fragment>
            <header className="menu">
                <div className="menu__logo">
                    <img src={logo} alt="Logo de Jireh" />
                </div>

                <nav className="menu__nav">
                   
                    {
                        MenuData.map(({nombre, cName, icono, ruta}) => {
                            return(
                                <NavLink key={ruta} className={cName} to= {ruta} > <i> {icono} </i> {nombre} </NavLink>
                            )
                        })
                    }
                </nav>
            </header>

        </Fragment>
    )
}