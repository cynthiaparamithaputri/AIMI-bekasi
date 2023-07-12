import {Nav} from "react-bootstrap"

function NavbarAdmin({Toggle}) {
  return (
    <div className="navbar-admin">
    <Nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
    </Nav>
    </div>
  )
}

export default NavbarAdmin