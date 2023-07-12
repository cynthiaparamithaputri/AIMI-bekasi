import SideBar from "../components/SideBar"
import NavbarAdmin from "../components/NavbarAdmin"
import { useState } from "react"

function Admin() {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className="container-fluid admin min-vh-100">
        <div className="row">
            {toggle && <div className="col-6 col-md-2 bg-white vh-100 position-fixed">
            <SideBar />
            </div>}
            {toggle && <div className="col-6 col-md-2"></div>}
            <div className="col">
                <NavbarAdmin  Toggle={Toggle} />
            </div>
        </div>
    </div>
  )
}

export default Admin