import { useState } from 'react'
import {Routes} from "./routes/Routes.jsx"
import {useRoutes} from "react-router-dom";
import {Home} from "./pages/home/Home.jsx";
import {Invoices} from "./pages/invoices/Invoices.jsx";

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes />
    </div>
  )
}



