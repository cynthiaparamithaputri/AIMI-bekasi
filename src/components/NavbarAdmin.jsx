import {Navbar, Container, Nav } from "react-bootstrap"

const NavbarAdmin = () => {

  return (
    <div className="navbar-admin"><Navbar expand="lg" className="fixed-top px-lg-5 py-2 bg-white">
    <Container fluid>
      <Navbar.Brand href="/admin" className="fs-3 fw-bold">AIMI Bekasi<i className="bi bi-pencil px-3"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '250px' }}
          navbarScroll
        >
          <Nav.Link href="/admin" className="mx-3"><i className="bi bi-house-fill px-1"></i>Beranda</Nav.Link>
          <Nav.Link href="/datakegiatan" className="mx-3"><i className="bi bi-calendar-fill px-1"></i>Kegiatan</Nav.Link>
          <Nav.Link href="/datakonseling" className="mx-3"><i className="bi bi-book-fill px-1"></i>Data Konseling</Nav.Link>
          <Nav.Link href="/datakonselor" className="mx-3"><i className="bi bi-person-fill px-1"></i>Konselor</Nav.Link>
          <Nav.Link href="/" className="mx-3"><i className="bi bi-x-square px-1"></i>Keluar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavbarAdmin