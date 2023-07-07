import {Navbar, Container, Form, Button} from "react-bootstrap"
import HeaderImage from "../assets/img/header-sm.gif"

const Register = () => {
  return (
    <div className="login">
    <Navbar expand="lg" className="fixed-top px-lg-5 py-2">
    <Navbar.Brand href="/login" className="fs-5 px-3"><i className="fa-solid fa-sm fa-chevron-left mx-2"></i>Kembali</Navbar.Brand>
    </Navbar>
    <div className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={HeaderImage}
          className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" />
          </Form.Group>
          <Button type="submit">
          Masuk
          </Button>
        </Form>
      </div>
    </div>
    </Container>
  </div>
  </div>
  )
}

export default Register