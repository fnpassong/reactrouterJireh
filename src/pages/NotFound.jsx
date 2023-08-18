import { Fragment } from "react";
import { useRouteError } from "react-router-dom"

export const NotFound = ()=> {

    const error = useRouteError();

    return (
        <Fragment>

            <div>
                <h3>No existe la página</h3>
                <h1>404</h1>
                <p>Page not found</p>
                <p>{error.statusText || error.message}</p>
            </div>


        </Fragment>
    )
}