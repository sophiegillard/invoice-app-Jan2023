import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx"
import { Invoices } from "../pages/invoices/Invoices.jsx";

export const Routes = () =>{
    let route = useRoutes([
        {
            path: "/",
            element : <Home />,
        },
        {
            path : "/invoices",
            element: <Invoices />,
        }
    ])

    return (
        <>
            {route}
        </>
    )
}