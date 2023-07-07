import {Navbar, Container, NavDropdown, Nav, Form, Button } from "react-bootstrap"
import HeaderImage from "../assets/img/header-sm.gif"

const NavbarComponent = () => {

  return (
    <div><Navbar expand="lg" className="fixed-top px-lg-5 py-2">
    <Container fluid>
      <Navbar.Brand href="/" className="fs-3 fw-bold">AIMI Bekasi<img src={HeaderImage} height="50" className="d-inline-block align-top" alt=""></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '250px' }}
          navbarScroll
        >
          <Nav.Link href="/">Beranda</Nav.Link>
          <Nav.Link href="/tentang">Tentang</Nav.Link>
          <NavDropdown title="Layanan" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/kegiatan">Kegiatan</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/daftarkonsel">Daftar Konseling</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/riwayat">
              Riwayat
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/login">Masuk</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Ketik untuk mencari.."
            className="me-2"
            aria-label="Search"
          />
          <Button>Cari</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavbarComponent