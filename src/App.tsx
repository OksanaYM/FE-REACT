import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./menu/menu.tsx";

function App() {

  return (
    <>
        <Menu/>
        <Outlet/>
    </>
  )
}

export default App;