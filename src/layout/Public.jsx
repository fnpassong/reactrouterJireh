import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const Public = () => {
    return (
        <Fragment>
           <Header />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </Fragment>
    )
}